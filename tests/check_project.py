"""Basic offline checks for the delivered landing page."""
from pathlib import Path
import re
from xml.etree import ElementTree

ROOT = Path(__file__).resolve().parents[1]
html = (ROOT / 'index.html').read_text()
data = (ROOT / 'assets/js/data.js').read_text()
js = (ROOT / 'assets/js/app.js').read_text()
assert 'assets/js/data.js' in html and 'assets/js/app.js' in html
assert len(re.findall(r"\{ id: '[^']+', ka:", data)) == 11
assert len(re.findall(r"\{ id: '[^']+', name:", data)) == 21
assert all(tag in html for tag in ['id="branchList"', 'id="categoryTrack"', 'id="branchDialog"', 'id="mobilePanel"'])
assert all(token in js for token in ['renderBranches', 'renderCategories', 'openBranchDialog', 'applyLanguage'])
assert len(list((ROOT / 'assets/categories').glob('*.webp'))) == 11
assert len(list((ROOT / 'assets/branches').glob('*/input'))) == 21
ElementTree.parse(ROOT / 'assets/img/store-placeholder.svg')
for image in (ROOT / 'assets/categories').glob('*.webp'):
    raw = image.read_bytes()
    assert raw[:4] == b'RIFF' and raw[8:12] == b'WEBP', image
print('OK: HTML, 21 branches, 11 categories, real WebP assets, photo folders, placeholder SVG and app behavior names.')

# Every supplied photograph is linked to the website's gallery manifest.
import json
manifest = (ROOT / 'assets/js/branch-photos.js').read_text().split(' = ', 1)[1].rstrip('\n;')
galleries = json.loads(manifest)
assert len(galleries) == 16
assert sum(map(len, galleries.values())) == 46
for pictures in galleries.values():
    for image_path in pictures:
        assert (ROOT / image_path).is_file(), image_path
