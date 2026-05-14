document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;
    const nom = document.getElementById('nom').value;

    // Vérification de sécurité
    if (password !== confirm) {
        alert("Les mots de passe ne correspondent pas !");
        return;
    }

    // Ici tu pourrais envoyer les données à ta base de données MySQL
    console.log("Inscription en cours pour :", nom);
    
    alert("Compte créé avec succès ! Redirection vers la connexion...");
    window.location.href = "login.html"; 
});