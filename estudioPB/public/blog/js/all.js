(function(cash) { "use strict";

///open sans font/////////////////////////
    
     var WebFontConfig = {
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
                 
                 
     $(function() {
       $( "#datepicker" ).datepicker();
     });
      
     $('.search-bar input').focus(function(){
          $(this).val('').css({"border-color":"#c8c8c8"});
     });             
     $('.search-bar input').blur(function(){
          $(this).val('keyword').css({"border-color":"#c1c1c1"});
     });
     $('.leave-coomment input').focus(function(){
          $(this).val('');
     });             
         
       
               

                 /////////////loader///////////////////////////////////////////////////////////////////////////////////////////
	
	$(window).load(function(){			
		$('.loader').hide(); 
	});
    





})(jQuery);
