/*Toggle pour le menu burger en version responsive; je click sur l icone pour afficher la div contenant mon menu*/
document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.getElementById('burger'); // je recupere l'icone
    var navMobile = document.getElementById('menuMobile');// je recupere ma navbar mobile

    burgerIcon.addEventListener('click', function() {// toggle en click sur l'icone
        navMobile.classList.toggle('show');// rajoute la classe show ou j'ai inclue le css qui me faut pour la version mobile
    });
});

/*******************scroll up button */
let mybutton = document.getElementById("btn-back-to-top");

// à partir de 40px afficher le boutton button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// click pour revenir en haut de la page en changeant le css rappel la fx
mybutton.addEventListener("click", backToTop);
