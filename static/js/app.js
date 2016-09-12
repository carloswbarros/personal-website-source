vex.defaultOptions.className = 'vex-theme-wireframe';

$(document).ready(function(){

	// Smooth scrolling of the links
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				//return false;
			}
		}
	});

	// Thumbnail open modal
	$('.thumbnail .overlay').on('click', function(e){
		e.preventDefault();
		$elem = $(this).parent();

		var image = $elem.data('image');
		var title = $elem.data('title');
		var subtitle = $elem.data('subtitle');
		var description = $elem.data('description');
		var skills = $elem.data('skills');
		var url = $elem.data('url');

		var lang_technologies = $elem.data('langtechnologies');
		var lang_description = $elem.data('langdescription');

		vex.open({
			content: ' \
					<div class="portfolio-modal"> \
						<div class="grid"> \
							<div class="col-4-12"> \
								<img src="'+image+'" alt="'+title+'" /> \
							</div> \
							<div class="col-8-12"> \
								<div class="info"> \
									 <h1>'+title+'</h1> \
									 <h2>'+subtitle+'</h2> \
									 \
									 <label>'+lang_technologies+': </label> \
									 '+skills+' \
									 \
									 <label>Url: <a href="'+url+'" target="_new">'+url+'</a></label> \
									 \
									 <label>'+lang_description+': </label> \
									 <p>'+description+'</p> \
									 \
								</div> \
							</div> \
						</div> \
					</div>',
			afterOpen: function($vexContent) {
				$vexContent.addClass('animated bounceInDown');
				return $vexContent.append($vexContent);
			},
			contentCSS: {
				'width': '80%'
			}
		});
	});

	// Typeit
	$('.title').typeIt({
		autoStart: false
	});

	// Eggs
	/*var egg = new Egg("a,m,a,z,i,n,g", function() {
		alert('I know I am. But thank you ^^');
	}).listen();*/

	// Scrollup
	$.scrollUp({
	   animation: 'fade',
	   scrollText: '&#x25B2;'
	});

	// Baffle
	var b = baffle('.baffle', {
	    characters: '█▓▒░█▓▒░█▓▒░<>/',
	    speed: 70
	});

	$('.baffle').appear(function() {
	    setTimeout( function(){ // the timeout is me trying to async this
	        b.reveal(900);
	    }, 0);
	});

	// Scroll animations
	$('.avatar-img').appear(function() {
		$(this).addClass('animated fadeInRight');
	});

	$('.thumbnail').appear(function() {
		$(this).addClass('animated bounceIn');
	});

	// Buttons blur effect
	buttonBlurEffect('.btn-github', '#github-filter');
	buttonBlurEffect('.btn-linkedin', '#linkedin-filter');
	avatarBlurEffect('.avatar-img', '#avatar-filter');
	logoBlurEffect('.logo', '#logo-filter');

});

function buttonBlurEffect(elem, filter){
	var turbVal = { val: 0.000001 };

	var bt = document.querySelectorAll(elem)[0];
	var turb = document.querySelectorAll(filter+' feTurbulence')[0];
	var btTl = new TimelineLite({ paused: true, onUpdate: function() {
		turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val);
	} });

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	bt.addEventListener('mouseover', function() {
		btTl.restart();
	});
}

function logoBlurEffect(elem, filter){
	var turbVal = { val: 0.000001 };

	var bt = document.querySelectorAll(elem)[0];
	var turb = document.querySelectorAll(filter+' feTurbulence')[0];
	var btTl = new TimelineLite({ paused: true, onUpdate: function() {
		turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val);
	} });

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	setInterval(function(){
		btTl.restart();
	}, 6000);
}

function avatarBlurEffect(elem, filter){
	var turbVal = { val: 0.000001 };

	var bt = document.querySelectorAll(elem)[0];
	var turb = document.querySelectorAll(filter+' feTurbulence')[0];
	var btTl = new TimelineLite({ paused: true, onUpdate: function() {
		turb.setAttribute('baseFrequency', '0.00001 ' + turbVal.val);
	} });

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	setInterval(function(){
		btTl.restart();
	}, 5000);
}
