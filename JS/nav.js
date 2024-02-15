document.addEventListener('DOMContentLoaded', function () {
  // Sélectionner le lien dans la section #section05
  var scrollLink = document.querySelector('#section05 a');

  // Ajouter un écouteur d'événements pour le clic
  scrollLink.addEventListener('click', function (e) {
      // Prévenir le comportement par défaut du lien
      e.preventDefault();

      // Obtenir l'élément cible depuis l'attribut href du lien
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);

      // S'assurer que l'élément cible existe
      if (targetElement) {
          // Utiliser scrollIntoView pour faire défiler jusqu'à l'élément cible
          targetElement.scrollIntoView({
              behavior: 'smooth', // Défilement doux
              block: 'start' // Aligner l'élément cible en haut de la fenêtre
          });
      }
  });
});
