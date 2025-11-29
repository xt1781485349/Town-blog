import os
import json

# 音乐文件目录（当前目录）
music_dir = "."

# 支持的音乐文件扩展名
extensions = [".mp3", ".wav", ".ogg"]

music_list = []

for file in os.listdir(music_dir):
    name, ext = os.path.splitext(file)
    if ext.lower() in extensions:
        music_list.append({
            "file": file,
            "name": name,
            "artist": "未知",
            "cover": "cover.jpg"
        })

# 输出到 music.json
with open("music.json", "w+", encoding="utf-8") as f:
    json.dump(music_list, f, ensure_ascii=False, indent=2)

print("生成 music.json 完成，共 {} 首歌曲".format(len(music_list)))
