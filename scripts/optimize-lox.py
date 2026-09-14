"""Generate LOX web derivatives; originals remain untouched. Requires Pillow."""
from pathlib import Path
from PIL import Image, ImageCms, ImageOps
import io, json

root = Path(__file__).resolve().parents[1]
folder = root / 'assets/projects/lox-in-a-box'
output = folder / 'optimized'
output.mkdir(exist_ok=True)
names = ['lox-storefront.webp', 'lox-product-hero.webp', 'lox-team-service.webp.jpg', 'lox-bag-street.webp', 'lox-food-detail.webp', 'lox-interior-wide.webp'] + [f'lox-photo-{n:02}.jpg' for n in range(7, 12)]
report = []
for name in names:
    source = folder / name
    im = ImageOps.exif_transpose(Image.open(source))
    if im.info.get('icc_profile'):
        im = ImageCms.profileToProfile(im, ImageCms.ImageCmsProfile(io.BytesIO(im.info['icc_profile'])), ImageCms.createProfile('sRGB'), outputMode='RGB')
    else:
        im = im.convert('RGB')
    stem = name.split('.')[0]
    variants = []
    for width in (640, 1280, 2400):
        copy = im.copy()
        if copy.width > width:
            copy = copy.resize((width, round(copy.height * width / copy.width)), Image.Resampling.LANCZOS)
        target = output / f'{stem}-{width}.webp'
        copy.save(target, 'WEBP', quality=88, method=6)
        variants.append({'src': str(target.relative_to(root)), 'width': copy.width, 'height': copy.height, 'bytes': target.stat().st_size})
    report.append({'original': name, 'bytes': source.stat().st_size, 'width': im.width, 'height': im.height, 'variants': variants})
(output / 'manifest.json').write_text(json.dumps(report, indent=2) + '\n')
print(json.dumps({'original_bytes': sum(r['bytes'] for r in report), 'variants_bytes': [sum(r['variants'][i]['bytes'] for r in report) for i in range(3)]}))
