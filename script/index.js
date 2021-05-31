
$(function(){ 
   // 메인메뉴에 마우스가 닿으면
    $('.main').mouseenter(function(){
        $(this).children('.subMenu').stop().slideDown();
    });
    // 메인메뉴에 마우스가 떠나   
    $('.main').mouseleave(function(){
        $(this).children('.subMenu').stop().slideUp();
    });
    

    // secC
    $('.button').click(function(){
        $('.button').removeClass('active');
        $(this).addClass('active');
    });


    // 공지사항 버튼 클릭할 때
    $('#btn1').click(function(){
        $('#gallery').hide();
        $('#notice').show();
    });

    // 갤러리 버튼 클릭할 때
    $('#btn2').click(function(){
        $('#gallery').show();
        $('#notice').hide();
    });

    
    
});  //$(function()


var slideNo=0;

function slide(){
    slideNo++;
    if(slideNo>2) slideNo=0;
    
    $('.slide').fadeOut(1000);
    
    $('.slide').eq(slideNo).fadeIn(1000);
    
}

function playSlide(){
    setInterval('slide()',3000);
}