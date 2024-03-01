

////////////////////////////////////////////////////////////////////////////////////////////*/
/**Gestion audio pour la page musique */
//changement affichage image on click
// changement d'audio src on click  aussi***/

//tableau des src des 5 musiques (libre de droit prises sur pixabay)
let musiques= ["assets/audio/cinematic-music-sketches-11-cinematic-percussion-sketch-116186.mp3", "assets/audio/happy-days-123082.mp3","assets/audio/lets-dance-126506.mp3","assets/audio/pianos-by-jtwayne-7-174717.mp3","assets/audio/you-hold-my-hand-124164.mp3"]

// let audioPlaying = document.getElementById("audioPlaying")
// console.log(audioPlaying)*

// Retrieve the audio element within the .musiquePlaying div
let audioPlaying = document.querySelector(".musiquePlaying audio");

let images = document.querySelectorAll("img")
console.log(images); // c tout les images à changer/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////::

//je prends les musiques par id de leur div
// pour changer le src de l'audioplaying en fonction de click sur la div 
//Changement de la cover de la musique 
//dans la div de la musique playing
let cover = document.getElementById("coverMusique");
let title = document.getElementById("TitrePlaying");


let musique1 = document.getElementById("musique1");
let musique2 = document.getElementById("musique2");
let musique3 = document.getElementById("musique3");
let musique4 = document.getElementById("musique4");
let musique5 = document.getElementById("musique5");

// console.log(musique1);

// au chargement on a pas encore choisir un titre 
function setDefaultImage() {
    cover.src = "assets/images/girlListeningMusic.jpg";
    title.innerHTML = "Decouvrez nos musiques";
};
setDefaultImage();

musique1.addEventListener("click", function(){
    audioPlaying.src = musiques[0];
    cover.src = "assets/images/cd.jpg";
    title.innerHTML = "Titre 1, Artiste";

})

musique2.addEventListener("click", function(){
    audioPlaying.src = musiques[1];
    cover.src = "assets/images/musicyellow.jpg";
    title.innerHTML = "Titre 2 , Artiste";
})

musique3.addEventListener("click", function(){
    audioPlaying.src = musiques[2];
    cover.src = "assets/images/casettes.jpg";
    title.innerHTML = "Titre 3 , Artiste";
})

musique4.addEventListener("click", function(){
    audioPlaying.src = musiques[3];
    cover.src ="assets/images/guitar.jpg";
    title.innerHTML = "Titre 4 , Artiste";
})

musique5.addEventListener("click", function(){
    audioPlaying.src = musiques[4];
    cover.src ="assets/images/musicyellow.jpg";
    title.innerHTML = "Titre 5, Artiste";
})
