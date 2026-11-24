import os
from PIL import Image

folder = r"Foto foto\Welcoming speech"
for fname in os.listdir(folder):
    fpath = os.path.join(folder, fname)
    if os.path.isfile(fpath):
        with Image.open(fpath) as img:
            print(f"File: {fname}")
            print(f"  Format: {img.format}, Size: {img.size}, Mode: {img.mode}")
            # Sample border pixels
            corners = [
                img.getpixel((0, 0)),
                img.getpixel((img.width - 1, 0)),
                img.getpixel((0, img.height - 1)),
                img.getpixel((img.width - 1, img.height - 1)),
            ]
            print(f"  Corners: {corners}")
