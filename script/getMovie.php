<?php
	require_once('connect.php');
	$tbl = 'tbl_movies';
	
	if(isset($_GET['movieType'])){
		$movieType = $_GET['movieType'];
		$tblCat = 'tbl_cat';
		$tblLink = 'tbl_l_mc';
		$colMId = 'movies_id';
		$colCId = 'cat_id';
		$colCName = 'cat_name';
		$output = '';

		$sql = "SELECT * FROM {$tbl}, {$tblCat}, {$tblLink} WHERE {$tbl}.{$colMId}={$tblLink}.{$colMId} AND {$tblCat}.{$colCId}={$tblLink}.{$colCId} AND {$tblCat}.{$colCName}='{$movieType}' ";
		$result = mysqli_query($link,$sql);

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
		echo $output;
	}else{
		$sql = "SELECT * FROM {$tbl}";
		$output = '';
		$result = mysqli_query($link, $sql);
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
		echo $output;
	}
	
	mysqli_close($link);
?>