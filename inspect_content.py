from PIL import Image

for name in [
    "Dekan Fakultas Teknik Unhas.png",
    "Dekan Faculty of Built Enviroment & Surveying - UTM.jpg",
    "Dekan Faculty of Civil Engineering.png"
]:
    img = Image.open(f"Foto foto/Welcoming speech/{name}")
    print(f"\n{name} size: {img.size}")
    # Let's see some RGB values across horizontal line at middle height
    mid_y = img.size[1] // 2
    row = [img.getpixel((x, mid_y)) for x in range(0, img.size[0], max(1, img.size[0] // 10))]
    print(f"Mid row samples: {row[:10]}")
