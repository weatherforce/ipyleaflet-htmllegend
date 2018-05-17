var jupyter-leaflet-htmllegend = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-leaflet-htmllegend',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-leaflet-htmllegend',
          version: jupyter-leaflet-htmllegend.version,
          exports: jupyter-leaflet-htmllegend
      });
  },
  autoStart: true
};

