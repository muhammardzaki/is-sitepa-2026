from PIL import Image

def find_skin_pixels(im):
    im_rgb = im.convert('RGB')
    w, h = im_rgb.size
    skin_count = 0
    for y in range(0, h, 5):
        for x in range(0, w, 5):
            r, g, b = im_rgb.getpixel((x, y))
            # Basic human skin tone heuristic
            if r > 95 and g > 40 and b > 20 and (max(r, g, b) - min(r, g, b) > 15) and abs(r - g) > 15 and r > g and r > b:
                skin_count += 1
    return skin_count

for i in range(4):
    crop = Image.open(f"crop_{i}.png")
    skins = find_skin_pixels(crop)
    print(f"crop_{i}.png skin pixels: {skins}")
