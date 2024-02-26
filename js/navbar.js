/*Toggle pour le menu burger en version responsive; je click sur l icone pour afficher la div contenant mon menu*/
document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.getElementById('burger'); // je recupere l'icone
    var navMobile = document.getElementById('menuMobile');// je recupere ma navbar mobile

    burgerIcon.addEventListener('click', function() {// toggle en click sur l'icone
        navMobile.classList.toggle('show');// rajoute la classe show ou j'ai inclue le css qui me faut pour la version mobile
    });
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////Page: DetailPhoto.html =>Carrousel////////////////////////////////::
/*Tableau d'images */
let images = ['assets/images/city.jpg','assets/images/laMajor.jpg','assets/images/pexels-valentin-antonucci-1275393.jpg','assets/images/podcastimage.jpg']

/*je recupere l'element html*/
let displayCarrousel = document.querySelector('.carrousel');
// console.log(displayCarrousel)

/*Je selection les "button" avec icones fleches pour changer d'image */
let suiv = document.querySelector('.suivant');
let pre = document.querySelector('.precedent');
// console.log(suiv);
// console.log(pre);


/** gerer l'interaction à l'evennement click sur les fleches, et changement d'index */
let count= 0;

function updateImage() {
    displayCarrousel.src = images[count];
}

/* premiere image*/
updateImage();

/** Gérer l'interaction à l'événement click sur les flèches et changement d'index dans le tableau d'images */
suiv.addEventListener('click', function() {
    count = (count + 1) % images.length;
    updateImage();
});

pre.addEventListener('click', function() {
    count = (count - 1 + images.length) % images.length;
    updateImage();
});