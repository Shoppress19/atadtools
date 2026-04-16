with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

import re
# استبدال الـ iframe برابط وصورة
new_video_html = '''
<div style="position: relative; display: inline-block; width: 100%;">
    <a href="https://youtube.com/shorts/Isc8qA63L-Q" target="_blank" style="text-decoration: none;">
        <img src="https://img.youtube.com/vi/Isc8qA63L-Q/hqdefault.jpg" style="width: 100%; border-radius: 15px; border: 2px solid #ff5722;">
        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
            <div style="background: rgba(255, 87, 34, 0.9); color: white; padding: 15px 25px; border-radius: 50px; font-weight: bold; font-size: 1.2rem;">
                ▶ شاهد الفيديو
            </div>
        </div>
    </a>
</div>
'''
content = re.sub(r'<iframe.*</iframe>', new_video_html, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
