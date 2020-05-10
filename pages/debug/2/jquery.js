jQuery(function() {

    var pagetop = $('#page_top');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500); //0.5秒かけてトップへ移動
        return false;
    });

    var parameters = $(location).attr('search');

    if (parameters != "?popup=0") {

        var getPageTitle = document.title;

        $('.popup-logo').delay(500).animate( { opacity: 1,}, 1000 );
        $('.popup-road').delay(500).fadeIn();
        $('.popup-pagename').html(getPageTitle).delay(500).animate( { opacity: 1,}, 1000 );

        const notice = $("#notice").html();
        $(".popuo-notice").html(notice)

        var random = Math.floor( Math.random() * ( 5000 - 2000 ) );
        console.log(random)

        setTimeout(function(){
            $(".popup-road").html('<img src="https://emoticon-bot.f5.si/img/maru.png" width="18px" height="18px"> 読み込み完了')
        },random);

        var popup_notice_fadeIn = random + 1500

        $('.popup-logo').delay(random).fadeOut();
        $('.popup-pagename').delay(random).fadeOut();
        $('.popuo-notice').delay(popup_notice_fadeIn).fadeIn("slow");

        var popup_fadeOut = random + 5000
        console.log(popup_fadeOut)

        $('.popup').delay(popup_fadeOut).fadeOut("slow");

    } else {
        $('.popup').css('display','none');
    }

});