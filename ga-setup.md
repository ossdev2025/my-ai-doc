---
title: Google Analytics（GA4）設定方法と確認ポイント
description: Docusaurus v3でGoogle Analyticsを導入する手順と、どこで何が見られるかのまとめ
tags:
  - Google Analytics
  - Docusaurus
  - 設定手順
---

# Google Analytics（GA4）導入方法と確認ポイント

## 1. 必要なもの
- Google Analyticsの「測定ID」（例: `G-J9JYY1B28K`）
- Docusaurus v3 プロジェクト

## 2. 導入手順

### ① 公式プラグインのインストール
```bash
npm install @docusaurus/plugin-google-gtag
```

### ② docusaurus.config.js に設定追加
```js
plugins: [
  [
    '@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-J9JYY1B28K', // ← あなたの測定ID
      anonymizeIP: true,          // IP匿名化（必要に応じて）
    },
  ],
],
```

### ③ 余計なカスタムスクリプトは削除
- `src/theme/Root.js` などで `gtag.js` を手動で入れていた場合は削除OK

### ④ ビルド＆サーブ
```bash
npm run build && npm run serve
```

---

## 3. どこで何が見られるのか？

### サイトの `<head>` 内
- 下記2つのタグが自動で全ページに挿入されます：
  ```html
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9JYY1B28K"></script>
  <script>
    function gtag(){dataLayer.push(arguments)}
    window.dataLayer=window.dataLayer||[],
    gtag("js",new Date),
    gtag("config","G-J9JYY1B28K",{anonymize_ip:!0})
  </script>
  ```

### Google Analytics 管理画面
- [Google Analytics](https://analytics.google.com/) にアクセス
- 対象プロパティを選択
- 「レポート」→「リアルタイム」や「イベント」などでアクセス状況が確認可能

### Docusaurus側で確認できること
- ページのソースを表示し、`<head>` 内に上記スクリプトが入っていればOK
- 計測開始まで数分かかる場合あり

---

## 4. よくあるトラブル
- `<head>` にタグが出ない → プラグイン設定/ビルド漏れを再確認
- リアルタイムで反応しない → キャッシュ、GA側の反映遅延、ブラウザのトラッキング防止設定等

---

## 5. 参考リンク
- [Docusaurus公式: Google Analyticsプラグイン](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-google-gtag)
- [Google公式: GA4ヘルプ](https://support.google.com/analytics/answer/10089681?hl=ja)

---

何か問題があれば、このドキュメントや公式ドキュメントを参考にしてください。
