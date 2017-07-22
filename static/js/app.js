vex.defaultOptions.className = 'vex-theme-wireframe';

$(document).ready(() => {
	// Smooth scrolling of the links
	$('a[href*="#"]:not([href="#"])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			let target = $(this.hash);
			target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top,
				}, 1000);
				return false;
			}
		}
	});

	// Thumbnail open modal
	$('.thumbnail .overlay').on('click', function (e) {
		e.preventDefault();
		$elem = $(this).parent();

		const image = $elem.data('image');
		const title = $elem.data('title');
		const subtitle = $elem.data('subtitle');
		const description = $elem.data('description');
		const skills = $elem.data('skills');
		const images = $elem.data('images');
		let url = $elem.data('url');

		if (url && url != '') {
			url = `<label>Url: <a href="${url}" target="_new">${url}</a></label>`;
		}

		const lang_technologies = $elem.data('langtechnologies');
		const lang_description = $elem.data('langdescription');

		vex.open({
			content: ` \
					<div class="portfolio-modal"> \
						<div class="grid"> \
							<div class="col-4-12 image-container"> \
								<img src="${image}" alt="${title}" /> \
								<div class="popup-gallery">
									${images}
								</div>
							</div> \
							<div class="col-8-12"> \
								<div class="info"> \
									 <h1>${title}</h1> \
									 <h2>${subtitle}</h2> \
									 \
									 <label>${lang_technologies}: </label> \
									 ${skills}
									<div style="clear:both;"></div>
									 \
									 ${url}
									 \
									 <label>${lang_description}: </label> \
									 <p>${description}</p> \
									 \
								</div> \
							</div> \
						</div> \
					</div>`,
			afterOpen($vexContent) {
				$vexContent.addClass('animated bounceInDown');

				baguetteBox.run('.popup-gallery');

				return $vexContent.append($vexContent);
			},
			contentCSS: {
				width: '80%',
			},
		});
	});

	// Typeit
	$('.title').typeIt({
		autoStart: false,
	});

	// Eggs
	/* var egg = new Egg("a,m,a,z,i,n,g", function() {
		alert('I know I am. But thank you ^^');
	}).listen();*/

	// Scrollup
	$.scrollUp({
		animation: 'fade',
		scrollText: '&#x25B2;',
	});

	// Baffle
	const b = baffle('.baffle', {
		characters: '█▓▒░█▓▒░█▓▒░<>/',
		speed: 50,
	});

	$('.baffle').appear(() => {
		setTimeout(() => { // the timeout is me trying to async this
			b.reveal(1000);
		}, 0);
	});

	// Scroll animations
	$('.avatar-img').appear(function () {
		$(this).addClass('animated fadeInRight');
	});

	$('.thumbnail').appear(function () {
		$(this).addClass('animated bounceIn');
	});

	// Buttons blur effect
	buttonBlurEffect('.btn-github', '#github-filter');
	buttonBlurEffect('.btn-linkedin', '#linkedin-filter');
	avatarBlurEffect('.avatar-img', '#avatar-filter');
	logoBlurEffect('.logo', '#logo-filter');
});

function buttonBlurEffect(elem, filter) {
	const turbVal = { val: 0.000001 };

	const bt = document.querySelectorAll(elem)[0];
	const turb = document.querySelectorAll(`${filter} feTurbulence`)[0];
	const btTl = new TimelineLite({
		paused: true,
		onUpdate() {
			turb.setAttribute('baseFrequency', `0.00001 ${turbVal.val}`);
		},
	});

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	bt.addEventListener('mouseover', () => {
		btTl.restart();
	});
}

function logoBlurEffect(elem, filter) {
	const turbVal = { val: 0.000001 };

	const bt = document.querySelectorAll(elem)[0];
	const turb = document.querySelectorAll(`${filter} feTurbulence`)[0];
	const btTl = new TimelineLite({
		paused: true,
		onUpdate() {
			turb.setAttribute('baseFrequency', `0.00001 ${turbVal.val}`);
		},
	});

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	setInterval(() => {
		btTl.restart();
	}, 6000);
}

function avatarBlurEffect(elem, filter) {
	const turbVal = { val: 0.000001 };

	const bt = document.querySelectorAll(elem)[0];
	const turb = document.querySelectorAll(`${filter} feTurbulence`)[0];
	const btTl = new TimelineLite({
		paused: true,
		onUpdate() {
			turb.setAttribute('baseFrequency', `0.00001 ${turbVal.val}`);
		},
	});

	btTl.to(turbVal, 0.2, { val: 0.3 });
	btTl.to(turbVal, 0.2, { val: 0.000001 });

	setInterval(() => {
		btTl.restart();
	}, 5000);
}
