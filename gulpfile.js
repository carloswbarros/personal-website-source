process.env.DISABLE_NOTIFIER = true;

var elixir = require('laravel-elixir');

elixir.config.assetsPath = 'static/';
elixir.config.publicPath = 'static/';


elixir(function(mix) {

	mix.sass('app/app.scss');

	mix.styles([
		'./static/vendor/vex/css/vex.css',
		//'./static/vendor/vex/css/vex-theme-plain.css',
		'./static/vendor/vex/css/vex-theme-wireframe.css',
		'./static/vendor/animate.css/animate.min.css',
		'./static/css/app.css'
	]);

	mix.scripts([
		'./static/vendor/jquery/dist/jquery.min.js',
		'./static/vendor/vex/js/vex.combined.min.js',
		//'./static/vendor/egg.js/egg.min.js',
		'./static/vendor/scrollup/dist/jquery.scrollUp.min.js',
		'./static/vendor/particles.js/particles.min.js',
		'particles.js',
		'TweenMax.min.js',
		'jquery.appear.js',
		'./node_modules/typeit/dist/typeit.min.js',
		'./node_modules/baffle/dist/baffle.min.js',
		'app.js'
	]);

});
