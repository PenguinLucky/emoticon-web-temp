<!DOCTYPE html>
<html lang="ja">
    <head>

        <title>顔文字Bot　グローバルBanリスト</title>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width">
        <link rel="stylesheet" href="../css/globalban-list.css">

    </head>
    <body>

        <div class="search">
            <p><strong>Ban情報 検索</strong></p>
            <t>Ban情報を見たいユーザーIDを入力してください</t>
            <form action="search.php" method="get">ユーザーID：<input class="search-text" type="text" name="id" />　<input class="search-submit" type="submit" value="検索" ></form>
        </div>

        <div class="list">
            <p><strong>Banリスト</strong></p>
            <iframe src="list.php" ></iframe>
        </div>

    </body>
</html>