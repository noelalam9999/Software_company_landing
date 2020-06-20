function vw_book_store_menu_open_nav() {
	window.mobileMenu=true;
	jQuery(".sidenav").addClass('show');
}
function vw_book_store_menu_close_nav() {
	window.mobileMenu=false;
 	jQuery(".sidenav").removeClass('show');
}

jQuery(function($){
 	"use strict";
   	jQuery('.main-menu > ul').superfish({
		delay:       500,
		animation:   {opacity:'show',height:'show'},
		speed:       'fast'
   	});
});

jQuery(function($){
	window.currentfocus=null;
  	vw_book_store_checkfocusdElement();
	var body = document.querySelector('body');
	body.addEventListener('keyup', vw_book_store_check_tab_press);
	var gotoHome = false;
	var gotoClose = false;
	window.mobileMenu=false;
 	function vw_book_store_checkfocusdElement(){
	 	if(window.currentfocus=document.activeElement.className){
		 	window.currentfocus=document.activeElement.className;
	 	}
 	}
 	function vw_book_store_check_tab_press(e) {
		"use strict";
		// pick passed event or global event object if passed one is empty
		e = e || event;
		var activeElement;

		if(window.innerWidth < 999){
		if (e.keyCode == 9) {
			if(window.mobileMenu){
			if (!e.shiftKey) {
				if(gotoHome) {
					jQuery( ".main-menu ul:first li:first a:first-child" ).focus();
				}
			}
			if (jQuery("a.closebtn.mobile-menu").is(":focus")) {
				gotoHome = true;
			} else {
				gotoHome = false;
			}

		}else{

			if(window.currentfocus=="mobiletoggle"){
				jQuery( "" ).focus();
			}}}
		}
		if (e.shiftKey && e.keyCode == 9) {
		if(window.innerWidth < 999){
			if(window.currentfocus=="header-search"){
				jQuery(".mobiletoggle").focus();
			}else{
				if(window.mobileMenu){
				if(gotoClose){
					jQuery("a.closebtn.mobile-menu").focus();
				}
				if (jQuery( ".main-menu ul:first li:first a:first-child" ).is(":focus")) {
					gotoClose = true;
				} else {
					gotoClose = false;
				}

			}else{

			if(window.mobileMenu){
			}}}}
		}
	 	vw_book_store_checkfocusdElement();
	}
});

(function( $ ) {
	jQuery(window).load(function() {
	    jQuery("#status").fadeOut();
	    jQuery("#preloader").delay(1000).fadeOut("slow");
	})
	$(window).scroll(function(){
		var sticky = $('.header-sticky'),
			scroll = $(window).scrollTop();

		if (scroll >= 200) sticky.addClass('header-fixed');
		else sticky.removeClass('header-fixed');
	});
	$(document).ready(function(){
		$(".product-cat").hide();
	    $("button.product-btn").click(function(){
	        $(".product-cat").toggle();
	    });
	});
	$(document).ready(function () {
		$(window).scroll(function () {
		    if ($(this).scrollTop() > 100) {
		        $('.scrollup i').show();
		    } else {
		        $('.scrollup i').hide();
		    }
		});
		$('.scrollup i').click(function () {
		    $("html, body").animate({
		        scrollTop: 0
		    }, 600);
		    return false;
		});
	});
})( jQuery );

jQuery(function($){
	var navmenus = navmenus || {};

	navmenus.primaryMenu = {

		init: function() {
			this.focusMenuWithChildren();
		},
		// The focusMenuWithChildren() function implements Keyboard Navigation in the Primary Menu
		// by adding the '.focus' class to all 'li.menu-item-has-children' when the focus is on the 'a' element.
		focusMenuWithChildren: function() {
			// Get all the link elements within the primary menu.
			var links, i, len,
				menu = document.querySelector( '.main-navigation' );

			if ( ! menu ) {
				return false;
			}
			links = menu.getElementsByTagName( 'a' );

			// Each time a menu link is focused or blurred, toggle focus.
			for ( i = 0, len = links.length; i < len; i++ ) {
				links[i].addEventListener( 'focus', vw_book_store_toggleFocus, true );
				links[i].addEventListener( 'blur', vw_book_store_toggleFocus, true );
			}

			//Sets or removes the .focus class on an element.
			function vw_book_store_toggleFocus() {
				var self = this;

				// Move up through the ancestors of the current link until we hit .primary-menu.
				while ( -1 === self.className.indexOf( 'mobile_nav' ) ) {
					// On li elements toggle the class .focus.
					if ( 'li' === self.tagName.toLowerCase() ) {
						if ( -1 !== self.className.indexOf( 'focus' ) ) {
							self.className = self.className.replace( ' focus', '' );
						} else {
							self.className += ' focus';
						}
					}
					self = self.parentElement;
				}
			}
		}
	}; 

	function vw_book_store_navigationmenuReady( fn ) {
		if ( typeof fn !== 'function' ) {
			return;
		}
		if ( document.readyState === 'interactive' || document.readyState === 'complete' ) {
			return fn();
		}
		document.addEventListener( 'DOMContentLoaded', fn, false );
	}
	vw_book_store_navigationmenuReady( function() {
		navmenus.primaryMenu.init();	// Primary Menu
	} );
});