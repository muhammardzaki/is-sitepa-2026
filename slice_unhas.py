from PIL import Image

img = Image.open(r"Foto foto\Welcoming speech\Dekan Fakultas Teknik Unhas.png")
print("Original size:", img.size)

# Let's save 4 crops across horizontal axis to see where the Dean's portrait is
w, h = img.size
for i in range(4):
    crop = img.crop((i * w // 4, 0, (i + 1) * w // 4, h))
    crop.resize((200, 200 * h // (w // 4))).save(f"crop_{i}.png")
    print(f"Saved crop_{i}.png")
