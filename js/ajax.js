(function(){
	var movieCon = $('.posterCon'),
		movieInfo = $('.movieInfo');
	$(document).ready(function(){
		loadMovies();
		$('.categories').click(function(e){
			e.preventDefault();
			var type = $(this).text().toLowerCase();

			if (type=="all") {
				loadMovies();
			}
			else{
				movieCat(type);
			}
		});

		$('.searchBar').keyup(function(){
			var search = $(this).val();
			if(search != ''){
				searchMovies(search);
			}
		});

		$('.poster-link').click(function(e){
			e.preventDefault();
			var img = $('.poster-link img');
			var title = $(this).find(img).attr('alt');
			console.log(title);
			getSingle(title);
		});

	});


	function loadMovies(){
		$.ajax({
			url:'./script/getMovie.php',
			method:'get',
			datatype:'html',
			success:function(data){	
				movieCon.html(data);
				$('.poster-link').click(function(e){
					e.preventDefault();
					var img = $('.poster-link img');
					var title = $(this).find(img).attr('alt');
					// console.log(title);
					getSingle(title);
				});
			}
		});
	}


	function movieCat(type){
		$.ajax({
			url:'./script/getMovie.php',
			method:'get',
			datatype:'html',
			data:{movieType:type},
			success:function(data){
				movieCon.html(data);
				$('.poster-link').click(function(e){
					e.preventDefault();
					var img = $('.poster-link img');
					var title = $(this).find(img).attr('alt');
					// console.log(title);
					getSingle(title);
				});
			}
		});
	}

	function searchMovies(query){
		$.ajax({
			url:'./script/search.php',
			method:'post',
			data:{query:query},
			datatype:'html',
			success:function(data){
				movieCon.html(data);
				$('.poster-link').click(function(e){
					e.preventDefault();
					var img = $('.poster-link img');
					var title = $(this).find(img).attr('alt');
					// console.log(title);
					getSingle(title);
				});
			}
		});
	}

	function getSingle(title){
		$.ajax({
			url:'./script/getSingle.php',
			method:'get',
			data:{movieTitle:title},
			datatype:'html',
			success:function(data){
				movieInfo.html(data);
			}
		});
	}

})();