<?php
//header('Content-Type: application/json');
$pdo=new PDO("mysql:dbname=baseiot2018;host=localhost","root","");


/*
$hostname_cn = "localhost";
$database_cn = "basededatos";
$username_cn = "root";
$password_cn = "";
$cn = mysql_pconnect($hostname_cn, $username_cn, $password_cn) or trigger_error(mysql_error(),E_USER_ERROR); 
$pdo=mysql_select_db($database_cn,$cn);*/


switch($_GET['q']){
		// Buscar Último Dato
		case 1:
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
			$json=json_encode($results);
			echo $json;
		break; 
		// Buscar Todos los datos
		/*default:
			
			$statement=$pdo->prepare("SELECT humedad,temperatura FROM tblsensores ORDER BY id ASC");
			$statement->execute();
			$results=$statement->fetchAll(PDO::FETCH_ASSOC);
			$json=json_encode($results);
			echo $json;
		break;*/
}
?>