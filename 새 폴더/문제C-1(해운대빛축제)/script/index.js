
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
    
    
    $('.btn2').click(function(){
        $('#notice').hide();
        $('#gallery').css('display','flex');
        
        $('.btn1').removeClass('active');
        $('.btn2').addClass('active');
    })
       
    $('.btn1').click(function(){
        $('#notice').show();
        $('#gallery').hide();
        
        $('.btn1').addClass('active');
        $('.btn2').removeClass('active');
    })
    
    
    
});  // $(function)












