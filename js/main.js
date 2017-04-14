(function(){
	$(document).ready(function(){
		$('.nav li').on('click', function(){
		    $('.nav li').removeClass('active');
		    $(this).addClass('active');
		});

		$('.search').click(function(){
			$('.searchBar').removeClass('hidden');
		});

		$(document).click(function(e) {
			var target = e.target;

			if (!$(target).is('.searchBar') && !$(target).is('.search')) {
				$('.searchBar').addClass('hidden').val("");
			}
		});

	});

})();