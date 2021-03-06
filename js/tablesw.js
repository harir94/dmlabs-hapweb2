$(function () {

	var filterList = {

		init: function () {

			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.btn btn-outlined btn-primary'
  		  },
  		  load: {
    		  filter: '.qln' // show app tab on first load
    		}
			});

		}

	};

	// Run the show!
	filterList.init();

});
