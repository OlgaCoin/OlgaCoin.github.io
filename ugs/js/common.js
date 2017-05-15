$(document).ready(function() {

	// Mobile menu

	$(".menu_btn").click(function() {
		$(".mob_menu").slideToggle();
	});

	// Sticky menu
	
	$(window).scroll(function(){
	    var sticky = $('.sticky'),
	    scroll = $(window).scrollTop();

	    if (scroll >= 80) sticky.addClass('fixed');
	    else sticky.removeClass('fixed');
	});

	// MatchHeight

	$('.benbox').matchHeight({ 
	     byRow: 0
	});

	$('.how_item').matchHeight();

	// Slick slider

 	$('.services_slider').slick({
		pauseOnHover: true,
		autoplay:false,
		autoplaySpeed:6000,
		arrows: false,
		dots: false,
		slidesToShow: 1,
		pauseOnHover: true,
		pauseOnFocus: true,
		speed: 800,
		fade: true,
		asNavFor: '.services_inner_slider',
		swipe: false
 	});

 	$('.services_inner_slider').slick({
 		slide: '.inner_slide',
		pauseOnHover: true,
		autoplay:false,
		autoplaySpeed:6000,
		arrows: true,
		dots: true,
		slidesToShow: 1,
		pauseOnHover: true,
		pauseOnFocus: true,
		speed: 800,
		asNavFor: '.services_slider'
 	});




/*
 	$('.services_inner_slider').on('mouseenter', function(){
	    $('.services_slider').slick('slickPause');
	});
	$('.services_inner_slider').on('mouseleave', function(){
	    $('.services_slider').slick('slickPlay');
	});

	$('.services_slider').on('mouseenter', function(){
	    $('.services_inner_slider').slick('slickPause');
	});
	$('.services_slider').on('mouseleave', function(){
	    $('.services_inner_slider').slick('slickPlay');
	});
*/

	$('.clients_slider').slick({
 		pauseOnFocus: false,
		pauseOnHover: false,
		autoplay:true,
		autoplaySpeed:5000,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		      slidesToShow: 3,
		      slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		      slidesToShow: 2,
		      slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1
		      }
		    }
		]
 	});


	// FancyBox

	$(".fancybox, [license]").fancybox();
	

	// ToTop

	$(window).scroll(function() { 
		if($(this).scrollTop() >= 650) {		 
			$('#toTop').fadeIn('slow');		 
		} else {		 
			$('#toTop').fadeOut('slow');		 
		}		 
	});	

	$("#toTop").click(function () {
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


	// Yandex Map 

	ymaps.ready(init);
    var myMap, 
        myPlacemark;

    function init(){ 
        myMap = new ymaps.Map("map", {
            center: [47.32416592, 40.39316667],
            zoom: 8,
            controls: ['fullscreenControl']
            }, {
            balloonMaxWidth: 250
        }); 

        myMap.controls.add('zoomControl', {size: 'small', position: {right: '10px', top: '180px'}});

        myMap.behaviors.disable('scrollZoom'); 


         // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
        officeBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 346720, г. Аксай, Ростовская область, ул. Ленина, 57</p>' +
                '<img src="img/office.jpg" alt="Фото. Офис." />' +
            '</div>', {
        });

        firstStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> РО, Аксайский р-он, 1034 км а/д М-4 «Дон»</p>' +
                '<p><span>Топливо:</span> ДТ, АИ-92, СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/azs/1.jpg" alt="Фото. МАЗС ст. Гушевская." />' +
            '</div>', {
        });

        secondStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 347740, г. Зерноград, Ростовская область, ул. Садовая, 45</p>' +
                '<p><span>Топливо:</span> СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/azs/2.jpg" alt="Фото. АГЗС г. Зерноград." />' +
            '</div>', {
        });

        thirdStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 346630,  г. Семикаракорск, Ростовская область, ул. Калинина, 463</p>' +
                '<p><span>Топливо:</span> СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/azs/3.jpg" alt="Фото. АГЗС г. Семикаракорск." />' +
            '</div>', {
        });
        
        myOfficePlacemark = new ymaps.Placemark([47.27997757, 39.85958958], {
            hintContent: 'Офис ООО «Юггазсервис»',
            name: 'ООО «Юггазсервис»'
        }, {
            // Опции.
            balloonContentLayout: officeBalloon,
            // Запретим замену обычного балуна на балун-панель.
            // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
            // Путь до нашей картинки
            iconImageHref: 'img/mark.png', 
            // Размер по ширине и высоте
            iconImageSize: [55, 55],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-27, -55],
            balloonOffset: [0, -60],
            hideIconOnBalloonOpen: false 
        }),

        myFirstStationPlacemark = new ymaps.Placemark([47.447907, 39.973184], {
            hintContent: 'МАЗС',
            name: 'МАЗС (ЮГС)'
        }, {
            balloonContentLayout: firstStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark1.png',
			iconImageSize: [55, 55],
			iconImageOffset: [-27, -55],
            balloonOffset: [0, -60],
            hideIconOnBalloonOpen: false
        });

        mySecondStationPlacemark = new ymaps.Placemark([46.832082, 40.298878], {
            hintContent: 'АГЗС',
            name: 'АГЗС (ЮГС)'
        }, {
            balloonContentLayout: secondStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark1.png',
			iconImageSize: [55, 55],
			iconImageOffset: [-27, -55],
            balloonOffset: [0, -60],
            hideIconOnBalloonOpen: false
        });

        myThirdStationPlacemark = new ymaps.Placemark([47.51223704, 40.76437782], {
            hintContent: 'АГЗС',
            name: 'АГЗС (ЮГС)'
        }, {
            balloonContentLayout: thirdStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark1.png',
			iconImageSize: [55, 55],
			iconImageOffset: [-27, -55],
            balloonOffset: [0, -60],
            hideIconOnBalloonOpen: false
        });

    myMap.geoObjects
        .add(myOfficePlacemark)
        .add(myFirstStationPlacemark)
        .add(mySecondStationPlacemark)
        .add(myThirdStationPlacemark);
    }
});


// Scroll to ID + Preloader

$(window).on("load",function(){

	$(".preloader-container").fadeOut();
	$(".preloader").delay(350).fadeOut("slow");

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	highlightClass:"active",
    	scrollEasing: "easeInOutQuint",
    	clickedClass: "clicked",
    	offset:30
    });

    var $status = $('.pagingInfo');
	var $slickElement = $('.services_inner_slider');

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status.text('0' + i + '/' + '0' + slick.slideCount);
	});
});