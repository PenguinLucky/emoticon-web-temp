jQuery(function() {

    $(".sonota").click(function() {

        if ( $(".dropdown-menu").css("display") == "none" ) {
            $(".dropdown-menu").fadeIn();
        } else {
            $(".dropdown-menu").fadeOut();
        };

    });

    $(document).click(function(event) {
        if(!$(event.target).closest('.dropdown-menu').length) {
            if(!$(event.target).closest('.sonota').length) {
                if ( $('.dropdown-menu').css('display') == "block" ) { 
                    $(".dropdown-menu").fadeOut();
                }
            }
        }
    });

    var xhr = new XMLHttpRequest();
    xhr.open( "GET" , "https://emoticon-bot.tk/news.json" );
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {

            var json = JSON.parse(xhr.responseText);
            var count = Object.keys(json['news']).length;

            for ( var i = 0 ; i < count ; i++) {
                if ( i != 0 ) {
                    $(".news").prepend(`<li>${json["news"][i]["create"]}：<a href="./news?id=${i}" >${json["news"][i]["title"]}</a></li>`)
                } else if ( i >= 5 ) {
                    break
                };
            };

        }
    };

})