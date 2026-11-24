from PIL import Image

img = Image.open(r"Foto foto\Welcoming speech\Dekan Fakultas Teknik Unhas.png")
w, h = img.size
print("Width:", w, "Height:", h)

# Let's crop person 1 (approx 0 to w//3)
p1 = img.crop((0, 0, w * 35 // 100, h))
p1.save("person_1.png")

# Let's crop person 2 (approx w//3 to 2*w//3)
p2 = img.crop((w * 33 // 100, 0, w * 68 // 100, h))
p2.save("person_2.png")

# Let's crop person 3 (approx 2*w//3 to w)
p3 = img.crop((w * 65 // 100, 0, w, h))
p3.save("person_3.png")

print("Cropped p1, p2, p3")
