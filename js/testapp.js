function confirmPass() {
    const pass = document.getElementById("password").value;
    const confPass = document.getElementById("password-confirm").value;
    if (pass != confPass) {
        alert('Wrong confirm password !');
    }
}

