import os
from PIL import Image

def analyze(name):
    path = os.path.join(r"Foto foto\Welcoming speech", name)
    img = Image.open(path)
    print(f"\n=== {name} ===")
    print(f"Size: {img.size}, Mode: {img.mode}")
    if img.mode == 'RGBA':
        alpha = img.split()[-1]
        bbox = alpha.getbbox()
        print(f"Alpha bbox: {bbox}")
        # check min/max alpha
        print(f"Alpha extroma: {alpha.getextrema()}")
    # Let's inspect along border pixels
    w, h = img.size
    top_samples = [img.getpixel((x, 0)) for x in range(0, w, max(1, w//10))]
    print(f"Top border samples: {top_samples[:5]}")

analyze("Dekan Fakultas Teknik Unhas.png")
analyze("Dekan Faculty of Civil Engineering.png")
analyze("Dekan Faculty of Built Enviroment & Surveying - UTM.jpg")
