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
        this.obj = L.control.htmllegend(config);
        this.obj.addTo(this.map_view.obj);
    }
});


module.exports = {
    HtmlLegendView : HtmlLegendView
};
