"""Reduce las fotos de public/photos a 640 px de ancho y calidad 72 (JPEG progresivo)."""
from pathlib import Path
from PIL import Image

for p in sorted((Path(__file__).parent.parent / "public" / "photos").glob("*.jpg")):
    im = Image.open(p)
    im = im.convert("RGB")
    if im.width > 640:
        im = im.resize((640, round(im.height * 640 / im.width)), Image.LANCZOS)
    im.save(p, "JPEG", quality=72, progressive=True, optimize=True)
