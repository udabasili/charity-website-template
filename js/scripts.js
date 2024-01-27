include("js/jquery.color.js");
include("js/jquery.backgroundpos.js");
include("js/jquery.easing.js");
include("js/jquery.mousewheel.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/forms.js");
include("js/MathUtils.js");
include("js/jquery.cycle.all.min.js");
include("js/gallery.js");

function include(url) {
    document.write('<script src="' + url + '"></script>');
}
var MSIE = true, content, mh, h;

function addAllListeners() {
    $('#prev').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'right center'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'left center'},500,'easeOutExpo');
        }
    );
    $('#next').hover(
        function(){
            $(this).stop().animate({'backgroundPosition':'left center'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'backgroundPosition':'right center'},500,'easeOutExpo');
        }
    );
    $('.prevBtn').hover(
        function(){
            $('span',this).stop().animate({'backgroundPosition':'right center'},300,'easeOutExpo');
        },
        function(){
            $('span',this).stop().animate({'backgroundPosition':'left center'},500,'easeOutExpo');
        }
    );
    $('.nextBtn').hover(
        function(){
            $('span',this).stop().animate({'backgroundPosition':'left center'},300,'easeOutExpo');
        },
        function(){
            $('span',this).stop().animate({'backgroundPosition':'right center'},500,'easeOutExpo');
        }
    );
	$('.list1>li>figure>a, .list5>li>figure>a')
    .find('strong').css('top','200px').end()
    .hover(
        function(){
            if (!MSIE){
                $(this).find('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1}).end() 
                .find('strong').css({'opacity':0}).stop().animate({'opacity':1,'top':'0'},350,'easeInOutExpo');
            } else { 
                $(this).find('.sitem_over').stop().show().end()
                .find('strong').stop().show().css({'top':'0'});
            }
        },
        function(){
            if (!MSIE){
                $(this).find('.sitem_over').stop().animate({'opacity':0},1000,'easeOutQuad',function(){$(this).children('.sitem_over').css({display:'none'})}).end()  
                .find('strong').stop().animate({'opacity':0,'top':'200px'},1000,'easeOutQuad');  
            } else {
                $(this).find('.sitem_over').stop().hide().end()
                .find('strong').stop().hide();
            }            
        }
    );
    var val1 = $('.readMore').css('color');
    $('.readMore').hover(
        function(){
            $(this).stop().animate({'color':'#ff7069'},300,'easeOutExpo');
        },
        function(){
            $(this).stop().animate({'color':val1},500,'easeOutExpo');
        }
    );    
}

$(document).ready(ON_READY);
$(window).load(ON_LOAD);

function ON_READY() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
}

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();
    
    $("#galleryHolder").gallerySplash(false);
    
	$('.list1>li>figure>a, .list5>li>figure>a').attr('rel','appendix')
    .prepend('<span class="sitem_over"><strong></strong></span>')
    $('.list1>li>figure>a, .list5>li>figure>a').fancybox({
        'transitionIn': 'elastic',
    	'speedIn': 500,
    	'speedOut': 300,
        'centerOnScroll': true,
        'overlayColor': '#000'
    });
    
    if ($("#slideshow").length) {
        $('#slideshow').cycle({
            fx: 'curtainY',
            speed: 600,
    		timeout: 0,
            next: '#next',
    		prev: '#prev',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };    
    if ($("#slider1>div").length) {
        $('#slider1>div').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next1',
    		prev: '#prev1',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($("#slider2>div").length) {
        $('#slider2>div').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next2',
    		prev: '#prev2',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($("#slider3>div").length) {
        $('#slider3>div').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next3',
    		prev: '#prev3',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    if ($("#slider4>div").length) {
        $('#slider4>div').cycle({
            fx: 'scrollHorz',
            speed: 600,
    		timeout: 0,
            next: '#next4',
    		prev: '#prev4',                
    		easing: 'easeInOutExpo',
    		cleartypeNoBg: true ,
            rev:0,
            startingSlide: 0,
            wrap: true
  		})
    };
    
    //content switch
    content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
            _.li.css({'visibility':'hidden'});	
        },
        actFu:function(_){            
            if(_.curr){
                h = parseInt( _.curr.outerHeight(true));
                //content.children('ul').css({'height':h});
                $(window).trigger('resize');
                
                _.curr
                    .css({'left':'-2000px','visibility':'visible'}).stop(true).delay(300).show().animate({'left':'0px'},{duration:1100,easing:'easeOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'2000px'},{duration:400,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'visibility':'hidden'});
                            }
                        }
		              });
            }            
  		}
    });
    var defColor = $('#menu>li>a').eq(0).css('color'); 
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_splash',
        hoverIn:function(li){
            if (!MSIE) {
                $('>strong',li).stop().animate({'opacity':'1'},300,'easeOutExpo');
            } else {
                $('>strong',li).stop().css({'opacity':'1'});
            }
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                if (!MSIE) {
                    $('>strong',li).stop().animate({'opacity':'0'},700,'easeOutCubic');
                } else {
                    $('>strong',li).stop().css({'opacity':'0'});
                }
            }
        }
    })
    .navs(function(n,_){	
   	    $('#content').tabs(n);
        if (_.prevHash == '#!/page_mail') { 
            $('#form1 a').each(function (ind, el){
                if ($(this).attr('data-type') == 'reset') { $(this).trigger('click') }   
            })
        }
   	});
    
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
    
    $(window).trigger('resize');
    mh = parseInt($('body').css('minHeight'));
}
content = $('#content');
$(window).resize(function (){
    if (content) {
        var newMH = mh*h/630;
        if (mh > newMH) newMH = mh;
        $('body').css({'minHeight':newMH})
        var currH = (h+312);
        content
            .stop().animate({'top':(windowH()-currH)*.5,'height':currH},500,'easeOutCubic')
            .css('overflow','visible')
    }
});