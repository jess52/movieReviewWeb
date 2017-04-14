<?php
	//Set up connection
	$user = "root";
	$pass = "root"; //$pass = "";
	$url = "localhost";
	$db = "db_movieReview";

	$link = mysqli_connect($url, $user, $pass, $db, "8888"); //Mac
	//$link = mysqli_connect($url, $user, $pass, $db); //PC

	//Check the connection
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
?>