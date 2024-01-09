# Sample React Page
test
## 構築に関する調べもの・リンク

### 初期設定

- [Eslint ＋ Prettier 周り](https://zenn.dev/longbridge/articles/ae3aa36cf17d73)
- [Tailwind ＋ ESLint 周り](https://zenn.dev/hisho/articles/ef1f12f9888064)
- [Tailwind install for Vite](https://tailwindcss.com/docs/guides/vite)
- [path alias settings](https://chaika.hatenablog.com/entry/2022/05/14/083000)
- [Tailwind と Storybook](https://zenn.dev/ikekyo/articles/react-tailwind-storybook)
- [Storybook と Vite 　ピヨピヨ](https://zenn.dev/longbridge/scraps/20f19ab7586c8b)
- [Builder との選択肢　公式さん](https://storybook.js.org/blog/storybook-for-vite/)
- [Eslint と Storybook](https://github.com/storybookjs/eslint-plugin-storybook#usage)
- [ESLint import React remove](https://zenn.dev/kaikii/articles/7f14be0586128d)

### SessionStorage について

- [【JavaScript】Cookie , localStorage, sessionStorage の違い](https://qiita.com/terufumi1122/items/76bafb9eed7cfc77b798)
- [sessionStorage をつかってみる](https://qiita.com/uralogical/items/ade858ccfa164d164a3b)
- [sessionStorage にオブジェクトを保存する](https://qiita.com/HuntingRathalos/items/2f23d0e7da0d68bc608c)

### Error Boundary

- offical
  - [js convert to ts](https://gist.github.com/esemeniuc/0586ff44995f370064bebf90134948ef)
  - [公式サイト](https://ja.reactjs.org/docs/error-boundaries.html)
  - Error Boundary で Promise のエラー補足をするために
    - Error Boundary はノーマルだと補足しないエラーがある（イベントハンドラ・非同期コード・SSR）
    - [それについての議論を海外ニキがやっていた](https://github.com/facebook/react/issues/11409)
    - [対策その一　 TS サンプル付き](https://www.asobou.co.jp/blog/web/error-boundary)
    - [対策その二　 JS サンプルのみ　 react-error-boundary に続く](https://qiita.com/nuko-suke/items/fdecac831533c3d8bbf0#:~:text=React%20%E3%81%AB%E3%81%AF%20Error%20Boundary,%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B%20React%20%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%A7%E3%81%99%E3%80%82)
- react-error-boundary
  - [公式 GitHub](https://github.com/bvaughn/react-error-boundary)
  - [ピヨピヨサンプル](https://zenn.dev/longbridge/articles/b7e76b31f993d9)
  - [サンプル](https://zenn.dev/taka_shino/articles/eccce2ee48e17f)
- Father の選択を SWR に変えてしまう選択
  - [公式のリンク](https://swr.vercel.app/ja/docs/error-handling)
  - [error boundary とのつなぎ込み](https://deecode.net/?p=2056)
  - SWR の導入からやってみるべき説

### SWR について

- SWR と React Query の比較記事
  - [言及１](https://zenn.dev/terrierscript/articles/2020-07-28-swr-react-query)
  - [言及２](https://scrapbox.io/fsubal/SWR_vs_React_Query)
  - [言及３よんでねぇ](https://blog.logrocket.com/swr-vs-tanstack-query-react/)
- [布教記事](https://zenn.dev/mast1ff/articles/5b48a87242f9f0)
- [公式サイト](https://swr.vercel.app/ja)
- [Errorboundary のつなぎ込み](https://deecode.net/?p=2056)

### Firebase について

- [Firebase の調べもの](https://yoheiko.com/blog/react%E3%81%A7%E3%81%AE%E3%83%A6%E3%83%BC%E3%82%B6%E3%83%BC%E8%AA%8D%E8%A8%BC%E3%80%90react-firebase-hooks%E3%81%A7%E5%AE%9F%E8%A3%85%E3%80%91/)
- [Firebase 初期セットアップ](https://reffect.co.jp/react/react-firebase-auth)
- [[React + Firebase Authentication]（前編）react プロジェクトの作成と firebase の初期設定](https://tech-lab.sios.jp/archives/31047)
- [[React + Firebase Authentication]（後編）ワンクリックログイン機能とルーティングの設定](https://tech-lab.sios.jp/archives/31117)
- Firestore
  - [公式](https://firebase.google.com/docs/firestore/manage-data/add-data?hl=ja)
  - [React 環境で Firebase SDK v9 の Firestore での CRUD の操作を学ぶ](https://reffect.co.jp/react/react-crud-firebase-9)
  - [Firestore ドキュメントを TypeScript のユーザー定義型オブジェクトに変換する (withConverter)](https://maku.blog/p/bw9kv6g/)
  - [React + Firestore【入門から実装まで】](https://yoheiko.com/blog/react-firestore%E3%80%90%E5%85%A5%E9%96%80%E3%81%8B%E3%82%89%E5%AE%9F%E8%A3%85%E3%81%BE%E3%81%A7%E3%80%91/)
  - [【Firebase】FireStore の Timestamp を JavaScript の Date に変換](https://bnsgt.hatenablog.com/entry/2021/10/15/092713)
  - [【Next.js】useSWR()で POST する](https://omkz.net/nextjs-swr-post/#mutate-%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%9F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E6%9B%B4%E6%96%B0%E6%96%B9%E6%B3%95)
  - [TypeScript で Firestore からデータを取り出す(FirebaseSDKv9)](<https://tiratom.hatenablog.com/entry/2022/03/12/TypeScript%E3%81%A7Firestore%E3%81%8B%E3%82%89%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%8F%96%E3%82%8A%E5%87%BA%E3%81%99(FirebaseSDKv9)>)
  - [Firestore のデータを TypeScript と Security Rules で安全に扱う話](https://www.gixo.jp/blog/15372/)

### React + Typescript

- [React×TypeScript の onChange の props 渡しで諦めない](https://zenn.dev/nbr41to/articles/3f1ae8cbc532b6)
-

### Azure AD について

- [公式チュートリアル](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react)
- [わかりやすい初期設定](https://fwywd.com/tech/aadb2c-auth)
- [わかりやすい導入](https://fwywd.com/tech/nextjs-azure-ad-b2c)
- [AD Config わかりやすさ](https://qiita.com/kujila_shiro/items/425e059afe542fa428cc)
- [AAD Config わかりやすさ](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/1-Authentication/2-sign-in-b2c/SPA/src/authConfig.js)
- [Template わかりやすさ](https://learn.microsoft.com/ja-jp/azure/active-directory/develop/tutorial-v2-react)
- [AD と AADB2C の違いについて](https://jpazureid.github.io/blog/azure-active-directory/azure-ad-b2c-fundamentals/)
- [AADB2C 利点](https://www.sigmact.com/updated/azure/azureadb2c/azureadb2c/)
- Redirect Login との格闘
  - https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_browser.html
  - https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_browser.html#redirectrequest
  - https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/2514
  - https://pub.dev/documentation/msal_js/latest/msal_js/RedirectRequest/onRedirectNavigate.html
  - https://pub.dev/documentation/msal_js/latest/msal_js/RedirectRequest/redirectStartPage.html
  - https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/msal-angular-v1/lib/msal-angular/src/msal-guard.service.ts#L75
  - https://stackoverflow.com/questions/71671755/redirect-to-home-page-after-react-azure-ad-login
  - https://github.com/AzureAD/microsoft-authentication-library-for-js/issues/1474

### microCMS について

- [公式リファレンス](https://document.microcms.io/content-api/get-list-contents)
- [microCMS × Next.js（TypeScript）で個人ブログを作る](https://qiita.com/hinako_n/items/e53b02c241b8e35d42cb#blogs)
- [型定義に関して 1](https://waml.dev/blog/nextjs-1)
- [型定義に関して 2](https://zenn.dev/sora_kumo/articles/2876c8f98eca56)
- [microCMS の markdown を変換する方法:dangerouslySetInnerHTML](https://hatolabo.com/programming/react%E3%81%A7html%E6%96%87%E5%AD%97%E5%88%97%E3%82%92%E6%8F%8F%E7%94%BB%E3%81%99%E3%82%8Bdangerouslysetinnerhtml)
- microCMS の markdown を変換する方法:html-react-parser
  - [公式](https://github.com/remarkablemark/html-react-parser#install)
  - https://www.engilaboo.com/react-html-parse/
  - https://kray.jp/blog/react-html-parser/
  - https://ji23-dev.com/blogs/microcms-html-react-parser

### Suspense について

- [React の Suspense 対応非同期処理を手書きするハンズオン](https://zenn.dev/uhyo/books/react-concurrent-handson)
- [React のトランジションで世界を分岐させるハンズオン](https://zenn.dev/uhyo/books/react-concurrent-handson-2)

---

## ブログ記事

- [SessionStorage と LocalStorage の取り組みちゃん](https://tech-lab.sios.jp/archives/32834)
- [Azure AD B2C 認証ページを作ってみる【React】](https://tech-lab.sios.jp/archives/33189)
- [Azure AD B2C 認証オプションについて【React】](https://tech-lab.sios.jp/archives/33229)
- [エラーハンドリング：Axios Interseptor【React】](https://tech-lab.sios.jp/archives/33155)

## 関連

- [Firebase コンソール](https://console.firebase.google.com/project/sample-react-blog/firestore?hl=ja)
