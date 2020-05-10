jQuery(function() {

    function window_load() {
        $(".news-description").css({"height":"auto"});
        if ( $(".news-description").height() <= ( window.innerHeight / 3 ) ) {
            $(".news-description").css({ "padding-bottom":`${ window.innerHeight / 3 }px` });
        };
        $(".news-description img").width($(".news-description").width());
    };
    window.onresize = window_load;

    var xhr = new XMLHttpRequest();
    xhr.open( "GET" , "https://emoticon-bot.tk/news.json" );
    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {

            var json = JSON.parse(xhr.responseText);
            var url = location.search;
            url = url.replace( "?id=" , "" );

            if ( url == "new" ) {
                url = Object.keys(json['news']).length - 1 ;
                window.location.search = `id=${url}`
            } else {
                url = Number(url);
            };

            try {
                if ( json["news"][url]["id"] == undefined ) {
                    url = 0;
                };
            } catch (error) {
                url = 0;
            };

            var title = json["news"][url]["title"] ;
            var create_time = json["news"][url]["create"] ;
            var description = json["news"][url]["description"] ;

            $(".news-title").html( title );
            $(".create").html( create_time );
            $(".description").html( description );

            if ( ( url - 1 ) > 0 ) {
                $(".old-news").attr("href",`?id=${url - 1}`);
                $(".old-news").html(`◀ 前の記事　(${json["news"][ url - 1 ]["title"]})`);
            } else {
                $(".old-news").attr("href","https://emoticon-bot.tk/");
                $(".old-news").html("🏠 ホーム");
            };

            try {
                if ( json["news"][ url + 1 ]["id"] != undefined ) {
                    $(".new-news").attr("href",`?id=${ url + 1 }`);
                    $(".new-news").html(`▶ 次の記事　(${json["news"][ url + 1 ]["title"]})`);
                };
            } catch (error) {
                $(".new-news").attr("href","https://emoticon-bot.tk/");
                $(".new-news").html("🏠 ホーム");
            };

            var headData = document.head.children;
            for (var i = 0; i < headData.length; i++) {
                var propertyVal = headData[i].getAttribute('property');
                if(propertyVal !== null) {
                    if(propertyVal.indexOf('og:url') != -1) {
                        headData[i].setAttribute('content', `https://emoticon-bot.tk/news/?id=${url}`);
                    }
                    if(propertyVal.indexOf('og:title') != -1) {
                        headData[i].setAttribute('content', title );
                    }
                    if(propertyVal.indexOf('og:description') != -1) {
                        headData[i].setAttribute('content', description);
                    }
                }
            }

            $(".news-description img").width($(".news-description").width());

            window_load();

        }
    };

    $("img").load( function() {
        window_load();
    });

});