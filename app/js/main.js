$(function () {
    $('.news-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.news-slider__arrows',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
           
          ]
    });




    $('.why-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        appendArrows: '.why-box__arrows',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                }
              },
           
          ]
    });
})





    window.addEventListener('DOMContentLoaded', () => {

        
        const menu = document.querySelector(".menu");
        const mobile = document.querySelector(".nav-icon");
    
        mobile.addEventListener("click", function () {
          this.classList.toggle("nav-icon--active");
          menu.classList.toggle("nav--active");
            document.body.classList.toggle('overwlow');
        });
    
        
    // Маска для Инпута
    var element = document.getElementById('input-mask');
     
    var maskOptions = {
        mask: '+{7}(000)000-00-00'
    };

    if(element){
        var mask = IMask(element, maskOptions);
    }



    const modalBtn = document.querySelectorAll('.btn-click');
    const modal = document.querySelector('.modal');
    const modalCloseBtn = document.querySelector('.modal__close');
    const test = calcScroll();


        modalBtn.forEach(btn =>{
            btn.addEventListener('click', ()=>{
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${test}px`;
            })
        });

        modalCloseBtn.addEventListener('click', ()=>{
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e)=>{
            if(e.target == modal){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        });

        document.addEventListener('keydown', (e)=>{
            if(e.code == 'Escape' && modal.classList.contains('show')){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
            }
        })

   
    function calcScroll(){
        let div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        
        document.body.append(div);

        let scrollWidth = div.offsetWidth - div.clientWidth;
        
        div.remove();
        
        return scrollWidth;
        }

    
    })





     
    
