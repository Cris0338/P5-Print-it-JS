const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// index des slides à 0
let currentSlide = 0;

// Montre l'image
function showSlide() {
    // recherche la balise .banner_img, lui donne une source, lui attribue le tableau et lui indique quoi prendre dans le tableau
    document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[currentSlide].image;
    // recherche la balise .#banner p, lui dit de l'inserer, lui dit d'utiliser celle du slide utilisé
    document.querySelector('#banner p').innerHTML = slides[currentSlide].tagLine;

    // Selection tous les elements avec la classe "dot" et les memorise dans un tableau "dots"
    let dots = document.querySelectorAll('.dot');

    // Repéte sur chaque element du tableau "dots"
    dots.forEach((dot, index) => {
    // Si index est égale à currentSlide, ajoute la classe "dot_selected" : autrement enléve la classe "dot_selected"
    dot.className = 'dot' + (index === currentSlide ? ' dot_selected' : '');
});
}

// prend la fleche de gauche et ajout evenement
document.querySelector('.arrow_left').addEventListener('click', function() {
    // -1 ou dernier si 0
    currentSlide = (currentSlide > 0 ? currentSlide : slides.length) - 1;
    // montre l'img
    showSlide();
});

// prend la fleche de droite et ajout evenement
document.querySelector('.arrow_right').addEventListener('click', function() {
    // +1 ou 0 si dernier
    currentSlide = (currentSlide + 1) % slides.length;
    // montre l'img
    showSlide();
});

// Genére les dot au chargement du DOM
// Selection de l'element avec la classe "dots" et crée la variabile "dotsContainer"
let dotsContainer = document.querySelector('.dots');

// Crée avec la repetion pour chaque slide avec for de 0 à slides.length
for(let i = 0; i < slides.length; i++) {
    // Crée un dot pour chaque "span"
    let dot = document.createElement('span');

    // Crée la classe "dot" de la variable "dot"
    dot.className = 'dot';

    // Ajoute "dot" comme child dans "dotsContainer"
    dotsContainer.appendChild(dot);
}

// première image (0) au chargement
showSlide();