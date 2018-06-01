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
        config.updateOpacity = function (layer, opacity) {
            layer.setStyle({opacity: opacity, fillOpacity: opacity});
        };
        this.deserializeLayers(config);
    },
    deserializeLayers: function(config) {
        var widgetManager = this.map_view.model.widget_manager;
        var htmlLegendView = this;
        var count = 0;
        config.legends.forEach(function(legend) {
            var layerId = legend.layer.replace("IPY_MODEL_", "");
            widgetManager.get_model(layerId).then(function(layer) {
                var viewId = Object.keys(layer.views)[0];
                layer.views[viewId].then(function(view) {
                    legend.layer = view.obj;
                    count++;
                    if (count === config.legends.length) {
                        htmlLegendView.obj = L.control.htmllegend(config);
                        htmlLegendView.obj.addTo(htmlLegendView.map_view.obj);
                    }
                });
            });
        });
    }
});


module.exports = {
    HtmlLegendView : HtmlLegendView
};
