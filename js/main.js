$(document).ready(function() {

	$('.header__contacts .operator').mousedown(function() {
	  gtag('event', 'click', {'event_category':'phone', 'event_label':'tel_header'});
	  //console.log( "Handler for .mousedown() called." );
	});


	$('#contacts .contacts__items-container .contacts__item .operator').mousedown(function() {
	  gtag('event', 'click', {'event_category':'phone', 'event_label':'tel_contacts'});
	  //console.log( "footer" );
	});
	// CONTACT FORM
	// $('#contact_form').submit( function(event) {
	// 	event.preventDefault();
	// 	gtag('event', 'send_contactform', {'event_category':'contactform'});
	//   $("#prelo").show();
	//   $.ajax({
	//     type: "POST",
	//     url: "php/active.php",
	//     data: $(this).serialize()
	//   }).done(function(data) {
	//     console.log(data);
	//     output = 'Мы с вами свяжемся в ближайшее время';
	//     $('#form-footer input').val('');
	//     $("#prelo").hide();
	//     $("#result").html(output);
	//     $('#modal-success').modal('show');
	//   });
	//   return false;
	// });


	// $('.timer .days .flip-clock-label').text('Дни');
	// $('.timer .hours .flip-clock-label').text('Часы');
	// $('.timer .minutes .flip-clock-label').text('Минуты');
	// $('.timer .seconds .flip-clock-label').text('Секунды');


	// smooth-scroll 
	$('.smooth-scroll a').on('click', function(event) {

	  if (this.hash !== '') {
	    event.preventDefault();

	    var hash = this.hash;
	    var offset = 0;

	    if (hash == '#about-us') offset += 70;

	    $('html, body').animate({
	      scrollTop: $(hash).offset().top - (70 + offset)
	    }, 800);
	  } 
	});


	// scrollspy
  $('body').scrollspy({target: ".header__menu", offset: 140});   

	// ### width 0
	$('.products-1__subheader-line').css({width:'0'});
	$('.products-2__subheader-line').css({width:'0'});
	$('.products-3__subheader-line').css({width:'0'});

	// animations onload
	$('.main-screen__header').addClass('animated fadeInUp');

	setTimeout( function() {
		$('#carousel .button').addClass('animated fadeInLeft animation-visible')
	}, 300);

	setTimeout( function() {
		$('.carousel-indicators').addClass('animated fadeIn animation-visible')
	}, 990);

});


// COUNTER flag
let isCounted = false;
let isScrolled = false;

$(window).scroll(animateAll);

function animateAll() {

	if ( Object.keys($('.about-us')).length > 2 && $('.about-us').offset().top  < window.pageYOffset ) {
		$('.up-button').addClass('animated fadeInUp animation-visible');
	}  

	if ( Object.keys($('.about-us')).length > 2 && $('.about-us').offset().top  > window.pageYOffset ) {

		if (isScrolled) {
			$('.up-button').addClass('fadeOutRight');

			setTimeout(function() {
				$('.up-button').removeClass('fadeOutRight animation-visible');
				isScrolled = false;
			}, 700);

		} else {
			$('.up-button').removeClass('fadeInUp animation-visible');
		}
	}
	

	// ABOUT US
	if ( Object.keys($('.about-us')).length > 2 && $('.about-us').offset().top - 300 < window.pageYOffset ) {
		$('.about-us .buttons-inline-wrap').addClass('animated fadeInDown animation-visible');

		setTimeout( function() {
		$('.about-us .button--yellow').addClass('animated fadeInUp animation-visible')
		}, 500);
	}

	// PRODUCTS 1
	if ( Object.keys($('.products-1')).length > 2 && $('.products-1').offset().top - 500 < window.pageYOffset ) {
		$('.products-1 .black-header').addClass('animated fadeInLeft animation-visible');

		// setTimeout( function() {
		// 	$('.products-1__subheader-line').animate({width:'96.3%'}, 1200);
		// }, 500);

		let offset = 600;
		for (let i = 0; i < 6; i++) {
			setTimeout( function() {
				$('.products-1 .product-image').eq(i).addClass('animated fadeIn animation-visible');
			}, 0 + offset);
			offset += 500;
		}

		setTimeout( function() {
			$('.products-1 .button--transparent').addClass('animated fadeInLeft animation-visible');
		}, 1400);
	}

	// FEATURES
	if ( Object.keys($('.features')).length > 2 && $('.features').offset().top - 500 < window.pageYOffset) {

		let offset = 0;
		for (let i = 0; i < 5; i++) {
			setTimeout( function() {
				$('.features__item').eq(i).addClass('animated fadeInUp animation-visible');
			}, 0 + offset);
			offset += 100;
		}

		setTimeout( function() {
			$('.features__button').addClass('animated fadeInRight animation-visible');
		}, 450);
	}


	// COUNTER
	if ( Object.keys($('.counters')).length > 2 && $('.counters').offset().top - 700 < window.pageYOffset && !isCounted) {
		
		$('.counter__numbers').eq(0).lemCounter({
				value_from: 0,
			  value_to: 15,
			  animate_duration: 3
		});

		$('.counter__numbers').eq(1).lemCounter({
			value_from: 0,
		  value_to: 9,
		  animate_duration: 3
		});

		$('.counter__numbers').eq(2).lemCounter({
			value_from: 0,
		  value_to: 5000,
		  animate_duration: 3
		});

		$('.counter__numbers').eq(3).lemCounter({
			value_from: 0,
		  value_to: 24,
		  animate_duration: 3
		});

		isCounted = true;
}

}


// BUTTON
$('.up-button').click(function(event) {
	isScrolled = true;

	$('.up-button').animate({
		bottom: '-22px'
	}, 500);

	setTimeout(function() {
		$('.up-button').animate({
			bottom: '-11px'
		}, 500);	
	}, 600);

	
	if (this.hash !== '') {
    event.preventDefault();

    var hash = this.hash;

    setTimeout(function(event) {
	    $('html, body').animate({
	      scrollTop: $(hash).offset().top 
	    }, 800);
    }, 700);
  } 

  setTimeout(function() {
		$('.up-button').css('bottom', '10px');	
	}, 2000);
	
});


// function callBinotel(event) {
// 	event.preventDefault();

// 	let eventClick = new MouseEvent('click', {
//     'view': window,
//     'bubbles': true,
//     'cancelable': true
//   });
  
// 	document.querySelector('#bingc-phone-button').dispatchEvent(eventClick);
// }

// $('.button--phone, .button--phone-bl').click(callBinotel);


// COUNTDOWN
// var clock;
// var today = new Date();
// var endDate = new Date('Jan 15, 2019 23:59:59'); // вводить нужное время

// endDate = Date.parse(endDate);
// today = Date.parse(today);

// clock = $('.timer').FlipClock({
//     clockFace: 'DailyCounter',
//     autoStart: false,
//     callbacks: {
//     	stop: function() {
//     		$('.message').html('Время истекло!')
//     	}
//     }
// });
	    
// clock.setTime( (endDate / 1000) - (today / 1000) );
// clock.setCountdown(true);
// clock.start();