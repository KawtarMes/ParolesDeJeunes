/*Toggle pour le menu burger en version responsive; je click sur l icone pour afficher la div contenant mon menu*/
document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.getElementById('burger'); // je recupere l'icone
    var navMobile = document.getElementById('menuMobile');// je recupere ma navbar mobile

    burgerIcon.addEventListener('click', function() {// toggle en click sur l'icone
        navMobile.classList.toggle('show');// rajoute la classe show ou j'ai inclue le css qui me faut pour la version mobile
    });
});


