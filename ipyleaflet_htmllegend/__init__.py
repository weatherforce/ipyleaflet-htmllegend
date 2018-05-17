from ._version import version_info, __version__

from .htmllegend import HtmlLegend

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-leaflet-htmllegend',
        'require': 'jupyter-leaflet-htmllegend/extension'
    }]
