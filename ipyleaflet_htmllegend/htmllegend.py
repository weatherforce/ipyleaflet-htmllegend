from ipywidgets import register, widget_serialization, DOMWidget
from traitlets import Unicode, Dict, validate

to_json = widget_serialization['to_json']


@register
class HtmlLegend(DOMWidget):
    """Jupyter widget for the Leaflet.HtmlLegend plugin"""
    _view_name = Unicode('HtmlLegendView').tag(sync=True)
    _view_module = Unicode('jupyter-leaflet-htmllegend').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    config = Dict(default_value={"legends": []}).tag(sync=True)

    def add_legend(self, legend):
        self.config["legends"].append(to_json(legend, None))
        self.send_state()

    @validate("config")
    def _validate_config(self, proposal):
        config = proposal["value"]
        for legend in config["legends"]:
            legend["layer"] = to_json(legend["layer"], None)
        return config
