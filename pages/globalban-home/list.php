<!DOCTYPE html>
<html lang="ja">
    <head>

        <title>顔文字Bot　グローバルBanリスト</title>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width">
        <link rel="stylesheet" href="../css/globalban-list.css">

    </head>
    <body>

        <nav class="my-parts">
            <ul>
                <?php 

                    foreach(glob('../globalban/*') as $file){
                        if(is_file($file)){
                            $file_0 = htmlspecialchars($file);
                            $file_1 = str_replace('../globalban/', '', $file_0);
                            echo "<li><a href='{$file_0}' target='_parent' >{$file_1}</a></li>";
                        }
                    }

                ?>
            </ul>
        </nav>

    </body>
</html>