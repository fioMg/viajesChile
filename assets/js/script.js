// Cambio de color NavBar
$(window).scroll(function(){
    $("nav").toggleClass("scrolled",$(this).scrollTop()>50);
});