<?php
	require_once('connect.php');
	$output = '';

	if(isset($_GET['title'])) {
		$title = $_GET['title'];
		$moviesTl = 'movies_title';
		$tblMovies = 'tbl_movies';
		$tblComment = 'tbl_comment';
		$moviesId = 'movies_id'; 
		$singleQuery = "SELECT * FROM tbl_movies, tbl_comment WHERE {$tblMovies}.{$moviesId} = {$tblComment}.{$moviesId} AND {$tblComment}.{$moviesTl} = '{$title}'";
		$result = mysqli_query($link, $singleQuery);


		if(mysqli_num_rows($result) > 0){
			while($row = mysqli_fetch_array($result)){
				$comContent = $row['cmt_content'];
				$mvID = $row['movies_id'];
				$mvTitle = $row['movies_title'];


				$output .="<img src=\"img/jeff.png\" class=\"userProfile\" alt=\"user profile\">
					<p class=\"speechbbl\"><span>User</span>
					<br>".$row['cmt_content']."</p>
				";
			}

		}else{
			$output .="<p>No Comment for This Movie...</p>";
		}




	}else{
		$output.="<p>Movie not found</p>";
	}

	echo $output;

	mysqli_close($link);
?>