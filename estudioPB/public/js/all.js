$(function() {
	
//center_image//////////////////////////////////////////////////////////////////////////////////////////
    
	function center_image(){
		$('.center_img').each(function(){
			obj = $(this);
			var bg_ratio = obj.attr('data-width-img')/obj.attr('data-height-img');
			var wrapper_ratio = obj.parent().width()/obj.parent().height();
			if(bg_ratio<wrapper_ratio){
				var center = (obj.parent().width()/bg_ratio - obj.parent().height())*(-0.5);
				obj.css({'left':'0px', 'top':center, 'width':'100%', 'height':'auto'});
			}
			else{
				var center_hor = (bg_ratio*obj.parent().height() - obj.parent().width())*(-0.5);
				obj.css({'left':center_hor, 'top':'0px', 'height':'100%', 'width':'auto'});
			}
		});
	}
    
///////////////scroll-anime///
var ios = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || $(window).width()<980;
	var  stop_out;
    var scrollto = 0;
	if(ios){
		$('.scale-text').addClass('act');
        //$('.navigation').removeClass('scroll-menu');
	}
    $(window).scroll(function() {
        if ($(this).scrollTop() > 93) {$('.navigation').addClass('scroll-menu');}
        else {$('.navigation').removeClass('scroll-menu');}
		if($('.scale-text').length>=1){
		  if(!ios){
			  $('.scale-text').each(function(){
			   var animationVal = $('.scale-text').index(this);
			   var animationTop = $(this).offset().top - $('header').height() - ($(window).height()*0.8);
			   if(animationTop <= $(window).scrollTop() && animationTop + $(this).height() > $(window).scrollTop()){
				$('.scale-text').eq(animationVal).addClass('act');
			   }
			  });
			 } 

			
            $('.scrollto').each(function(){
                var slideVal = $('.scrollto').index(this);
                var thisTop = $(this).offset().top - $('.navigation').height() - 1;
                if(thisTop <= $(window).scrollTop() && thisTop + $(this).height() > $(window).scrollTop()){
                    setLocation($('.top-menu nav a').eq(slideVal).attr('data-href'));
                    $('.top-menu nav a').removeClass('active');
                    $('.top-menu nav a').eq(slideVal).addClass('active');
                }
            });
        }
    });
///open sans font/////////////////////////
    
     WebFontConfig = {
        google: { families: [ 'Open+Sans:300italic,400italic,600italic,700italic,400,700,800,600,300:latin-ext,latin' ] }
      };
      (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
          '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();
    

///HTML5-links///////////////////////////////////
    
    function setLocation(curLoc){
       location.hash = '#' + curLoc;
     }
   var top_menu = 0; 
   $('.top-menu nav a').click(function(){
       top_menu = $('.top-menu nav a').index(this);
       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
       } else {
           $('.top-menu nav a').removeClass('active');
           $(this).addClass('active');
           $('body,html').stop(true,true).animate({'scrollTop':$('.scrollto').eq(top_menu).offset().top - $('.navigation').height() },500); 
           $('.scrollto').slice(0,top_menu+1).find('.scale-text').addClass('act');
           setLocation($(this).attr('data-href'));
       }
       return false;
   });
    
    $('.menu-mobile-icon, .top-menu nav a').click( function(){
         if($('.top-menu nav').hasClass('active')){
            $('.top-menu nav').removeClass('active');
         }else{
            $('.top-menu nav').addClass('active');      
         }
         return false;
    });
    
//baner-slider//////////////////////////////////////////////////////////////////////////////////////////
    
    if(ios){
        $('.top-baner .swiper-slide').addClass('active');  
    }
	var swiper_container=$('.top-baner').swiper({
		loop:true,
		grabCursor: true,
		slidesPerView: 1,
		autoplay:5000,
        autoplayDisableOnInteraction: true,
        pagination: '.swich_1',
        paginationClickable: true,
        createPagination: true,
		onSlideChangeEnd : function() {
            if(!ios){
                $('.top-baner .swiper-slide.active').removeClass('active');
                qIndex = swiper_container.activeLoopIndex;
                qVal = $('.top-baner .swiper-slide-active').attr('data-val');
                $('.top-baner .swiper-slide[data-val="'+qVal+'"]').addClass('active');   
            }
			
		}
	});

	$('.swiper-container .slider-prev').click(function(){
		swiper_container.swipePrev();
		return false;
	});
	
	$('.swiper-container .slider-next').click(function(){
		swiper_container.swipeNext();
		return false;
	});
  
    
///////////drop-down//////////

    $('.drop-list, .drop').click(function(){
			if($('.drop-list').hasClass('act')){
				$('.drop-list').removeClass('act');
                $('.drop input').removeClass('bg-in');
				$('.drop').find('span').slideUp(300);
			}else{
				$('.drop-list').addClass('act');
                $('.drop input').addClass('bg-in');
                $('.drop span a').removeClass('bg-out');
                $('.drop-list').removeClass('act2');
				$('.drop').find('span').slideDown(300);
			}
			return false;
		});
		
		$('.drop span a').click(function(){
			$(this).parent().parent().find('input').attr('value',$(this).text());
			$('.drop-list').addClass('act2');
            $(this).addClass('bg-out');
            $('.drop input').removeClass('bg-in');
			$('.drop').find('span').slideUp(300);
		});
       $('body').click(function(){
       $('.drop').find('span').slideUp(300);
       $('.drop input').removeClass('bg-in');
       $('.drop-list').addClass('act2');
       });  
		
///////////drop-down-contact//////////
    
    	$('.drop-con, .con-list').click(function(){
			if($('.con-list').hasClass('act')){
				$('.con-list').removeClass('act');
                $('.drop-con input').removeClass('bg-in');
				$('.drop-con').find('span').slideUp(300);
			}else{
				$('.con-list').addClass('act');
                $('.drop-con input').addClass('bg-in');
                $('.drop-con span a').removeClass('bg-out2');
                $('.con-list').removeClass('act3');
				$('.drop-con').find('span').slideDown(300);
			}
			return false;
		});
		
		$('.drop-con span a').click(function(){
			$(this).parent().parent().find('input').attr('value',$(this).text());
			$('.con-list').addClass('act3');
            $(this).addClass('bg-out2');
            $('.drop-con input').removeClass('bg-in');
			$('.drop-con').find('span').slideUp(300);
        
		});
    
    
       $('body').click(function(){
            $('.drop-con').find('span').slideUp(300);
            $('.drop-con input').removeClass('bg-in');
           	$('.con-list').addClass('act3');
       });	
				
//////////filter/////////////////////
    

    
    $('.container-mix').mixItUp({
	animation: {
		enable: false,
	}
});
    
//MOBILE-MENU////////////////////////////////////////////////////////////////////////////////////////////
    
     

///////////team-slider///////////////////////////////////////////////////////////////////////////
    
    var peoplePerSlide;
    if($(window).width()<=450) peoplePerSlide = 1;
    else if($(window).width()<=940) peoplePerSlide = 2;
    else peoplePerSlide = 3;
    var swiper_container1=$('.team-slider').swiper({
		loop:false,
		grabCursor: false,
		slidesPerView: peoplePerSlide,
		autoplay:0,
        autoplayDisableOnInteraction: true,
        pagination: '.swich_2',
        paginationClickable: true,
        createPagination: true,
        onSlideClick: function() {
	        fixBody();
	        $('.popup-team-container').addClass('act');
            $('.popup-team-container .swiper-wrapper').css({'transform':'translate3d(0px, 0px, 0px)','-webkit-transform':'translate3d(0px, 0px, 0px)'});
	        swiper_container8.reInit();
    	},
        onInit: function(swiper){

            if($(window).width()<=450){
                swiper_container1.params.slidesPerView = 1;
                $('.swich_2').find('.swiper-pagination-switch').show();
            }else if($(window).width()<=940){
                swiper_container1.params.slidesPerView = 2;
                $('.swich_2').find('.swiper-pagination-switch').slice((-1)).hide();
            }else{
                swiper_container1.params.slidesPerView = 3;
                $('.swich_2').find('.swiper-pagination-switch').slice((-2)).hide();
            }
            
        }
	});

  
////////////career-slider//////////////////////////////////////////////////////////
    
    var swiper_container2=$('.career-slider').swiper({
		loop:true,
		grabCursor: true,
		slidesPerView: 1,
		autoplay:0,
        autoplayDisableOnInteraction: true,
        pagination: '.swich_3',
        paginationClickable: true,
        createPagination: true,
        simulateTouch: true
	});
    $('.career-slider .slider-prev').click(function(){
		swiper_container2.swipePrev();
		return false;
	});
	
	$('.career-slider .slider-next').click(function(){
		swiper_container2.swipeNext();
		return false;
	});
    	
////////////client-slider/////////////////////////////////////////////////////////////////////////////////

    var swiper_container3=$('.client-slider').swiper({
		loop:false,
		grabCursor: false,
        simulateTouch: true,
		slidesPerView: 1,
		autoplay:0,
        autoplayDisableOnInteraction: true
	});
/*
    function UpdateClientsSlider(){
		swiper_container3.params.slidesPerView = parseInt($(window).width()/220);
	}

	UpdateClientsSlider();
	$(window).resize(function(){UpdateClientsSlider();});
*/    
    $('.logo-company .slider-prev').click(function(){
		swiper_container3.swipePrev();
		return false;
	});
	
	$('.logo-company .slider-next').click(function(){
		swiper_container3.swipeNext();
		return false;
	});
    
////////////people-slider//////////////////////////////////////////////////////////////////
    
    var swiper_container4=$('.people-slider').swiper({
		loop:true,
		grabCursor: false,
		slidesPerView: 1,
		autoplay:0,
        autoplayDisableOnInteraction: true,
        pagination: '.swich_4',
        paginationClickable: true,
        createPagination: true
	});
    
////////////popup-works////////////////////////////////////////////
    
    var swiper_container6=$('.popup-slider').swiper({
		slidesPerView: 1,
		autoplay:0,
        autoplayDisableOnInteraction: true,
        simulateTouch: false
	});
     $('.popup-slider .slider-prev').click(function(){
		swiper_container6.swipePrev();
		return false;
	});
	
	$('.popup-slider .slider-next').click(function(){
		swiper_container6.swipeNext();
		return false;
	});
    
      
        $('.img-work').click(function(){
        $('.popup-work-container').addClass('act');
            fixBody();
            swiper_container6.reInit();
            $('.popup-slider .swiper-wrapper').css({'transform':'translate3d(0px, 0px, 0px)','-webkit-transform':'translate3d(0px, 0px, 0px)'});
            rax();
            return false;
        });
        
        $('.close-up, .popup-work-container').click(function(){
        $('.popup-work-container').removeClass('act');
            unfixBody();
            return false;
        });
    
        $('.img-pp ').click(function(){
        $('.popup-work-container').addClass('act');
            return false;
        });
    
 //popup-team//////////////////////////
    
    var swiper_container8=$('.popup-slider-team').swiper({
		slidesPerView: 1,
		autoplay:0,
        autoplayDisableOnInteraction: true,
        simulateTouch: false
	});
     $('.popup-slider-team .slider-prev').click(function(){
		swiper_container8.swipePrev();
		return false;
	});
	
	$('.popup-slider-team .slider-next').click(function(){
		swiper_container8.swipeNext();
		return false;
	});

    $('.close-up, .popup-team-container').click(function(){
        unfixBody();
        $('.popup-team-container').removeClass('act'); 
        return false;
    });
     $('.wrap-team').click(function(){
        $('.popup-team-container').addClass('act'); 
        return false;
    });
    
//popup-career//////////////////////////
    
        $('.career-button').click(function(){   
        var button_pop_index = $('.career-button').index(this);
        $('.career-popup-container').addClass('act');
$('.career-popup-container .top-career-sity').text($('.career-button').eq(button_pop_index).parent().find('.sity-carrer').text());
$('.career-popup-container .top-career-jobs').text($('.career-button').eq(button_pop_index).parent().find('.develop').text());
$('.career-popup-container .top-career-program').text($('.career-button').eq(button_pop_index).parent().find('.experience').text());
$('.career-popup-container img').attr('src',$('.career-button').eq(button_pop_index).parent().parent().find('img').attr('src'));
$('.career-popup-container .popup-text p').text($('.career-button').eq(button_pop_index).parent().find('.text-insert').attr('data-text'));            
            fixBody(); 
            return false;
        
        });
        $('.close-up, .career-popup-container').click(function(){
        $('.career-popup-container').removeClass('act');
            unfixBody();
            return false;
        }); 
    
        $('.career-popup ').click(function(){
        $('.career-popup-container').addClass('act');
            return false;
        });
    
/////////////popup-thankyou/////////////////////////////////////////
    
        $('.th').click(function(){
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            $.ajax({
                url:  'api/mail',
                type: 'POST',
                data: {"name": name, "email": email, "subject": subject, "message": message},

                success:  function (asunto)
                {
                    fixBody();
                    $('.popup-th').addClass('act');
                }
            });
            
            return false;
        });
        
        $('.close-up, .popup-th').click(function(){
            unfixBody();
        
        $('.popup-th').removeClass('act'); 
            return false;
        });
    

////////////////RAX////////////////////////////////////////////////////////////////////////////////////////
    
	function rax(){
		$('.full-h, .bg').height($(window).height());
		center_image();	
        
        // center team-popup slider////
        
        var teamaligntop = $('.align-top').height();
        $('.align-top').css({'margin-top' : -(teamaligntop * 0.5)});
        var workaligntop = $('.align-center').height();
        $('.align-center').css({'margin-top' : -(workaligntop * 0.5)});
	};

	rax();	
    
    
////////////////MAP////////////////////////////////////////////////////////////////////////////////////////
    
   	function initialize(obj) {
	
		var lat = $('#'+obj).attr("data-lat");
		var lng = $('#'+obj).attr("data-lng");
        var lat2 = $('#'+obj).attr("data-lat2");
		var lng2 = $('#'+obj).attr("data-lng2");
        var lat3 = $('#'+obj).attr("data-lat3");
		var lng3 = $('#'+obj).attr("data-lng3");
		var contentString = $('#'+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
        var myLatlng2 = new google.maps.LatLng(lat2,lng2);
        var myLatlng3 = new google.maps.LatLng(lat3,lng3);
		var map, marker, marker2, marker3, infowindow;
		var image = 'img/marker.png';
		var zoomLevel = parseInt($('#'+obj).attr("data-zoom"));

		var styles = [{"featureType":"water","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":-78},{"lightness":67},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"simplified"}]},{"featureType":"poi","elementType":"all","stylers":[{"hue":"#ffffff"},{"saturation":-100},{"lightness":100},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"hue":"#e9ebed"},{"saturation":-90},{"lightness":-8},{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"hue":"#e9ebed"},{"saturation":10},{"lightness":69},{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"hue":"#2c2e33"},{"saturation":7},{"lightness":19},{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":31},{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"hue":"#bbc0c4"},{"saturation":-93},{"lightness":-2},{"visibility":"simplified"}]}]
		
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
	
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: false,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);
	
		map.mapTypes.set('map_style', styledMap);
		map.setMapTypeId('map_style');
	
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});
	
        marker2 = new google.maps.Marker({
			position: myLatlng2,
			map: map,
			icon: image
		});
	
		marker3 = new google.maps.Marker({
			position: myLatlng3,
			map: map,
			icon: image
		});
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});
	
	}
    
/////////////loader///////////////////////////////////////////////////////////////////////////////////////////
	
	$(window).load(function(){
        $('nav a').each(function(){
           nav_a_index = $('nav a').index(this); 
           hash_our = window.location.hash; 
           hash_our = hash_our.substr(1);
            //alert($(this).attr('data-href'));
            obj_linck =$(this);
           if(hash_our==$(this).attr('data-href')){
            //nav_a_index = $(this).index('nav a');
               //alert(nav_a_index);
               $('nav a').eq(nav_a_index).addClass('active');
               $('body,html').animate({'scrollTop':$('.scrollto').eq(nav_a_index).offset().top - $('.navigation').height() },1); 
               $('.scrollto').slice(0,nav_a_index+1).find('.scale-text').addClass('act');
           }
        
        });			
		$('.content-block').addClass('act');
		$('footer').addClass('act');
		$('.loader').hide();
        if($('#map-canvas-contact').length==1){
		initialize('map-canvas-contact');							  
	} 
	});
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////////
	$(window).resize(function(){
		
		rax();	
		center_image();
     
	});
////////////////////////////////////////////////////////////////////////////////////////////////////////

//fixed body///////////////////////////////////////////////////////

  var scrTop;
  var content_height = $('#content').outerHeight(true);
  function fixBody(){
   scrTop = $(window).scrollTop()*(-1);
   if($(window).height() < content_height) {$('body').css({'overflow-y':'scroll'});}
   $('body').css({'position':'fixed', 'top':scrTop, 'left':'0px'});
  }; 
 function unfixBody(){
   $('body').css({'position':'relative', 'top':'0px', 'left':'auto', 'overfow-y':'auto'});
   $('body, html').animate({'scrollTop':scrTop*(-1)}, 0);
  };
    
 
 //=======================================================================//    
    
    $('.wheel-wrap').click(function(){
        $('body, html').animate({'scrollTop':$('.scrollto').eq(1).offset().top});
        return false;
    });
    
});

