function Validation_log() {
    let em = document.getElementById('email');
    let ps = document.getElementById('mot_passe');
    if (em.value == "" && ps.value == "") {
        msg_em.innerHTML = "<td>Enter your e-mail</td>";
        msg_pss.innerHTML = "<td>Enter your password</td>";
        setTimeout(function() {
            msg_em.innerHTML = "";
            msg_pss.innerHTML = "";
        }, 2000); 
        return false;
    } else if ((ps.value == "" || ps.value.length < 8) && !(em.value == "")) {
        msg_pss.innerHTML = "<td>Enter your password</td>";
        setTimeout(function() {
            msg_pss.innerHTML = "";
        }, 2000); 
        return false;
    } else if (em.value == "" && !(ps.value == "")) {
        msg_em.innerHTML = "<td>Enter your e-mail</td>";
        setTimeout(function() {
            msg_em.innerHTML = "";
        }, 2000);
        return false;
    }
    return true;
}
