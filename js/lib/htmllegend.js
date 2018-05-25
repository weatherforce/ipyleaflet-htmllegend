var ipyleaflet = require('jupyter-leaflet');
var _ = require('lodash');
var L = require('leaflet');
var htmlLegend = require('leaflet-html-legend');


var HtmlLegendView = ipyleaflet.LeafletControlView.extend({
    initialize: function (parameters) {
        HtmlLegendView.__super__.initialize.apply(this, arguments);
        this.map_view = this.options.map_view;
    },
    // Render the view.
    render: function() {
        this.config_changed();
        this.model.on("change:config", this.config_changed, this);
    },
    config_changed: function() {
        if (this.obj) this.obj.remove();
        var config = this.model.get("config");
        var layerId = config.legends[0].layer.slice(10);
        var widgetManager = this.map_view.model.widget_manager;
        var htmlLegendView = this;
        console.log("1) ******", config);
        widgetManager.get_model(layerId).then(function(layer) {
            layer.views[Object.keys(layer.views)[0]].then(function(view) {
                config.legends[0].layer = view.obj;
                console.log("2) ******", config);
                htmlLegendView.obj = L.control.htmllegend(config);
                htmlLegendView.obj.addTo(htmlLegendView.map_view.obj);
            });
        });
    }
});


module.exports = {
    HtmlLegendView : HtmlLegendView
};
