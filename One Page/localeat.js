const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    // récupérer les valeurs des champs du formulaire
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('number').value;
    const message = document.getElementById('message').value;
    // validation des champs
    if (!nom || !email || !telephone || !message) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    } else {
        alert('Merci pour votre demande. Nous vous contacterons sous peu !');
        form.submit()
    }

    // envoyer les données du formulaire au serveur
    // code ici pour envoyer les données au serveur

    // afficher le message de confirmation


    // réinitialiser le formulaire

});
form.reset();