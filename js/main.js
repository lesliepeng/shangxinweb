$( document ).ready(function() {
    $('nav a').on('click', function() {
    
        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
    
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
        
        $('nav ul').toggleClass('menu-open');
       
    
        return false;
    
    })
    
    
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 80) {
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll + 50) {
                    $('nav a.current').removeClass('current');
                    $('nav a').eq(i).addClass('current');
                }
            });
    
        } else {
    
           
            $('nav a.current').removeClass('current');
            $('nav a:first').addClass('current');
        }
    
    }).scroll();
    
    $('.handle').on('click',function(){
    	$('nav ul').toggleClass('menu-open');
    });
});

