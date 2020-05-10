jQuery(function() {

    $().ready(function(){

        try{
            var urlHash = location.hash;
            urlHash = urlHash.replace( "#", "" );
            var element = document.getElementById( urlHash ) ;
            element.open;
            element.open = true;
            $("html,body").animate({scrollTop:$("#"+urlHash).offset().top}, 1500);
        }
        catch (e) {console.log(location.href)}

    })

    $('a[href^="#"]').click(function(){
        var href= $(this).attr("href");
        href = href.replace( "#", "" );
        var element = document.getElementById( href ) ;
        element.open;
        element.open = true;
    });

})