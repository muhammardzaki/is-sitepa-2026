from PIL import Image

img = Image.open(r"Foto foto\Welcoming speech\Dekan Fakultas Teknik Unhas.png")
w, h = img.size
print(f"Montage total size: {w} x {h}")

# Let's inspect columns from x=800 to x=1200
for x in range(800, 1300, 50):
    # check alpha at top and bottom
    col_alphas = [img.getpixel((x, y))[3] for y in range(0, h, 100)]
    print(f"x={x}: alphas={col_alphas[:5]}")
