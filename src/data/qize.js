const quizData = [
    {
      question: "Javascriptに関する問題です。「console.log(typeof null);」の出力は何ですか？",
      options: ["null", "object", "undefined", "boolean"],
      answerIndex: 1,
    },
    {
      question: "次のうち、HTML5で正しい文書の開始タグはどれですか？",
      options: [
        "<html version=`5.0`>",
        "<!DOCTYPE html>",
        "<DOCTYPE html>",
        "<!HTML>",
      ],
      answerIndex: 1,
    },
    {
      question: "テーブル「users」から、年齢が20歳以上のユーザーを取得するSQL文はどれ？",
      options: [
        "SELECT * FROM users WHERE age >= 20;",
        "SELECT users FROM * WHERE age => 20;",
        "GET ALL users WHERE age >= 20;",
        "SELECT ALL FROM users WHEN age > 20;",
      ],
      answerIndex: 0,
    },
    {
      question: "PHPの特徴として正しいものはどれですか？",
      options: [
        "PHPはブラウザ上で直接実行されるクライアントサイドスクリプトである",
        "PHPはJavaと同じくコンパイルが必要な言語である",
        "PHPはサーバーサイドで動作し、動的なWebページを生成できる",
        "PHPはデータベースを扱えない",
      ],
      answerIndex: 2,
    },
    {
      question: "Reactの特徴として誤っているものはどれですか？",
      options: [
        "Reactは仮想DOM（Virtual DOM）を使用してUIを効率的に更新する",
        "Reactはコンポーネントベースでアプリケーションを構築する",
        "ReactはHTMLファイルを直接編集してUIを更新する",
        "Reactでは状態（state）を使って動的にUIを制御できる",
      ],
      answerIndex: 2,
    },
  ];

  export default quizData;
