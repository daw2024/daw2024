<?php
//header('Content-Type: application/json');
//$pdo=new PDO("mysql:dbname=baseiot2018;host=localhost","root","");


//function get_persons( $id ) {
	
        //Cambia por los detalles de tu base datos
	/*$dbserver = "localhost";
	$dbuser = "usuario_basededatos";
	$password = "password_basededatos";
	$dbname = "nombre_basededatos";
 
        $database = new mysqli($dbserver, $dbuser, $password, $dbname);

	if($database->connect_errno) {
                die("No se pudo conectar a la base de datos");
	}
*/
	$pdo=new PDO("mysql:dbname=baseiot2018;host=localhost","root","");

	$jsondata = array();
	
	//Sanitize ipnut y preparar query
	
	
	$sqlpp="
					SELECT 
						idtarjeta,
						ta,
						s,
						i,
						p 
					FROM 
						tarjetamonitor
					WHERE fecha=(
							SELECT fecha FROM tarjetamonitor ORDER BY idtarjeta DESC LIMIT 0,1
						    ) AND
					      hora=(
							SELECT hora FROM tarjetamonitor ORDER BY idtarjeta DESC LIMIT 0,1
						    )

					ORDER BY idtarjeta DESC
					LIMIT 0,4
			";

		    $statement=$pdo->prepare($sqlpp);
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);

			//$jsondata["data"]["users"][] = $row;

			header('Content-type: application/json; charset=utf-8');
			//$json=json_encode($results);
			//echo $json;
			echo json_encode($results, JSON_FORCE_OBJECT);
	
			//$database->close();
	


exit();



/*
$hostname_cn = "localhost";
$database_cn = "basededatos";
$username_cn = "root";
$password_cn = "";
$cn = mysql_pconnect($hostname_cn, $username_cn, $password_cn) or trigger_error(mysql_error(),E_USER_ERROR); 
$pdo=mysql_select_db($database_cn,$cn);*/



//}
?>