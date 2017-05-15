$(document).ready(function() {

	
	// Header

	var $W=$(window),$D=$(document),$H=$("html"),$B=$("body");
	$(function(){
		function e(){
			var e=$W.scrollTop();
			$W.width()<983&&t.removeClass("header--compacted"),
			$W.width()>983&&(s.removeClass("_active"),i.hasClass("_active")&&i.removeClass("_active")),
			$W.width()<983||(e>100?(t.addClass("header--compacted").val("")):t.removeClass("header--compacted"))
		}
		var t=$(".js_header");
		if(t.length){
			var a=$(".js_btn_mobile_menu"),s=$(".js_mobile_menu"),o=$(".js_mobile_menu_btn"),i=$(".js_search");
			$W.on("scroll resize",function(){
				e()
			}),
			a.on("click",function(e){
				e.preventDefault();
				var a=$(this).find(".icon_burger");
				s.hasClass("_active")?(s.removeClass("_active"),
				o.removeClass("_active"),
				a.removeClass("icon_burger_close"),
				t.removeClass("header--active-menu")):(s.addClass("_active"),
				a.addClass("icon_burger_close"),
				t.addClass("header--active-menu"),
				i.hasClass("_active")&&i.removeClass("_active"))
			})
		}
	}),	


	// Accordion Menu	

	$.fn.extend({  
		
		// Define the accordionMenu() function that adds the sliding functionality
		accordionMenu: function(options){
		    
		    // Set the default options
		    var defaults = {
		      	speed: 400
		    	}
		    	var options =  $.extend(defaults, options);

		    	return this.each(function(){
		      
		      	$(this).addClass('tb-mobile-menu');
		      	var menuItems = $(this).children('li');
		      	menuItems.find('.sub-menu').parent().addClass('tb-parent');
		      	$('.tb-parent ul').hide();
		      	$('.tb-parent > a').on('click', function(event) {

		        	event.stopPropagation();
		        	event.preventDefault();
		        	$(this).siblings().slideToggle(options.speed);
		      	});
		      	$('.tb-parent > a').on('click', function() {
		      		$(this).toggleClass("active");
		      	});
		    });
		}
	});

	// Make any nested ul-based menu mobile
	// Optional arguments are 'speed' and 'accordion' (true or false) to disable the behavior of closing other sub
	$('#m_menu').accordionMenu();

	
	// Ul li active	

	$(document).ready(function(){
		var pathname = window.location.pathname,
			page = pathname.split(/[/ ]+/).pop(),
			menuItems = $('ul li a');
		menuItems.each(function(){
			var mi = $(this),
				miHrefs = mi.attr("href"),
				miParents = mi.parents('li');
			if(page == miHrefs) {
				miParents.addClass("current").siblings().removeClass('current');
			}
		});
	});


	// Slider

	$('.slider_top').slick({
	  	slide:".slide",
		autoplay:true,
		autoplaySpeed:9000,
		fade: true,
		pauseOnFocus: false,
		pauseOnHover: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		speed: 3000
 	});

 	$('.slider_awards').slick({
 		pauseOnFocus: false,
		pauseOnHover: false,
		autoplay:true,
		autoplaySpeed:5000,
		dots: true,
		arrows: false,
		slidesToShow: 4,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		      slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      slidesToShow: 1
		      }
		    }
		  ]
 	});

 	$('.slider_proj').slick({
 		pauseOnFocus: false,
		pauseOnHover: false,
		autoplay:true,
		autoplaySpeed:5000,
		slidesToShow: 1
 	});


 	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox, .cert_img").fancybox({

		padding: 0,
	    helpers: {
	        overlay: {
	            locked: false
	        }
	    }		
	});

	$(".phone_text, #phone_right_box, #email_right_box, .btn_callback, .breadcrumbs_btn").fancybox({
	    fixed : false,
	    autoCenter : true
    });

    
	 $(".gal_link").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$('.gal').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});

	// Tabs


	$('ul.tabs').delegate('li:not(.current)', 'click', function() {  
	  $(this).addClass('current').siblings().removeClass('current')  
	  .parents('div.tabulator').eq(0).find('>div.box').hide().eq($(this).index()).show();  
	  return false;  
	});
	



	// jquery.matchHeight

	
	$('.awards_item, .license_item, .icon_box').matchHeight();

	$('.tile, .gal_inner .gal_item, .news_block').matchHeight({ 
	     byRow: 0
	});
	
	
	// FAQ accordion

	$('#accordion-js').find('h4').click(function(){
		
        $(this).next().stop().slideToggle();
        $(this).toggleClass('active');
    }).next().stop().hide();




	$(window).scroll(function() { 
		if($(this).scrollTop() >= 200) {		 
			$('#phone_right_box, #email_right_box, #toTop').addClass('show');		 
		} else {		 
			$('#phone_right_box, #email_right_box, #toTop').removeClass('show');		 
		}		 
	});	
	 
	$('#toTop').click(function() {		 
		$('body,html').animate({scrollTop:0},800);		 
	});



	$("input,select,textarea").jqBootstrapValidation();



	$('#projects_grid').mixItUp();


	$(".projects_grid li").click(function() {
		$(".projects_grid li").removeClass("active");
		$(this).addClass("active");
	});


	$('.feedback_grid').masonry({
	  	itemSelector : '.col-md-6'
	});



	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});



	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();



	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});



	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});



	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/

	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		autoplay : true,
		autoplaySpeed : 2000,
		autoplayTimeout : 5000,
		loop: true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});



	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});


	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});






});


$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});