from PIL import Image

img = Image.open("preview_unhas.png")
w, h = img.size
# Let's divide into 4 quadrants horizontally and check average colors
for i in range(4):
    box = (i * w // 4, 0, (i + 1) * w // 4, h)
    crop = img.crop(box)
    colors = crop.getcolors(maxcolors=100000)
    print(f"Segment {i} ({box[0]}-{box[2]}): {len(colors) if colors else 'many'} colors")
