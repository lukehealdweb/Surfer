/*
Theme Name: Surfer
Description: Creative Ecommerce HTML Template
Author: RafavaThemes
Version: 1.0
*/

/* ==================================================================
 
 * Table of Contents:
 *
 * 1.0 - Loader
 * 2.0 - Flexslider
 * 3.0 - Desktop Menu Open
 * 4.0 - Mosaic Packery
 * 5.0 - Masonry Tri-menu
 * 6.0 - Carousel Home
 * 7.0 - Carousel Related
 * 8.0 - Carousel Easyzoom
 * 9.0 - Mobile Menu
 * 10.0- Display Columns Grid
 * 11.0- Select Box
 * 12.0- Rating Stars
 * 13.0- Product-image Zoom
 * 14.0- Detail Tabs
 * 15.0- IOS7 fix

================================================================== */

$(window).load(function() {
  "use strict";

    //LOADER
    $("#background").delay(700).fadeOut("slow");
    $(".loading").fadeOut("slow");
	
	  //FLEXSLIDER
    $('.flexslider').flexslider({
    	animation: "slide",
    	customDirectionNav: $(".custom-navigation a"),
    	controlNav: false,
    	slideshow:false
  	});

});

$(document).ready(function() {
	"use strict";

	//DESKTOP MENU OPEN
	$(".list-menu").on("mouseenter mouseleave", function() {
    	$(this).toggleClass("hover");
 	});
	
	//MOSAIC PACKERY
	var $isotope1 = $('#mosaic').imagesLoaded( function() {
		$('#mosaic').isotope({
    		packery: {
  				columnWidth:".mosaic-sizer",
  				rowHeight:".mosaic-sizer",
  				gutter:".gutter-sizer"
			},
      		layoutMode: 'packery',
     		  itemSelector:".mosaic-item",
      		percentPosition: true
    	});
	});
	
	//MASONRY TRI-MENU
	var $isotope2 = $('#tri-menu').imagesLoaded( function() {
		$('#tri-menu').isotope({
    		packery: {
  				columnWidth:".trimenu-sizer",
  				rowHeight:".trimenu-sizer"
			},
      		layoutMode: 'packery',
     		  itemSelector:".tri-menu-item",
      		percentPosition: true
   		});
	});

  //CAROUSEL HOME
  var carousel1 = $("#carousel-item-container");
    carousel1.owlCarousel({
      navigation: false,
      slideSpeed: 500,
      items: 4,
      pagination: false,
     	rewindNav : false,	
			itemsCustom:[[0, 1], [568, 2], [768, 3], [1200, 4]],
      mouseDrag:false,
      afterAction: function(){
      	if ( this.itemsAmount > this.visibleItems.length ) {
        	$('.home-item-navigation .nextnav').show();
        	$('.home-item-navigation .prevnav').show();
				  $('.home-item-navigation .nextnav').removeClass('disabled');
        	$('.home-item-navigation .prevnav').removeClass('disabled');
        	if ( this.currentItem == 0 ) {
          		$('.home-item-navigation .prevnav').addClass('disabled');
        	}
        	if ( this.currentItem == this.maximumItem ) {
          		$('.home-item-navigation .nextnav').addClass('disabled');
        	}
			  } else {
        	$('.home-item-navigation .nextnav').hide();
        	$('.home-item-navigation .prevnav').hide();
      	}
      }
  });
  $(".home-item-navigation ul .nextnav").on("click", function() {
    carousel1.trigger("owl.next");
  });
  $(".home-item-navigation ul .prevnav").on("click", function() {
    carousel1.trigger("owl.prev");
  });

  //CAROUSEL RELATED
  var carousel2 = $("#carousel-related");
    carousel2.owlCarousel({
      navigation: false,
      rewindNav : false,	
      itemsCustom:[[0, 1], [568, 2], [768, 3]],
      slideSpeed: 500,
      items: 3,
      pagination: false,  
      afterAction: function(){
      	if ( this.itemsAmount > this.visibleItems.length ) {
        	$('.related-item-navigation ul .nextnav').show();
        	$('.related-item-navigation ul .prevnav').show();
				  $('.related-item-navigation ul .nextnav').removeClass('disabled');
        	$('.related-item-navigation ul .prevnav').removeClass('disabled');
        	if ( this.currentItem == 0 ) {
          	$('.related-item-navigation ul .prevnav').addClass('disabled');
        	}
        	if ( this.currentItem == this.maximumItem ) {
          	$('.related-item-navigation ul .nextnav').addClass('disabled');
        	}
				} else {
        		$('.related-item-navigation ul .nextnav').hide();
        		$('.related-item-navigation ul .prevnav').hide();
      	}
      }
  });
  $(".related-item-navigation ul .nextnav").on("click", function() {
    carousel2.trigger("owl.next");
  });
  $(".related-item-navigation ul .prevnav").on("click", function() {
    carousel2.trigger("owl.prev");
  });

  //CAROUSEL EASYZOOM
  var carousel3 = $("#carousel-easyzoom");
    carousel3.owlCarousel({
      navigation: false,
      rewindNav : false,	
      slideSpeed: 500,
      items: 1,
      itemsCustom:[[0, 1], [568, 1], [768, 1]],
      mouseDrag:false,
      pagination: false,  
      afterAction: function(){
      	if ( this.itemsAmount > this.visibleItems.length ) {
        	$('.easyzoom-item-navigation .nextnav').show();
        	$('.easyzoom-item-navigation .prevnav').show();
				  $('.easyzoom-item-navigation .nextnav').removeClass('disabled');
        	$('.easyzoom-item-navigation .prevnav').removeClass('disabled');
        	if ( this.currentItem == 0 ) {
          	$('.easyzoom-item-navigation .prevnav').addClass('disabled');
        	}
        	if ( this.currentItem == this.maximumItem ) {
          	$('.easyzoom-item-navigation .nextnav').addClass('disabled');
        	}
				} else {
        		$('.easyzoom-item-navigation .nextnav').hide();
        		$('.easyzoom-item-navigation .prevnav').hide();
      	}
      }
  });
  $(".easyzoom-item-navigation ul .nextnav").on("click", function() {
    carousel3.trigger("owl.next");
  });
  $(".easyzoom-item-navigation ul .prevnav").on("click", function() {
    carousel3.trigger("owl.prev");
  });
	
	//MOBILE MENU
  $("#my-menu").mmenu({
    navbars:{content:"searchfield"},
    searchfield:{placeholder:"SEARCH"},
 		slidingSubmenus: false,
    extensions: ["pagedim-black"],
    searchfield:{
      add: true,
      search: false
    }
  });
  $("#my-menu .mm-search input").keyup(function(e){
	  if(e.keyCode == 13){
	     window.location.href = 'search.php?q=' + $(this).val();
	  }
	});

	//DISPLAY COLUMNS GRID
	$('.col6').on('click', function () {
		$('.col').removeClass('col-md-4 col-md-6 col-md-3');
    $('.col').addClass('col-md-6');
    $('.display ul li a').removeClass('active');
		$('.col6').addClass('active');
	});
	$('.col4').on('click', function () {
		$('.col').removeClass('col-md-4 col-md-6 col-md-3');
    $('.col').addClass('col-md-4');
    $('.display ul li a').removeClass('active');
		$('.col4').addClass('active');
	});
	$('.col3').on('click', function () {
		$('.col').removeClass('col-md-4 col-md-6 col-md-3');
    $('.col').addClass('col-md-3');
    $('.display ul li a').removeClass('active');
    $('.col3').addClass('active');
	});
	
	//SELECT BOX
	$(".select-box").select2({
		minimumResultsForSearch: Infinity
 	});
	
	//RATING STARS
  $('#product-review-options-1').barrating({
    theme: 'fontawesome-stars',
    readonly: true,
    initialRating: 4
  });
	$('#product-review-options-2').barrating({
    theme: 'fontawesome-stars',
    readonly: true,
    initialRating: 3
  });
    
  //DETAIL ZOOM IMAGE
	$('.easyzoom').zoom();
	
	//DETAIL TABS
	$( "#detail-tabs" ).tabs({ active: 1 });
	
	//IOS7 VW UNITS
	var IS_MOBILE_SAFARI_7 = !!navigator.userAgent.match(/i(Pad|Phone|Pod).+(Version\/7\.\d+ Mobile)/i);
  if (IS_MOBILE_SAFARI_7) {
		var a = function fixMobileSafariViewport() {
	  		$('.x1,.x2,.x2x1').css('height', window.innerHeight * 0.75);
		}
	  $(window).on("resize",function(){
        fixMobileSafariViewport(); 
    });   
	}

});