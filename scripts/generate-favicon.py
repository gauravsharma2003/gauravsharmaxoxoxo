"""Build pixel-faithful, softly rounded favicons from the About portrait."""

from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public/assets/images/seo/gaurav.webp"
PNG = ROOT / "public/assets/images/favicon-portrait.png"
ICO = ROOT / "public/favicon.ico"
SIZE = 64
SCALE = 4
RADIUS = 7

image = Image.open(SOURCE).convert("RGBA").resize(
    (SIZE, SIZE), Image.Resampling.LANCZOS
)
mask = Image.new("L", (SIZE * SCALE, SIZE * SCALE), 0)
ImageDraw.Draw(mask).rounded_rectangle(
    (0, 0, SIZE * SCALE - 1, SIZE * SCALE - 1),
    radius=RADIUS * SCALE,
    fill=255,
)
image.putalpha(mask.resize((SIZE, SIZE), Image.Resampling.LANCZOS))
image.save(PNG, optimize=True)
image.save(ICO, format="ICO", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
