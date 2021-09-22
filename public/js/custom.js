(function($, window){
    "use strict"; 
    var arrowWidth = 16;
    var scount=0, ecount=0;
    $(window).load(function(){
        var total_data = $(".page_datas").text();
        total_data = JSON.parse(total_data);

 var addcount = 52;
 scount = ecount;
 ecount = ecount+addcount;
        var data1 = total_data.splice(scount,ecount);
 
 data1.forEach(function(datas) {
     var dataset = '<div class="col-md-3" > <a href="'+datas.productBaseInfoV1.productUrl+'" target="_blank"><div class="avs_vt_prdt_set prdt_list"> <img src="'+datas.productBaseInfoV1.imageUrls['200x200']+'" class="avs_vt_prdt_img" alt="Flpicon"/><div class="avs_vt_prdt_rht"><div class="avs_vt_prdt_rht_h3">'+datas.productBaseInfoV1.productBrand+'</div><div class="avs_vt_prdt_rht_h1">'+datas.productBaseInfoV1.title+'</div><div class="avs_vt_prdt_rht_btm"><div class="avs_vt_prdt_rht_prc">₹ '+datas.productBaseInfoV1.flipkartSpecialPrice.amount+' <span style="font-Size:14px; text-Decoration:line-through; display:inline; margin-Left:7px; color:#bbb">₹ '+datas.productBaseInfoV1.maximumRetailPrice.amount+'</span></div> <a href="'+datas.productBaseInfoV1.productUrl+'" class="avs_vt_prdt_rht_btn"><div class="hid">Buy Now</div> <i class="fal fa-cart-plus"></i></a></div></div></div> </a></div>'; 
 
 $(".inrpg").append(dataset);
 });

$(".mr_btn").hide();
});
    $(".nxtpg").click(function(){
       var total_data = $(".page_datas").text();
       total_data = JSON.parse(total_data);
if(ecount <= total_data.length){
var addcount = 52;
scount = ecount;
ecount = ecount+addcount;
       var data1 = total_data.splice(scount,ecount);

data1.forEach(function(datas) {
    var dataset = '<div class="col-md-3" > <a href="'+datas.productBaseInfoV1.productUrl+'" target="_blank"><div class="avs_vt_prdt_set prdt_list"> <img src="'+datas.productBaseInfoV1.imageUrls['200x200']+'" class="avs_vt_prdt_img" alt="Flpicon"/><div class="avs_vt_prdt_rht"><div class="avs_vt_prdt_rht_h3">'+datas.productBaseInfoV1.productBrand+'</div><div class="avs_vt_prdt_rht_h1">'+datas.productBaseInfoV1.title+'</div><div class="avs_vt_prdt_rht_btm"><div class="avs_vt_prdt_rht_prc">₹ '+datas.productBaseInfoV1.flipkartSpecialPrice.amount+' <span style="font-Size:14px; text-Decoration:line-through; display:inline; margin-Left:7px; color:#bbb">₹ '+datas.productBaseInfoV1.maximumRetailPrice.amount+'</span></div> <a href="'+datas.productBaseInfoV1.productUrl+'" class="avs_vt_prdt_rht_btn"><div class="hid">Buy Now</div> <i class="fal fa-cart-plus"></i></a></div></div></div> </a></div>'; 

$(".inrpg").append(dataset);
});
 alert("------start: "+scount+ "------end: "+ecount);

}
else{
    $(".nxtpg").hide();
    $(".mr_btn").show();
    alert("product over");
}
});





      
  
    $(".ld").click(function(){
        $("body").append('<div class="load_set"><img src="/images/loading.gif" class="ld_img"></div>');
        window.stop();
    });
   
   	$(".avs_tp_srch_txtbx").keyup(function(){
    
           var url_links= "/affiliate/1.0/search.json?query="+$(this).val()+"&resultCount=10"
$(".avs_tp_srch_btn").attr("href", url_links);


       });
	if(window.screen.width < 800){
        $(".avs_tp_flp_btn").click(function(){
            $(".avs_tp_flp_sec").toggleClass("opn");
            $("body").toggleClass("fixi");
        });

    }
	if(window.screen.width > 800){
        $(".avs_tp_flp_btn").mouseenter(function(){
            $(".avs_tp_flp_sec").addClass("opn");
        });
        $(".avs_tp_flp_sec").mouseleave(function(){
            $(".avs_tp_flp_sec").removeClass("opn");
        });
	$(window).scroll(function(){
		var toppos= $(this).scrollTop();
			var pagHeight = $("body").height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
		
		 if (pagHeight - scrollPosition === 0) {
	 	$(".ava_s_flt_set_out").css("bottom", "100px");
	}
		
		 else if(toppos > 200) {
	 	$(".ava_s_flt_set_out").addClass("fix");
			 $(".ava_s_flt_set_out").css("bottom", "auto");
	}
		else if(toppos < 200){
				$(".ava_s_flt_set_out").removeClass("fix");
		}

	});}

    $(".ava_s_flt_set_head").click(function () {
        $(this).siblings(".ava_s_flt_set_body").slideToggle(400);
        $(this).toggleClass("opn_flt_head");
        $(this).closest(".ava_s_flt_set").toggleClass("opn_flt");
    });
  
    $(".ava_s_flt_set_mbl_btn").click(function () {
        $(".ava_s_flt_set_out").fadeToggle(300);
        $(this).find("i").toggleClass("fa-times");
        $(this).find("i").toggleClass("fal-filter");

    });

		if($(window).width() > 700){
				$(".mnu_sec").mouseenter(function(){
					$(this).find(".avs_tp_big_mnu").fadeIn(0);
				});
			$(".mnu_sec").mouseleave(function(){
					$(this).find(".avs_tp_big_mnu").fadeOut(0);
				});
			}
			   else{
				   
				    $(".mnu_sec").click(function(){
       $(this).find(".avs_tp_big_mnu").slideToggle(200);
						  $(this).find(".ar_ico").toggleClass("fa-times");
        $(this).find(".ar_ico").toggleClass("fa-arrow-down");
					});
						
				   $(".avs_tp_flp_btn").click(function(){
       $(".avs_tp_mnu_lst").slideToggle(200);
        $(this).find("i").toggleClass("fa-times");
        $(this).find("i").toggleClass("fa-arrow-down");
    });
			   }
$('.mbl_row').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	 navText:["",""],
    responsive:{
        0:{
            items:1.4,
            nav:true,
			margin:0,
			dots:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5.2,
            nav:true,
			dots:false,
            loop:false
        }
    }
});
	$('.sldr_row_2').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
	 navText:["",""],
    responsive:{
        0:{
            items:1.4,
            nav:true,
			margin:0,
			dots:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5.3,
            nav:true,
			dots:false,
            loop:false
        }
    }
});
	
    $.fn.resizeselect = function(settings) {

        return this.each( function() {

            $(this).change( function(){

                var $this = $(this);

                // create test element
                var text = $this.find("option:selected").text();
                var $test = $("<span>").html(text);

                // add to body, get width, and get out
                $test.appendTo('body');
                var width = $test.width();
                $test.remove();

                // set select width
                $this.width(width + arrowWidth);

                // run on start
            }).change();

        });
    };

    $.fn.arrangeObjects = function(wrapWith, maxCols) {

        this.each(function() {
            if ($(this).parent(wrapWith).length) $(this).unwrap();
        });

        this.parent().each(function () {
            var $subnodes       = $(this).children();

            // true will cause counter increment
            // false will cause counter decrement
            var inc     = true;
            var cols    = [];

            for (var i = 0; i < maxCols; i++) {
                cols.push($('<ul></ul>'));
                cols[i].appendTo($(this));
            }

            function sortByHeight(a, b) {
                return $(a).height() > $(b).height() ? 0 : 1;
            }

            $subnodes = $subnodes.sort(sortByHeight);

            var i = 0;
            $subnodes.each(function () {
                // logic for left and right boundry
                if (i < 0 || i === maxCols) {
                    inc = !inc;
                    // this will cause node to be added once again to the same column
                    inc ? i++ : i--;
                }

                cols[i].append($(this));

                inc ? i++ : i--;
            });
        });
    };

    // run by default
    $( "select.resizeselect" ).resizeselect();

})(jQuery, window);

(function($) {
    'use strict';


    /*===================================================================================*/
    /*  WOW
    /*===================================================================================*/

    $(document).ready(function () {
        new WOW().init();
    });

     /*===================================================================================*/
    /*  OWL CAROUSEL
    /*===================================================================================*/

    $(document).ready(function () {

        var dragging = true;
        var owlElementID = "#owl-main";

        function fadeInReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3," + owlElementID + " .caption .fadeIn-4").stop().delay(800).animate({ opacity: 0 }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeIn-1, " + owlElementID + " .caption .fadeIn-2, " + owlElementID + " .caption .fadeIn-3," + owlElementID + " .caption .fadeIn-4").css({ opacity: 0 });
            }
        }

        function fadeInDownReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3," + owlElementID + " .caption .fadeInDown-4").stop().delay(800).animate({ opacity: 0, top: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInDown-1, " + owlElementID + " .caption .fadeInDown-2, " + owlElementID + " .caption .fadeInDown-3," +  owlElementID + " .caption .fadeInDown-4").css({ opacity: 0, top: "-15px" });
            }
        }

        function fadeInUpReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3," + owlElementID + " .caption .fadeInUp-4").stop().delay(800).animate({ opacity: 0, top: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInUp-1, " + owlElementID + " .caption .fadeInUp-2, " + owlElementID + " .caption .fadeInUp-3," + owlElementID + " .caption .fadeInUp-4").css({ opacity: 0, top: "15px" });
            }
        }

        function fadeInLeftReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3, " + owlElementID + " .caption .fadeInLeft-4").stop().delay(800).animate({ opacity: 0, left: "15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInLeft-1, " + owlElementID + " .caption .fadeInLeft-2, " + owlElementID + " .caption .fadeInLeft-3," + owlElementID + " .caption .fadeInLeft-4").css({ opacity: 0, left: "15px" });
            }
        }

        function fadeInRightReset() {
            if (!dragging) {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3," + owlElementID + " .caption .fadeInRight-4").stop().delay(800).animate({ opacity: 0, left: "-15px" }, { duration: 400, easing: "easeInCubic" });
            }
            else {
                $(owlElementID + " .caption .fadeInRight-1, " + owlElementID + " .caption .fadeInRight-2, " + owlElementID + " .caption .fadeInRight-3," + owlElementID + " .caption .fadeInRight-4").css({ opacity: 0, left: "-15px" });
            }
        }

        function fadeIn() {
            $(owlElementID + " .active .caption .fadeIn-1").stop().delay(500).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-2").stop().delay(700).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-3").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeIn-4").stop().delay(1000).animate({ opacity: 1 }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInDown() {
            $(owlElementID + " .active .caption .fadeInDown-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInDown-4").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInUp() {
            $(owlElementID + " .active .caption .fadeInUp-1").stop().delay(500).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-2").stop().delay(700).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-3").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInUp-4").stop().delay(1000).animate({ opacity: 1, top: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInLeft() {
            $(owlElementID + " .active .caption .fadeInLeft-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInLeft-4").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        function fadeInRight() {
            $(owlElementID + " .active .caption .fadeInRight-1").stop().delay(500).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-2").stop().delay(700).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-3").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
            $(owlElementID + " .active .caption .fadeInRight-4").stop().delay(1000).animate({ opacity: 1, left: "0" }, { duration: 800, easing: "easeOutCubic" });
        }

        $(owlElementID).owlCarousel({

            animateOut: 'fadeOut',
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            stopOnHover: true,
            loop: true,
            navRewind: true,
            items: 1,
            dots: true,
            nav:false,
            //navText: ["<i class='icon fa fa-angle-left'></i>", "<i class='icon fa fa-angle-right'></i>"],
            lazyLoad: true,
            stagePadding: 0,
            responsive : {
                0 : {
                    items : 1,
                },
                480: {
                    items : 1,
                },
                768 : {
                    items : 1,
                },
                992 : {
                    items : 1,
                },
                1199 : {
                    items : 1,
                },
                onTranslate : function(){
                      echo.render();
                    }
            },


            onInitialize   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onInitialized   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onResize   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onResized   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onRefresh   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onRefreshed   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onUpdate   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onUpdated   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onDrag : function() {
                dragging = true;
            },

            onTranslate   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },
            onTranslated   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onTo   : function() {
                fadeIn();
                fadeInDown();
                fadeInUp();
                fadeInLeft();
                fadeInRight();
            },

            onChanged  : function() {
                fadeInReset();
                fadeInDownReset();
                fadeInUpReset();
                fadeInLeftReset();
                fadeInRightReset();
                dragging = false;
            }
        });

        var $owl_recently_added_products_carousel = $( '#recently-added-products-carousel .owl-carousel');
        $owl_recently_added_products_carousel.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_recently_added_products_carousel.owlCarousel({
            "items":"6",
            "nav":true,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            responsive : {
                0 : {
                    items : 1,
                },
                480: {
                    items : 2,
                },
                768 : {
                    items : 2,
                },
                992 : {
                    items : 3,
                },
                1200 : {
                    items : 6,
                },
                onTranslate : function(){
                  echo.render();
                }
            },

        });

        var $owl_recommended_product = $( '#recommended-product .owl-carousel');
        $owl_recommended_product.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_recommended_product.owlCarousel({
            "items":"4",
            "nav":false,
            "slideSpeed":300,
            "dots":"true",
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":false,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":3
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":4
                }
            },

        });

        var $owl_home_v3_carousel_tabs = $( '.home-v3-owl-carousel-tabs .owl-carousel')
        $owl_home_v3_carousel_tabs.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_home_v3_carousel_tabs.owlCarousel({
            "items":4,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":4
                }
            },
        });

        var $owl_home_v2_carousel_tabs = $( '.home-v2-owl-carousel-tabs .owl-carousel')
        $owl_home_v2_carousel_tabs.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_home_v2_carousel_tabs.owlCarousel({
            "items":3,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":3
                }
            },
        });

        var $owl_product_carousel_with_image = $( '#products-carousel-with-umage .owl-carousel')
        $owl_product_carousel_with_image.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_product_carousel_with_image.owlCarousel({
            "items":2,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":30,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":1
                },
                "992":{
                    "items":2
                },
                "1200":{
                    "items":2
                }
            },
        });

        var $owl_homev3_products_cards_carousel = $( '#homev3-products-cards-carousel .owl-carousel')
        $owl_homev3_products_cards_carousel.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_homev3_products_cards_carousel.owlCarousel({
            "items":1,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true
        });

        var $owl_product_category_carousel = $( '#product-category-carousel .owl-carousel');
        $owl_product_category_carousel.on( 'initialized.owl.carousel translated.owl.carousel', function() {
            var $this = $(this);
            $this.find( '.owl-item.last-active' ).each( function() {
                $(this).removeClass( 'last-active' );
            });
            $(this).find( '.owl-item.active' ).last().addClass( 'last-active' );
        });
        $owl_product_category_carousel.owlCarousel({
            "items":6,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":6
                }
            },

        });

        $('.home-carousel-tabs').owlCarousel({
            "items":4,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true

        });


        $('#owl-brands').owlCarousel({
            "items":5,
            "navRewind":true,
            "autoplayHoverPause":true,
            "nav":true,"stagePadding":1,
            "dots":false,
            "rtl":false,
            "navText":["<i class=\"fa fa-chevron-left\"><\/i>",
            "<i class=\"fa fa-chevron-right\"><\/i>"],
            "touchDrag":false,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":5
                }
            },
         });

        $('.home-v2-categories-products').owlCarousel({
            "items":4,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":4
                }
            },
        });

        $('.recently-added-products').owlCarousel({
            "items":1,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true,
            "responsive":{
                "0":{
                    "items":1
                },
                "480":{
                    "items":1
                },
                "768":{
                    "items":2
                },
                "992":{
                    "items":3
                },
                "1200":{
                    "items":1
                }
            },
        });

        $('#owl-carousel-media').owlCarousel({
            items : 1,
            nav : false,
            slideSpeed : 300,
            dots: true,
            paginationSpeed : 400,
            navText: ["", ""],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });


        $('.products-carousel-widget').owlCarousel({
            items : 1,
            nav : true,
            slideSpeed : 300,
            dots: false,
            paginationSpeed : 400,
            navText: ["", ""],
            autoHeight: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });

        $('.blog-carousel-widget').owlCarousel({
            items : 1,
            nav : true,
            slideSpeed : 300,
            dots: false,
            paginationSpeed : 400,
            navText: ["", ""],
            autoHeight: false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        });


        $('.home-v1-product-cards-carousel').owlCarousel({
            "items":1,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true
        });

        $('.onsale-product-carousel').owlCarousel({
            "items":1,
            "nav":false,
            "slideSpeed":300,
            "dots":true,
            "rtl":false,
            "paginationSpeed":400,
            "navText":["",""],
            "margin":0,
            "touchDrag":true
        });
    });



     /*===================================================================================*/
     /*  LAZY LOAD IMAGES USING ECHO
     /*===================================================================================*/

    echo.init({
        offset: 100,
        throttle: 250,
        unload: false
    });


    $( document ).ready( function() {

     

        // Owl Carousel
        $( '.slider-next' ).on( "click", function() {
            var owl = $( $( this ).data( 'target' ) + ' .owl-carousel' );
            owl.trigger( 'next.owl.carousel' );
            return false;
        });

        $( '.slider-prev' ).on( "click", function() {
            var owl = $( $( this ).data( 'target' ) + ' .owl-carousel' );
            owl.trigger( 'prev.owl.carousel' );
            return false;
        });

      



        /*===================================================================================*/
        /*  Electro Product Gallery Carousel
        /*===================================================================================*/

        $( '.single-product .electro-gallery' ).each( function() {
            var $sync1 = $(this).children('.thumbnails-single');
            var $sync2 = $(this).children('.thumbnails-all');
            var flag = false;
            var duration = 300;

            $sync1.owlCarousel( {
                items: 1,
                margin: 0,
                dots: false,
                nav: false,
                rtl: is_rtl,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                }
            });

            $sync1.on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync2.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
                $sync2.find(".owl-item").removeClass("synced").eq(e.item.index).addClass("synced");
            });

            $sync2.on('initialized.owl.carousel',function (e) {
                $sync2.find(".owl-item").eq(0).addClass("synced");
            });

            var thumbnail_column_class = $sync2.attr( 'class' );
            var cols = parseInt( thumbnail_column_class.replace( 'thumbnails-all columns-', '' ) );

            $sync2.owlCarousel( {
                items: cols,
                margin: 8,
                dots: true,
                nav: false,
                rtl: is_rtl,
                responsive:{
                    0:{
                        items:1
                    },
                    480:{
                        items:3
                    },
                    768:{
                        items:cols
                    },
                }
            });

            $sync2.on('click', 'a', function (e) {
                e.preventDefault();
            });

            $sync2.on('click', '.owl-item', function () {
                $sync1.trigger('to.owl.carousel', [$(this).index(), duration, true]);
            });

            $sync2.on('changed.owl.carousel', function (e) {
                if (!flag) {
                    flag = true;
                    $sync1.trigger('to.owl.carousel', [e.item.index, duration, true]);
                    flag = false;
                }
            });
        });


        $(".electro-store-directory .product-categories > li").arrangeObjects('ul', 4);


        /*===================================================================================*/
        /*  PRODUCT CATEGORIES TOGGLE
        /*===================================================================================*/

    
    });

})(jQuery);
