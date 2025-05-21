/*
	Minimaxing by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

(function() {
    var searchBar = document.getElementById('product-search-bar');
    var productCols = document.querySelectorAll('.row > .col-3, .row > .col-4, .row > .col-6-medium, .row > .col-12-small');

    searchBar.addEventListener('input', function() {
        var query = searchBar.value.toLowerCase();

        productCols.forEach(function(col) {
            var product = col.querySelector('.product');
            if (!product) return;
            var productName = product.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(query)) {
                col.style.display = '';
            } else {
                col.style.display = 'none';
            }
        });
    });
})();
