require('leaflet-html-legend/dist/L.Control.HtmlLegend.css')

// Export widget models and views, and the npm package version number.
module.exports = require('./htmllegend.js');
module.exports['version'] = require('../package.json').version;
