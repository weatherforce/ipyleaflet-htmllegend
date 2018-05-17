var ipyleaflet = require('jupyter-leaflet');
var _ = require('lodash');
var L = require('leaflet');


var HtmlLegendView = ipyleaflet.LeafletControlView.extend({
    initialize: function (parameters) {
        HtmlLegendView.__super__.initialize.apply(this, arguments);
        this.map_view = this.options.map_view;
    },
    // Render the view.
    render: function() {
        this.value_changed();
        this.model.on("change:value", this.value_changed, this);
    },
    value_changed: function() {
        if (this.obj) this.obj.remove();
        this.obj = L.control();
        this.obj.onAdd = (function(map) {
          var div = L.DomUtil.create('div', 'info')
          div.innerHTML = this.model.get("value");
          return div;
        }).bind(this);
        this.obj.addTo(this.map_view.obj);
    }
});


module.exports = {
    HtmlLegendView : HtmlLegendView
};
