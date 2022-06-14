# <img src="https://user-images.githubusercontent.com/70358393/173176830-ef020ced-b820-4037-8022-88eca697f858.png" alt="icon" width="25" hight="25"> URL and TITLE Copy Extension

## Project Description

Scrapbox の外部リンク用に`URL タイトル`という形式でコピーできるchrome拡張機能  
![Usage examples](https://user-images.githubusercontent.com/70358393/172033087-fdcaba6d-6b95-483f-b7e9-28b28a4081d1.gif)

## How to Install and Run the Project(ローカルビルド)

1. リポジトリをクローンします
   ```
   git clone https://github.com/suke0828/URL-and-TITLE-Copy-Extension.git
   ```
2. `npm install`を実行します
   ```
   npm install
   ```
3. `npm run build`を実行します
   ```
   npm run build
   ```
   - `build`フォルダが作成されます

##### `Google Chromeの場合`

4. `chrome`の拡張機能ページ([chrome://extensions](chrome://extensions))にアクセスします
5. デベロッパーモードを ON にして、「パッケージ化されていない拡張機能を読み込む」から`build`フォルダを指定します

##### `Microsoft Edgeの場合`

4. `Microsoft Edge`の拡張機能ページ([edge://extensions](edge://extensions))にアクセスします
5. 開発者モードを ON にして、「展開して読み込む」から`build`フォルダを指定します

## How to Use the Project

1. 読み込んだ拡張機能を表示します
2. アイコンをクリックします
3. 「URL と Title をコピー」ボタンを押すと`URL タイトル`という形式でコピーできます

## Technologies used in the project

| technology        | version     |
| ----------------- | ----------- |
| React             | 18.1.0      |
| TypeScript        | 4.7.2       |
| Chrome Extensions | Manifest V3 |
