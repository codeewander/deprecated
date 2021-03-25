---
id: command-line
title: Command Line 常用操作
keywords:
  - terminal
  - bash
---

```bash
pwd                  # 取得目前位置
ls                   # 列出目前的檔案列表，搭配 -a（顯示隱藏檔）, -l（顯示完整資訊）, -t（根據最後修改時間排序檔案）

cd <directory>       # 進入目錄
mkdir <directory>    # 建立新目錄
touch <filename>     # 建立檔案
open <filename>      # 打開檔案

cp <file> <directory> # 複製檔案
   cp index.html about.html # 複製index.html 一份命名為 about.html

mv <file-old> <file-new|directory>     # 移動檔案
    mv index.html info.html                # 把 index.html 更名為 info.html
    mv index.html a_folder/                # 把 index.html 移動到 a_folder 資料夾中

rm <file|directory>                    # 刪除檔案
    rm *.html                              # 刪除目錄中所有 html 結尾的檔案
    rm -r <folder>                         # 刪除資料夾(-r 代表 recursive)
    rm -f <file>                           # 刪除檔案(-f 代表 force)
    rm -rf [folder_name]                   # 刪除資料夾（不論裡面有沒有內容或其他資料夾）

sudo                      # 暫時取得權限
clear                     # 清除畫面
```

### 參考資料

- [Command Line Cheat Sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/) @ Git Tower
