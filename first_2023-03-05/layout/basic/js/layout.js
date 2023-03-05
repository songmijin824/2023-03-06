





$( document ).ready(function() {

    var home_nav = $('nav.home_nav'),
        home_nav_list = home_nav.find('li'),
        home_nav_1 = home_nav.find('li:nth-child(1)'),
        home_nav_2 = home_nav.find('li:nth-child(2)'),
        home_nav_3 = home_nav.find('li:nth-child(3)'),
        home_nav_4 = home_nav.find('li:nth-child(4)'),
        home_nav_5 = home_nav.find('li:nth-child(5)');

    var category_list = $('ul.category li');

    category_list.click(function(){
        event.preventDefault();  
        var this_ = $(this),
            this_index = this_.index() +1;
        var pos=$('#main_con._'+ this_index +'').position().top;
        $('html, body').animate({scrollTop:pos},300);

    });

    home_nav_list.click(function(){
        
        var this_ = $(this),
            this_index = this_.index() +1;
        var pos=$('#main_con._'+ this_index +'').position().top;
        $('html, body').animate({scrollTop:pos},300);
        
    });
    
    $('#main_con._1 .video').fadeIn(800);
    $('nav.home_nav').fadeIn(800);
    
    $('.logo').delay(1000).animate( {
        opacity: '1'
    }, 300,function() {
        $('ul.category li:nth-child(1)').animate( {
            opacity: '1'
        }, 300, function() {
            $('ul.category li:nth-child(2)').animate( {
                opacity: '1'
            }, 300, function() {
                $('ul.category li:nth-child(3)').animate( {
                    opacity: '1'
                },300, function() {
                    $('ul.category li:nth-child(4)').animate( {
                        opacity: '1'
                    },300 , function() {
                        $('ul.category li:nth-child(5)').animate( {
                            opacity: '1'
                        },300 , function() {
                            $('.con_1._contents h2').delay(1000).animate( {
                                opacity: '1'
                            },300 , function() {
                                $('.con_1._contents p').animate( {
                                    opacity: '1'
                                },300 );
                            });
                        });
                    });
                });
            });
        });
    });
    
    var mj_timer_1;
    / * 상단 바 * /
    $(window).on('scroll',function() {
        clearTimeout(mj_timer_1);
        mj_timer_1 = setTimeout(function() {
            var h_s = $(window).scrollTop(),
                h_h = $(document).height(),
                h_w = $(window).height();
            var percent = ( h_s / (h_h - h_w)) * 100; 
            $('#scroll_per .bar').css('width',''+percent+'%');
            var percent_1 = h_s / h_w * 100; 
            var percent_2 = ( percent_1 ) / 100; 
            var opacity = 1 - percent_2  ,
                left_top = percent_2 * 100 ; 
            //console.log(opacity);
             if( opacity == 1 ){
                $('#box_1 .title').css('opacity','1');
            } else if( opacity < 1 ){
                $('#box_1 .title').css('opacity',opacity);
                $('#box_1 .title').css('transform','translate(-'+left_top+'px,-'+left_top+'px)');
            } else { 
                $('#box_1 .title').css('opacity','0');
            }
            
            var box_height = h_w,
                box_height_h = box_height / 2;
            var box_length = $('.main_box').length,
                box_1 = box_height_h,
                box_2 = box_height * 2 - box_height_h,
                box_3 = box_height * 3 - box_height_h,
                box_4 = box_height * 4 - box_height_h,
                box_5 = box_height * 5 - box_height_h;
            
            //console.log(h_s);
            //console.log(box_1,box_2,box_3,box_4,box_5);
                
            if ( h_s < box_1 ){
                //console.log('box1',box_1);
                $('body').addClass('box1');
                $('body').removeClass('box2').removeClass('box3').removeClass('box4').removeClass('box5').removeClass('box6').removeClass('box7').removeClass('box8');
                home_nav_1.addClass('select');
                $('nav.home_nav li').not(home_nav_1).removeClass('select');
            } else if ( h_s < box_2 ){
                //console.log('box2',box_2);
                $('body').addClass('box2');
                $('body').removeClass('box3').removeClass('box4').removeClass('box5').removeClass('box6').removeClass('box7').removeClass('box8');
                home_nav_2.addClass('select');
                $('nav.home_nav li').not(home_nav_2).removeClass('select');
            } else if ( h_s < box_3 ){
                //console.log('box3',box_3);
                $('body').addClass('box3');
                $('body').removeClass('box4').removeClass('box5').removeClass('box6').removeClass('box7').removeClass('box8');
                home_nav_3.addClass('select');
                $('nav.home_nav li').not(home_nav_3).removeClass('select');
            } else if ( h_s < box_4 ){
                //console.log('box4',box_4);
                $('body').addClass('box4');
                $('body').removeClass('box5').removeClass('box6').removeClass('box7').removeClass('box8');
                home_nav_4.addClass('select');
                $('nav.home_nav li').not(home_nav_4).removeClass('select');
            } else if ( h_s < box_5 ){
                //console.log('box5',box_5);
                $('body').addClass('box5');
                $('body').removeClass('box6').removeClass('box7').removeClass('box8');
                home_nav_5.addClass('select');
                $('nav.home_nav li').not(home_nav_5).removeClass('select');
            } 
        }, 3);
    });
});