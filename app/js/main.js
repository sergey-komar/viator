$(function () {
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.news-slider__arrows',
    });


    $('.why-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.why-box__arrows',
    });
})


window.addEventListener('DOMContentLoaded', () => {
     // Маска для Инпута
     var element = document.getElementById('input-mask');
     
     var maskOptions = {
         mask: '+{7}(000)000-00-00'
     };
 
     if(element){
         var mask = IMask(element, maskOptions);
     }
    
})