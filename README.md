# study-react

## ■npm

npm install request

node xxxx.js

### ・グローバルインストール時の格納先

npm root -g

npm install -g request

npm uninstall request

### ・プロジェクト開始

npm init

#### 対話レス

npm init -y

### ・package.jsonにモジュールのインストールを記録

npm install xxxx --save

npm install --save-dev xxxx

### ・package.jsonのdependenciesに基づいてモジュールをダウンロード

npm install

### ・package.json記載のスクリプトを実行（npm initで生成後、test というスクリプトのみ出来ている）

npm test

### ・package.jsonのscriptsに記載したスクリプト（例：start）を実行

npm run start

npm start

### React/JSX

npm install -g create-react-app

## ■babel

npm install --global babel-cli babel-preset-es2015

babel xxxx.js --presets=es2015 -o xxxx.out.js

### ・package.jsonに保存

npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015

### ・.babelrc作成

{ "presets": ["es2015"] }

### ・変更監視

babel xxxx.js -w -o xxxx.out.js

### ・ディレクトリ内を一括変換

babel src_dir -d dest_dir

#### 監視と組み合わせ

babel src_dir -w -d dest_dir

### ・コンパクト化

babel src_dir --compact=true -d dest_dir

### ・ソースマップ付き

babel xxxx.js -o xxxx.out.js --source-maps
