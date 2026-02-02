from PIL import Image
import os

def create_social_cover(input_path, output_path):
    with Image.open(input_path) as img:
        # Target ratio 1.91:1 (ideal for FB/WhatsApp link previews) or Square
        # Let's go with 1200x630 (landscape) or 1000x1000 (square).
        # Since the input is 960x1280 (vertical), we should crop the center-middle or top.
        
        target_width = 960
        target_height = 502 # approx 1.91:1
        
        # Center crop vertical
        top = (img.height - target_height) // 2
        bottom = top + target_height
        left = 0
        right = target_width
        
        cropped = img.crop((left, top, right, bottom))
        cropped.save(output_path, quality=90, optimize=True)
        print(f"Created social cover at {output_path}")

if __name__ == "__main__":
    create_social_cover('assets/12.jpeg', 'assets/social-cover.jpeg')
