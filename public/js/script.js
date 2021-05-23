var i=0, j=0;
$('.menu-btn').on('click', function(e) {
    e.preventDefault();i++;
    $(this).toggleClass('menu-btn_active');
    $('.menu').toggleClass('menu_active');
    $('.content').toggleClass('content_active');
    if(j%2==1){$('.content').toggleClass('content_active3');}
})
$('.menu-btn2').on('click', function(e) {
    e.preventDefault();j++;
    $(this).toggleClass('menu-btn_active2');
    $('.menu2').toggleClass('menu_active2');
    $('.content').toggleClass('content_active2');
    if(i%2==1){$('.content').toggleClass('content_active3');}
})
$('.button').on('click', function (){
    const height = $(window).height();
    $(window).scrollTop(height);
    }
)