<html>
<head>
</head>
<body>
    <?php
    $servername = "localhost";
    $username = "root"; // Replace with your MySQL username
    $password = ""; // Replace with your MySQL password
    $database = "Base_client";




    $conn = mysqli_connect($servername, $username, $password, $database);   
    //$conn=mysali_connect('localhost','root','','Base_client');
    if(!$conn){
        echo("echec de la connexion à la base de donnes !");
    }
    $email=$_POST['email'];
    $pass=$_POST['password'];

    $rech=mysqli_query($conn,"SELECT * FROM Client WHERE Mail_clt='$email' AND MOT_clt='$pass'");

    if(mysqli_num_rows($rech) > 0){ // donnes du Client existe dans Base_Client
        $clt_info=mysqli_fetch_assoc($rech);

        session_start();

        $_SESSION['id']=$clt_info['Id_clt'];
        $_SESSION['nom']=$clt_info['No_clt'];
        $_SESSION['prenom']=$clt_info['Pno_clt'];

        echo("authentification réussie!");
        echo(" vous pouvez maintenant effectuer des commandes ");
        echo("<a href='index.html'> Allez à la page d'accueil </a>");




    }else{ // données du Client n'est exist pas
        echo("E-mail et/ou mot de passe erroné !");
        echo("<a href='login.html'> retour à la page login </a>");
    }


    ?>
</body>
</html>