
var slideNo=0;

function slide(){
    slideNo++;
    if(slideNo>2) slideNo=0;
    
    $('.slide').fadeOut(1000);
    $('.slide').eq(slideNo).fadeIn(1000);
}





$(function(){
    
    $('.slide').eq(0).show();
    
    $('.main').mouseenter(function(){
        $(this).children('.subMenu').stop().slideDown();
    })
    
    $('.main').mouseleave(function(){
        $(this).children('.subMenu').stop().slideUp();
    })
    
});  // $(function)












