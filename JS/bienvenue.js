    // Liste des messages à afficher
    var messages = ["Bienvenue !", "Welcome !", "¡ Bienvenidos !","おはよう"];

    // Récupérer l'élément où afficher le texte
    var veilleElement = document.querySelector('.Veille');

    // Fonction pour afficher un message avec un effet d'écriture
    function typeMessage(message, delay) {
        var index = 0;
        var interval = setInterval(function () {
            veilleElement.textContent += message[index++];
            if (index === message.length) {
                clearInterval(interval);
                setTimeout(function () {
                    eraseMessage(message);
                }, delay);
            }
        }, 100);
    }

    // Fonction pour effacer le message avec un effet de suppression
    function eraseMessage(message) {
        var index = message.length - 1;
        var interval = setInterval(function () {
            veilleElement.textContent = veilleElement.textContent.slice(0, index--);
            if (index === -1) {
                clearInterval(interval);
                // Ajouter un caractère invisible à la fin du message pour éviter le bug
                veilleElement.textContent += '\u200B';
                setTimeout(function () {
                    nextMessage();
                }, 500); // Délai avant d'afficher le prochain message
            }
        }, 50);
    }

    // Fonction pour afficher le prochain message
    function nextMessage() {
        var randomIndex = Math.floor(Math.random() * messages.length);
        typeMessage(messages[randomIndex], 1000); // Délai avant d'effacer le message
    }

    // Démarrer le script avec le premier message
    typeMessage(messages[0], 1000); // Délai avant d'effacer le message
