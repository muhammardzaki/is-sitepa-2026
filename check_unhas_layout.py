from PIL import Image

img = Image.open(r"Foto foto\Welcoming speech\Dekan Fakultas Teknik Unhas.png")
# Let's save a resized preview to see its aspect ratio and layout
preview = img.resize((3464 // 4, 1173 // 4))
preview.save("preview_unhas.png")
print("Saved preview_unhas.png, size:", preview.size)

# Let's check non-zero pixels column by column
w, h = img.size
col_non_zero = []
for x in range(0, w, 20):
    count = 0
    for y in range(0, h, 20):
        p = img.getpixel((x, y))
        if p[3] > 20: # alpha > 20
            count += 1
    col_non_zero.append((x, count))

# Print non-empty segments
active_x = [x for x, c in col_non_zero if c > 0]
if active_x:
    print(f"Active X spans from {min(active_x)} to {max(active_x)}")
