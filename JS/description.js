function typeWriterEffect(element, text, speed) {
    let index = 0; // Index pour suivre la position actuelle dans la chaîne de texte
    
    function type() {
      if (index < text.length) { // Vérifie si le texte n'est pas encore entièrement affiché
        // Ajoute le prochain caractère au contenu de l'élément
        element.textContent += text.charAt(index);
        index++;
        // Répète la fonction type après un délai
        setTimeout(type, speed);
      }
    }
    
    type(); // Commence la simulation de l'effet d'écriture
  }

  // Attends que le contenu DOM soit complètement chargé
  document.addEventListener('DOMContentLoaded', () => {
    const descriptionElement = document.querySelector('.description'); // Sélectionne l'élément description
    const textToWrite = descriptionElement.textContent; // Stocke le texte à afficher
    descriptionElement.textContent = ''; // Efface le texte initial pour démarrer l'animation
    typeWriterEffect(descriptionElement, textToWrite, 50); // Démarre l'effet d'écriture avec un délai de 50ms entre chaque lettre
  });