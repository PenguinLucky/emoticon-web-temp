jQuery(function() {

    setTimeout(function(){
        if ( $(".status").html() == '&nbsp;<img src="https://emoticon-bot.tk/assets/img/road.gif" alt="ステータス" align="top">&nbsp;読み込み中' ) {
            $('.status').css('color','#ff0000','backgroundColor','#FFF').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/error.png" alt="ステータス" align="top">&nbsp;エラー');
        }
    },5000);

    try {
        var xhr = new XMLHttpRequest();
        xhr.open( "GET" , "https://emoticon-bot-status.herokuapp.com/status.txt" );
        xhr.setRequestHeader('Content-Type', 'Access-Control-Allow-Origin: *');
        xhr.send();
    } catch (e) {
        $('.status').css('color','#ff0000','backgroundColor','#FFF').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/error.png" alt="ステータス" align="top">&nbsp;エラー');
    }

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            $('.status').css('color','#FFF');
        if ( xhr.responseText == "online" ) {
            $('.status').css('backgroundColor','#00db37').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/online.png" alt="ステータス" align="top">&nbsp;オンライン');
        } else if ( xhr.responseText == "idle" ) {
            $('.status').css('backgroundColor','#ff8000').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/idle.png" alt="ステータス" align="top">&nbsp;起動処理中');
        } else if ( xhr.responseText == "dnd" ) {
            $('.status').css('backgroundColor','#ff0000').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/dnd.png" alt="ステータス" align="top">&nbsp;再起動中');
        } else {
            $('.status').css('backgroundColor','#9e9e9e').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/offline.png" alt="ステータス" align="top">&nbsp;オフライン');
        }
        } else if (xhr.status !== 200 && xhr.status !== 0 ) {
            $('.status').css('color','#ff0000','backgroundColor','#FFF').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/error.png" alt="ステータス" align="top">&nbsp;エラー');
        }
    }

    setInterval(function(){
        try {
            xhr.open( "GET" , "https://emoticon-bot-status.herokuapp.com/status.txt" );
            xhr.setRequestHeader('Content-Type', 'Access-Control-Allow-Origin: *');
            xhr.send();
        } catch (e) {
            $('.status').css('color','#ff0000','backgroundColor','#FFF').html('&nbsp;<img src="https://emoticon-bot.tk/assets/img/error.png" alt="ステータス" align="top">&nbsp;エラー');
        }
    },10000);

});