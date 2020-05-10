jQuery(function() {

    var xhr = new XMLHttpRequest();
    xhr.open( "GET" , "https://emoticon-bot.tk/header/index.html" );
    xhr.send();
  
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            $('header').html(xhr.responseText);
            /*$('body,html').animate({ scrollTop: 0 }, 0);*/
        }
    };

});