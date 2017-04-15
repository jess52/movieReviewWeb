<?php
	require_once('connect.php');

	if (isset($_POST['comment']) && isset($_POST['movieName']) && isset($_POST['id'])) {
		$comments = $_POST['comment'];
		// $comment = magic_quotes_gpc($comments);
		$comment = str_replace("'", "\'", htmlspecialchars($comments));
		$movieName = $_POST['movieName'];
		$id = $_POST['id'];

		$sql = "INSERT INTO tbl_comment VALUES (NULL, '{$comment}', '{$id}', '{$movieName}')";
		$result = mysqli_query($link, $sql);


	}

	mysqli_close($link);
?>