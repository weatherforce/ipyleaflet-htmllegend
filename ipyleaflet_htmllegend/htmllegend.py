import ipywidgets as widgets
from traitlets import Unicode, Dict


@widgets.register
class HtmlLegend(widgets.DOMWidget):
    """Jupyter widget for the Leaflet.HtmlLegend plugin"""
    _view_name = Unicode('HtmlLegendView').tag(sync=True)
    _view_module = Unicode('jupyter-leaflet-htmllegend').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    config = Dict(default_value={"legends": []}).tag(sync=True)

    def add_legend(self, legend):
        self.config["legends"].append(legend)
        self.send_state()
