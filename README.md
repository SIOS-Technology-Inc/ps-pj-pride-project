# 自慢プロジェクトフロントエンド

社内で使用している『[自慢プロジェクト](https://blue-ground-0332b1a00.3.azurestaticapps.net/)』のフロントエンドリポジトリです。

![インフラ情報](./.github/assets/21b70934c44400a03e9678127314da46.webp)

## 実行方法

.env.developファイルを生成して、以下のFirebaseとの接続情報を設定
接続情報に関しては、`@Ryunosuke-Tanaka-sti`に問い合わせをお願いします。

```txt
VITE_FB_APIKEY="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_AUTHDOMAIN="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_DATABASEURL="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_PROJECT_ID="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_STORAGE_BUCKET="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_MESSAGEING_SENDER_ID="xxxxxxxxxxxxxxxxxxxxx"
VITE_FB_APP_ID="xxxxxxxxxxxxxxxxxxxxx"
```

設定後以下の手順でアプリケーション起動

```bash
yarn install

yarn dev
```

## ブランチ運用

Git Flowを採用

```mermaid
gitGraph
    commit id: "main"
    branch develop
    checkout develop
    commit id: "develop"
    branch feature/sample1
    branch feature/sample2
    checkout feature/sample1
    commit
    commit
    checkout develop
    merge feature/sample1
    commit id: "develop-merge-sample1"
    checkout feature/sample2
    commit
    commit
    checkout develop
    merge feature/sample2
    commit id: "develop-merge-sample2"
    checkout main
    merge develop
    commit id: "main-merge-develop"
```

- issueに対応する場合は`feature/issue〇〇`で対応
- Pull Requestでdevelopにマージすることを基本運用とする
- レビューには`@Ryunosuke-Tanaka-sti`を追加

### リソース

- [Frontend:pride-project(Azure Static Web Apps)](https://portal.azure.com/#@ntakeisios.onmicrosoft.com/resource/subscriptions/f682b8b9-db81-412d-97da-c8a2c93d586a/resourceGroups/ryu_test/providers/Microsoft.Web/staticSites/pride-project/staticsite)
- [BFF:pride-content(Azure Web Apps)](https://portal.azure.com/#@ntakeisios.onmicrosoft.com/resource/subscriptions/f682b8b9-db81-412d-97da-c8a2c93d586a/resourceGroups/ryu_test/providers/Microsoft.Web/sites/pride-content/appServices)

## 画面設計書

2024-04-24現在整備中です。
Figmaにアクセスしたい場合は、`@Ryunosuke-Tanaka-sti`に問い合わせをよろしくお願いします。

[Figma]([https://](https://www.figma.com/file/6Ic1LeHOfLHfkkM5WNMhTb/%E8%A9%A6%E9%A8%93%E5%A0%B4?type=design&node-id=0%3A1&mode=design&t=h5VULBOXgvdlip86-1))
