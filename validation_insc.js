function Validation_Infos(){
    var nam=document.getElementById('nom');
    var prenom=document.getElementById('prenom');
    var emi=document.getElementById('mail');
    var adr=document.getElementById('adresse');
    var age=document.getElementById('age');
    var numtel=document.getElementById('Tel');
    var passworde=document.getElementById('mot_passe');
    var confpassword=document.getElementById('conf_mot_passe');
    var wilaya=document.getElementById('Wilaya');
    var sexe=document.getElementsByName('sexe');
    var confsexe;
    for(i=0;i<sexe.length;i++){
        if(sexe[i].checked) confsexe=sexe[i].value; 
    }
    if(nam.value==""){
        msg_nom.innerHTML="<td>Enter your name*</td>";
        setTimeout(function() {
            msg_nom.innerHTML = "";
        }, 2000); 
        return false;
    }
    if(prenom.value==""){
        msg_prenom.innerHTML="<td>Enter your last name*</td>";
        setTimeout(function() {
            msg_prenom.innerHTML = "";
        }, 2000); 
        return false;
    }
    if(age.value==""){
        msg_age.innerHTML="<td>Enter your age*</td>";
        setTimeout(function() {
            msg_age.innerHTML = "";
        }, 2000); 
        return false;
    } else if(age.value<17 || age.value>100){
        msg_age.innerHTML="<td>you need to be between 18yo and 100yo to continue*</td>";
        setTimeout(function() {
            msg_age.innerHTML = "";
        }, 2000); 
        return false;
    }
    if (numtel.value.length != 9 && numtel.value.length != 10) {
        msg_Tel.innerHTML="<td>phone number invalide*</td>";
        setTimeout(function() {
            msg_Tel.innerHTML = "";
        }, 2000); 
        return false;
    }
    if(emi.value==""){
        msg_mail.innerHTML="<td>Enter your e-mail*</td>";
        setTimeout(function() {
            msg_mail.innerHTML = "";
        }, 2000); 
        return false;
    }
    if(adr.value==""){
        msg_adresse.innerHTML="<td>Enter your adresse*</td>";
        setTimeout(function() {
            msg_adresse.innerHTML = "";
        }, 2000); 
        return false;
    }
    if (passworde.value =='' || confpassword.value == '') {
        msg_mot_passe.innerHTML="<td>password looks empty*</td>";
        msg_conf_mot_passe.innerHTML="<td>password looks empty*</td>";
        setTimeout(function() {
            msg_mot_passe.innerHTML = "";
            msg_conf_mot_passe.innerHTML = "";
        }, 2000); 
        return false;
    }
    if (passworde.value.length < 8 || confpassword.value.length < 8) {
        msg_mot_passe.innerHTML="<td>password needs to be at least 8 characters*</td>";
        msg_conf_mot_passe.innerHTML="<td>password needs to be at least 8 characters*</td>";
        setTimeout(function() {
            msg_mot_passe.innerHTML = "";
            msg_conf_mot_passe.innerHTML = "";
        }, 2000); 
    return false;
    }
    if (passworde.value !== confpassword.value) {
        msg_conf_mot_passe.innerHTML="<td>Wrong password*</td>";
        setTimeout(function() {
            msg_conf_mot_passe.innerHTML = "";
        }, 2000); 
    return false;
    }
    var r = confirm("The wilaya you selected is "+ wilaya.value +" \nThe sexe you selected is "+ confsexe +"\nDo you want to confirm your choice ");
    if (r == true) {
        return true;
    } else {
        return false;
    }

}