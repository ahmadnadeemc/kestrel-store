"""Bundle the site into one self-contained HTML file (docs/kestrel-single-file.html).

The multi-file version in the repo root is the one GitHub Pages serves. This bundle is for
sharing the store as a single file — drop it anywhere and it runs with no server.

    python build-single-file.py
"""

from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "docs" / "kestrel-single-file.html"

css = (ROOT / "css" / "styles.css").read_text(encoding="utf-8")
data = (ROOT / "js" / "data.js").read_text(encoding="utf-8")
app = (ROOT / "js" / "app.js").read_text(encoding="utf-8")

FONTS = (
    "https://fonts.googleapis.com/css2?family=Archivo:wght@600;700;800"
    "&family=Source+Sans+3:wght@400;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
)

BODY = """<header class="site-header" id="header"></header>
<main id="main"></main>
<footer class="site-footer" id="footer"></footer>
<div class="toasts" id="toasts" aria-live="polite"></div>
<div id="overlay"></div>"""

page = f"""<title>Kestrel Supply Co.</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="{FONTS}">
<style>
{css}
</style>
{BODY}
<script>
{data}
</script>
<script>
{app}
</script>
"""

OUT.parent.mkdir(exist_ok=True)
OUT.write_text(page, encoding="utf-8")
print(f"wrote {OUT} ({len(page) / 1024:.1f} KB)")
