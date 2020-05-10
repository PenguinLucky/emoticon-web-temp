$(function(){
  $('a[href^="#"]').click(function(){
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    $("html, body").animate({ scrollTop : target.offset().top }, 800 );
  });
});