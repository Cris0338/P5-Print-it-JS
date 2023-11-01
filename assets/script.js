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
    // prend l'image
    document.querySelector('.banner-img').src = "./assets/images/slideshow/" + slides[currentSlide].image;
    // prend le tagline de l'image
    document.querySelector('#banner p').innerHTML = slides[currentSlide].tagLine;
    
    // prend le containeur des dots
    let dots = document.querySelector('.dots');
    // reset des dots
    dots.innerHTML = '';
    // création du dot inerent à l'image
    for(let i=0; i<slides.length; i++) {
        let dot = document.createElement('span');
        // si le dot correspond a l'image atribution de la classe 'dot_selected'
        dot.className = 'dot' + (i === currentSlide ? ' dot_selected' : '');
        // ajout du dot
        dots.appendChild(dot);
    }
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

// première image (0) au chargement
showSlide();