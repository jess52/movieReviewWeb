<?php
	require_once('connect.php');
	$output = '';

	if(isset($_GET['movieTitle'])) {
		$movieTitle = $_GET['movieTitle'];
		$singleQuery = "SELECT * FROM tbl_movies WHERE movies_title = '{$movieTitle}'";
		$result = mysqli_query($link, $singleQuery);


		if($row = mysqli_fetch_array($result)){
			$output .= "
				<div class=\"embed-responsive embed-responsive-16by9\">
					<iframe class=\"embed-responsive-item\" src=\"".$row['movies_trailer']."\" frameborder=\"0\" allowfullscreen></iframe>
				</div>
				<h6 class=\"".$row['movies_id']."\">".$row['movies_title']."</h6>
				<p>".$row['movies_runtime']."</p>
				<p class=\"desc\">".$row['movies_storyline']."</p>
			";
		}

	}else{
		$output.="<p>Movie not found</p>";
	}

	echo $output;

	mysqli_close($link);
?>