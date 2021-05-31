
$(function(){ 
   // 메인메뉴에 마우스가 닿으면
    $('.main').mouseenter(function(){
        $(this).children('.subMenu').stop().slideDown();
    });
    // 메인메뉴에 마우스가 떠나   
    $('.main').mouseleave(function(){
        $(this).children('.subMenu').stop().slideUp();
    });
    
});



var slideNo=0;

function slide(){
    slideNo++
    if(slide>2) slideNo=0
    
    $('.slide').fadeOut(1000);
    
    $('.slide').eq(slideNo).fadeIn(1000);
    
}


function playSlide(){
    setInterval('slide()',3000);
}