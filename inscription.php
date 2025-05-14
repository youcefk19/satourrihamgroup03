 
    <?php
    
    $servername = "localhost";
    $username = "root"; 
    $password = ""; 
    $database = "Base_client";


    $conn = mysqli_connect($servername, $username, $password, $database);
    
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $age = $_POST['age'];
    $wilaya = $_POST['state'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $adr = $_POST['address'];
    $mot_passe = $_POST['password'];
    $sexe = $_POST['sex'];


    $ajout = mysqli_query($conn,"INSERT INTO Client ( No_Clt , Pno_clt , Age_Clt , Wi_Clt , Tel_Clt , Mail_Clt , Adr_Clt , Mot_Clt , Sexe_Clt) 
                            VALUES ('$nom','$prenom','$age','$wilaya','$tel','$email','$adr','$mot_passe','$sexe')");
    
    
    if($ajout == true){
        echo("Client enregistré avec succès !");
    }else{
        echo("Erreur d'enregistrement !");
    }
    mysqli_close($conn);
    ?>





















</body>
</html>