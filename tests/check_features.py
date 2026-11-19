"""Offline regression checks for v3 improvements and 46 branch photographs."""
from pathlib import Path
from xml.etree import ElementTree
import json

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / 'index.html').read_text()
js = (ROOT / 'assets/js/app.js').read_text()
data = (ROOT / 'assets/js/data.js').read_text()
css = (ROOT / 'assets/css/global.css').read_text()
scss = (ROOT / 'assets/scss/global.scss').read_text()

assert css == scss, 'Global CSS and SCSS not synchronized'
for id_ in ['preloader', 'toggleInlineMap', 'dialogMapPanel', 'dialogMapFrame', 'categoryDialog', 'categoryTrack', 'branchList', 'contactLinks']:
    assert f'id="{id_}"' in html, id_
assert 'rel="preload"' in html
for snippet in ['IntersectionObserver', 'lazyImage', 'mapEmbedUrl', 'openCategoryDialog', 'toggleInlineMap', 'Promise.race']:
    assert snippet in js, snippet
assert 'googleMapsEmbedKey' in data
assert 'prefers-reduced-motion' in css and '@keyframes mascot-cross' in css
assert len(list((ROOT / 'assets/categories').glob('*.webp'))) == 11
for icon in ['walking-dog', 'facebook', 'instagram', 'tiktok', 'phone', 'map', 'home', 'grid', 'wolt', 'glovo']:
    ElementTree.parse(ROOT / 'assets/icons' / (icon+'.svg'))
manifest = (ROOT / 'assets/js/branch-photos.js').read_text().split(' = ', 1)[1].rstrip('\n;')
photos = json.loads(manifest)
assert len(photos) == 16 and sum(len(items) for items in photos.values()) == 46
assert all((ROOT / file).is_file() for photoset in photos.values() for file in photoset)
print('OK: maps, local icons, loading, categories, dog animation, 46 branch photos and accessibility motion controls')
