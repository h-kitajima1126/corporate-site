// 会社情報・サービス情報はすべてここで管理する。
// 【仮】の値は設立登記後に差し替えること。
export const company = {
  name: "合同会社SNB", // 【仮】
  nameEn: "SNB LLC", // 【仮】
  representative: "代表社員 〇〇 〇〇", // 【仮】
  established: "2026年〇月（設立予定）", // 【仮】
  address: "〒000-0000 〇〇県〇〇市〇〇", // 【仮】
  email: "info@example.com", // 【仮】ドメイン取得後に差し替え
  capital: "〇〇万円", // 【仮】
  business: [
    "ホームページ・ランディングページの企画・制作",
    "ドメイン取得・管理代行",
    "サーバー・Webサイトの保守運用",
  ],
};

export const service = {
  name: "まるごとWebパック", // 【仮】サービス名
  catch: "ホームページ制作から、ドメイン・サーバーの運用まで。",
  sub: "作って終わりにしない。公開後の更新・更新手続き・トラブル対応まで、ひとつの窓口でお任せいただけます。",
  plans: [
    {
      name: "ライト",
      initial: "55,000円〜",
      monthly: "3,300円",
      items: ["1ページLP", "ドメイン取得代行", "サーバー設定", "SSL対応"],
    },
    {
      name: "スタンダード",
      initial: "165,000円〜",
      monthly: "5,500円",
      items: ["5ページ程度の企業サイト", "お問い合わせフォーム", "ドメイン・サーバー管理", "月1回の更新作業"],
      featured: true,
    },
    {
      name: "プレミアム",
      initial: "330,000円〜",
      monthly: "11,000円",
      items: ["10ページ以上", "ブログ・お知らせ機能", "アクセス解析レポート", "更新作業 無制限（軽微なもの）"],
    },
  ],
};

// 企業サイトとLPは別プロジェクト・別URLで公開する。互いへのリンクに使う。
export const urls = {
  corporate: "https://example.com/", // 【仮】企業サイトのURL
  lp: "https://lp.example.com/", // 【仮】LPのURL
};
