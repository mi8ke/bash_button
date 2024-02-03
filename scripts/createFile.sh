#!/bin/bash
# バッチファイル名: createFile.sh

# ファイル名を読み込むテキストファイル
fileList="fileList.txt"

# 出力先フォルダ
outputDir="./output"
# 出力先フォルダが存在しない場合、作成する
if [ ! -d "$outputDir" ]; then
    mkdir "$outputDir"
fi

# ファイルを作成
while read -r filename; do
    touch "$outputDir/$filename"
done < "$fileList"

echo "ファイルを作成しました。"
