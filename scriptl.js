// 1. Sélection des éléments
const loginForm = document.querySelector('.card');
const inputs = document.querySelectorAll('.input-box input');
const submitBtn = document.querySelector('button');

// 2. Gestion de la soumission du formulaire
loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    const username = inputs[0].value;
    const password = inputs[1].value;

    if (username && password) {
        // Simulation d'une connexion réussie
        submitBtn.innerText = "Connecting...";
        submitBtn.style.filter = "hue-rotate(45deg)"; // Petit effet visuel au clic
        
        console.log("Tentative de connexion pour :", username);
        
        // Ici, tu pourrais ajouter une redirection ou un appel API
        setTimeout(() => {
            alert(`Bienvenue, ${username} !`);
            submitBtn.innerText = "Sign In";
            submitBtn.style.filter = "none";
        }, 1500);
    }
});

// 3. Effets interactifs sur les inputs
inputs.forEach(input => {
    // Quand l'utilisateur clique dans un champ
    input.addEventListener('focus', () => {
        // On peut accélérer l'animation du cercle au focus
        document.querySelector('.circle').style.setProperty('--speed', '1s');
    });

    // Quand l'utilisateur quitte le champ
    input.addEventListener('blur', () => {
        document.querySelector('.circle').style.setProperty('--speed', '2.5s');
    });
});