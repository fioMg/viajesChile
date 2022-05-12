// Smootscroll JQuery v3.6.0
$(document).ready(function(){
    $("a").click(function(){
        var gato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(gato).offset().top - 58
            },
            800 
            )
        });
    });   

// Cambio de color NavBar  JQuery v3.6.0
$(window).scroll(function(){
    $("nav").toggleClass("scrolled",$(this).scrollTop()>50);
});

// Popovers Bootstrap JS v5.1
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Tooltips Bootstrap JS v5.1
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})