import ipywidgets as widgets
from traitlets import Unicode

@widgets.register
class HtmlLegend(widgets.DOMWidget):
    """Jupyter widget for the Leaflet.HtmlLegend plugin"""
    _view_name = Unicode('HtmlLegendView').tag(sync=True)
    _view_module = Unicode('jupyter-leaflet-htmllegend').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)
