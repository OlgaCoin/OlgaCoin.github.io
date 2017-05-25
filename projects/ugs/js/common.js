$(document).ready(function() {

	$(".btn_mnu").click(function() {
		$(this).toggleClass("active");
		$(".sticky").toggleClass("active");

	});

	// Scroll to ID

    $("a[rel='m_PageScroll2id']").mPageScroll2id({
    	highlightClass:"active",
    	scrollEasing: "easeInOutQuint",
    	clickedClass: "clicked",
    	offset: 0
    });

	// MatchHeight

	$('.benbox').matchHeight({ 
	     byRow: 0
	});

	$('.how_item').matchHeight();

	// Slick slider

	$('.top_slider').slick({
		pauseOnHover: false,
		autoplay:true,
		autoplaySpeed:8000,
		arrows: true,
		dots: false,
		slidesToShow: 1,
		pauseOnFocus: false,
		speed: 800,
		responsive: [
		    {
		    breakpoint: 768,
		    settings: {
		    arrows: false
		    }
		}]
 	});

 	$('.services_slider').slick({
		pauseOnHover: true,
		autoplay:false,
		autoplaySpeed:6000,
		arrows: false,
		dots: false,
		slidesToShow: 1,
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

	$(".fancybox, .license").fancybox();

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

	$("#callback, #form_call").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("#callback, #form_call").serialize()
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
        }); 

        myMap.controls.add('zoomControl', {size: 'small', position: {right: '10px', top: '180px'}});

        myMap.behaviors.disable('scrollZoom'); 

         // Создание макета содержимого балуна.
        // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
        officeBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 346720, г. Аксай, Ростовская область, ул. Ленина, 57</p>' +
                '<img src="img/map/4.jpg" alt="Фото. Офис." />' +
            '</div>', {
        });
        firstStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> РО, Аксайский р-он, 1034 км а/д М-4 «Дон»</p>' +
                '<p><span>Топливо:</span> ДТ, АИ-92, СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/map/1.jpg" alt="Фото. МАЗС ст. Грушевская." />' +
            '</div>', {
        });
        secondStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 347740, г. Зерноград, Ростовская область, ул. Садовая, 45</p>' +
                '<p><span>Топливо:</span> СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/map/2.jpg" alt="Фото. АГЗС г. Зерноград." />' +
            '</div>', {
        });
        thirdStationBalloon = ymaps.templateLayoutFactory.createClass(
            '<div class="balloon">' +
                '<h4>{{properties.name}}</h4>' +
                '<p><span>Адрес:</span> 346630,  г. Семикаракорск, Ростовская область, ул. Калинина, 463</p>' +
                '<p><span>Топливо:</span> СУГ</p>' +
                '<p><span>Режим работы:</span> круглосуточно</p>' +
                '<img src="img/map/3.jpg" alt="Фото. АГЗС г. Семикаракорск." />' +
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
            iconImageSize: [50, 50],
            // Смещение левого верхнего угла иконки относительно
            // её «ножки» (точки привязки).
            iconImageOffset: [-25, -50],
            balloonOffset: [0, -55],
            hideIconOnBalloonOpen: false 
        }),
        myFirstStationPlacemark = new ymaps.Placemark([47.447907, 39.973184], {
            hintContent: 'МАЗС',
            name: 'МАЗС (ЮГС)',
            iconCaption: 'МАЗС ст. Грушевская'
        }, {
            balloonContentLayout: firstStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark.png',
			iconImageSize: [50, 50],
			iconImageOffset: [-25, -50],
            balloonOffset: [0, -55],
            hideIconOnBalloonOpen: false
        });
        mySecondStationPlacemark = new ymaps.Placemark([46.832082, 40.298878], {
            hintContent: 'АГЗС',
            name: 'АГЗС (ЮГС)'
        }, {
            balloonContentLayout: secondStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark.png',
			iconImageSize: [50, 50],
			iconImageOffset: [-25, -50],
            balloonOffset: [0, -55],
            hideIconOnBalloonOpen: false
        });
        myThirdStationPlacemark = new ymaps.Placemark([47.51223704, 40.76437782], {
            hintContent: 'АГЗС',
            name: 'АГЗС (ЮГС)'
        }, {
            balloonContentLayout: thirdStationBalloon,
            balloonPanelMaxMapArea: 0,
            iconLayout: 'default#image',
			iconImageHref: 'img/mark.png',
			iconImageSize: [50, 50],
			iconImageOffset: [-25, -50],
            balloonOffset: [0, -55],
            hideIconOnBalloonOpen: false
        });

	    myMap.geoObjects
	        .add(myOfficePlacemark)
	        .add(myFirstStationPlacemark)
	        .add(mySecondStationPlacemark)
	        .add(myThirdStationPlacemark);

        observeEvents(myMap);  
    }

    function observeEvents (map) {
	    var mapEventsGroup;
	    map.geoObjects.each(function (geoObject) {
	        geoObject.balloon.events
	            // При открытии балуна начинаем слушать изменение центра карты.
	            .add('open', function (e1) {
	                var placemark = e1.get('target');
	                // Вызываем функцию в двух случаях:
	                mapEventsGroup = map.events.group()
	                    // 1) в начале движения (если балун во внешнем контейнере);
	                    .add('actiontick', function (e2) {
	                        if (placemark.options.get('balloonPane') == 'outerBalloon') {
	                            setBalloonPane(map, placemark, e2.get('tick'));
	                        }
	                    })
	                    // 2) в конце движения (если балун во внутреннем контейнере).
	                    .add('actiontickcomplete', function (e2) {
	                        if (placemark.options.get('balloonPane') != 'outerBalloon') {
	                            setBalloonPane(map, placemark, e2.get('tick'));
	                        }
	                    });
	                // Вызываем функцию сразу после открытия.
	                setBalloonPane(map, placemark);
	            })
	            // При закрытии балуна удаляем слушатели.
	            .add('close', function () {
	                mapEventsGroup.removeAll();
	            });
	    });
	}

	function setBalloonPane (map, placemark, mapData) {
	    mapData = mapData || {
	        globalPixelCenter: map.getGlobalPixelCenter(),
	        zoom: map.getZoom()
	    };

	    var mapSize = map.container.getSize(),
	        mapBounds = [
	            [mapData.globalPixelCenter[0] - mapSize[0] / 2, mapData.globalPixelCenter[1] - mapSize[1] / 2],
	            [mapData.globalPixelCenter[0] + mapSize[0] / 2, mapData.globalPixelCenter[1] + mapSize[1] / 2]
	        ],
	        balloonPosition = placemark.balloon.getPosition(),
	    // Используется при изменении зума.
	        zoomFactor = Math.pow(2, mapData.zoom - map.getZoom()),
	    // Определяем, попадает ли точка привязки балуна в видимую область карты.
	        pointInBounds = ymaps.util.pixelBounds.containsPoint(mapBounds, [
	            balloonPosition[0] * zoomFactor,
	            balloonPosition[1] * zoomFactor
	        ]),
	        isInOutersPane = placemark.options.get('balloonPane') == 'outerBalloon';

	    // Если точка привязки не попадает в видимую область карты, переносим балун во внутренний контейнер
	    if (!pointInBounds && isInOutersPane) {
	        placemark.options.set({
	            balloonPane: 'balloon',
	            balloonShadowPane: 'shadows'
	        });
	        // и наоборот.
	    } else if (pointInBounds && !isInOutersPane) {
	        placemark.options.set({
	            balloonPane: 'outerBalloon',
	            balloonShadowPane: 'outerBalloon'
	        });
	    }
	}

});

// Preloader + pagingInfo 

$(window).on("load",function(){

	$(".preloader-container").fadeOut();
	$(".preloader").delay(350).fadeOut("slow");
});