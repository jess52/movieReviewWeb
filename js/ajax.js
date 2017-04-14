(function(){
	var movieCon = $('.posterCon');
	
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
	});


	function loadMovies(){
		$.ajax({
			url:'./script/getMovie.php',
			method:'get',
			datatype:'html',
			success:function(data){	
				movieCon.html(data);
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
			}
		});
	}

	function searchMovies(query){
		$.ajax({
			url:'./script/search.php',
			method:'post',
			datatype:'json',
			data:{query:query},
			success:function(data){
				movieCon.html(data);
			}
		});
	}

})();