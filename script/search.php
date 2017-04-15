<?php
	require_once('connect.php');
	$output = '';
	if (isset($_POST['query'])) {
		$query = $_POST['query'];
		$search = mysqli_real_escape_string($link, $query);
		$searchQuery = "SELECT * FROM tbl_movies WHERE movies_title LIKE '$search%' OR movies_year LIKE '$search%' ORDER BY movies_title ASC";
		$result = mysqli_query($link, $searchQuery);

		if(mysqli_num_rows($result) > 0){
			while ($row = mysqli_fetch_array($result)) {
				$output .="<div class=\"col-md-6 col-xs-6\">
					<a href=\"#poster-army\" class=\"poster-link\" data-toggle=\"modal\" data-target=\"#poster-army\">
						<img src=\"img/".$row['movies_thumb']."\" alt=\"".$row['movies_title']."\">
						<h6>".$row['movies_title']."</h6>
						<p>".$row['movies_storyline']."</p>
					</a>
				</div>";
			}
		}
	}else{
		$output.="<p>Movie not found</p>";
	}
	echo $output;
	mysqli_close($link);
?>