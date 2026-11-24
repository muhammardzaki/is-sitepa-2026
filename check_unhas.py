from PIL import Image

img = Image.open(r"Foto foto\Welcoming speech\Dekan Fakultas Teknik Unhas.png")
alpha = img.split()[-1]
# Threshold alpha > 20
thresholded = alpha.point(lambda p: 255 if p > 20 else 0)
bbox = thresholded.getbbox()
print(f"Non-transparent bbox (alpha > 20): {bbox}")
print(f"Total image size: {img.size}")
