(function(){
	var movieCon = $('.posterCon'),
		movieInfo = $('.movieInfo'),
		commentCon = $('.commentCon');

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
				$('.poster-link').click(function(e){
					e.preventDefault();
					var img = $('.poster-link img');
					var title = $(this).find(img).attr('alt');
					// console.log(title);
					getSingle(title);
				});

				$('.submitBtn').click(function(evt){
					//console.log('workings');
					evt.preventDefault();
					var comment = $('.commentArea').val();
					//console.log(comment);
					var movieName = $(this).parents('.mvc').siblings('.movieInfo').find('h6').text();

					var id = $(this).parents('.mvc').siblings('.movieInfo').find('h6').attr('class');
					// console.log(id);

					if (!$('.commentArea').val()){
						console.log('write something');
					}else{
						// console.log('this is comment');
						postComment(comment, movieName, id);
					}

					$('.commentArea').val('');
					// $('.commentArea').scrollTop($('.commentArea').height());
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

				$('.submitBtn').click(function(evt){
					//console.log('workings');
					evt.preventDefault();
					var comment = $('.commentArea').val();
					//console.log(comment);
					var movieName = $(this).parents('.mvc').siblings('.movieInfo').find('h6').text();

					var id = $(this).parents('.mvc').siblings('.movieInfo').find('h6').attr('class');
					// console.log(id);

					if (!$('.commentArea').val()){
						console.log('write something');
					}else{
						// console.log('this is comment');
						postComment(comment, movieName, id);
					}

					$('.commentArea').val('');

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

				$('.submitBtn').click(function(evt){
					//console.log('workings');
					evt.preventDefault();
					var comment = $('.commentArea').val();
					//console.log(comment);
					var movieName = $(this).parents('.mvc').siblings('.movieInfo').find('h6').text();

					var id = $(this).parents('.mvc').siblings('.movieInfo').find('h6').attr('class');
					// console.log(id);

					if (!$('.commentArea').val()){
						console.log('write something');
					}else{
						// console.log('this is comment');
						postComment(comment, movieName, id);
					}

					$('.commentArea').val('');
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

		$.ajax({
			url:'./script/comment.php',
			method:'get',
			data:{title:title},
			success:function(msg){
				commentCon.html(msg);
			}
		});
	}


	function postComment(comment, movieName, id){
		$.ajax({
			url:'./script/postComment.php',
			method:'post',
			data:{comment:comment,
				movieName:movieName,
				id: id},
			success:function(){
				// console.log(comment+movieName+id);
				// $(".commentCon").load('',".commentCon");
				$.ajax({
					url:'./script/comment.php',
					method:'get',
					data:{title:movieName},
					success:function(msg){
					commentCon.html(msg);
					}
				});
			}
		});
	}



})();