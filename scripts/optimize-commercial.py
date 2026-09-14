"""Export the selected original photographs without modifying their files.
Run with Pillow. Existing exports are retained; remove a derivative explicitly to rebuild it.
"""
from pathlib import Path
from PIL import Image, ImageOps, ImageCms
import json, io
root = Path(__file__).resolve().parents[1]
source = root / 'assets/projects/commercial-photgraphy '
output = root / 'assets/projects/commercial-photography/optimized'
output.mkdir(parents=True, exist_ok=True)
selection = [
 ('03_OnionRings.jpg', 'onion-rings', 'Golden onion rings served in a metal bowl'),
 ('05_BagelTime_CloseUp.png', 'bagel-table', 'Hands sharing filled bagels across a table'),
 ('09_CoffeeManufactury.jpg', 'coffee-pour', 'Milk poured into a cup of coffee'),
 ('14_Pastrychef&Cake.jpg', 'pastry-service', 'A person holding a tray of pastries in the deli'),
 ('18_Salade.jpg', 'salad-table', 'A fork and knife above a fresh salad'),
 ('22_BreakTime.jpg', 'outdoor-table', 'Coffee, food and a newspaper at an outdoor table'),
 ('07022026-DSC09829.jpg', 'street-portrait', 'A woman in a patterned dress walking past a leafy terrace'),
 ('07022026-DSC09926.jpg', 'summer-detail', 'A hand holding a cold drink in warm afternoon light'),
 ('08022026-DSC09945.jpg', 'cocktails', 'Two cocktails on a yellow window ledge'),
 ('08022026-DSC09990.jpg', 'balcony-portrait', 'A woman holding a cocktail beside a yellow window'),
 ('24_TheBag.jpg', 'deli-bag', 'A Lox in a Box bag in a patch of window light'),
]
rows=[]
for filename, stem, alt in selection:
 p=source/filename
 im=ImageOps.exif_transpose(Image.open(p))
 if im.info.get('icc_profile'):
  im=ImageCms.profileToProfile(im,ImageCms.ImageCmsProfile(io.BytesIO(im.info['icc_profile'])),ImageCms.createProfile('sRGB'),outputMode='RGB')
 else: im=im.convert('RGB')
 variants=[]
 for width in (640,1200,1800):
  copy=im.copy(); copy.thumbnail((width,2400),Image.Resampling.LANCZOS)
  dest=output/f'{stem}-{width}.webp'
  if not dest.exists(): copy.save(dest,'WEBP',quality=84,method=6)
  variants.append(dict(src=str(dest.relative_to(root)),width=copy.width,height=copy.height,bytes=dest.stat().st_size))
 rows.append(dict(original=str(p.relative_to(root)),bytes=p.stat().st_size,width=im.width,height=im.height,alt=alt,variants=variants))
(output/'manifest.json').write_text(json.dumps(rows,indent=2)+'\n')
print(json.dumps(dict(original_bytes=sum(x['bytes'] for x in rows),exports_bytes=[sum(x['variants'][i]['bytes'] for x in rows) for i in range(3)])))
