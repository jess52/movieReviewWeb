<?php
	//Set up connection
	$user = "root";
	$pass = "";
	$url = "localhost";
	$db = "db_admin";

	$link = mysqli_connect($url, $user, $pass, $db);

	//Check the connection
	if (mysqli_connect_errno()) {
		printf("Connect failed: %s\n", mysqli_connect_error());
		exit();
	}
?>