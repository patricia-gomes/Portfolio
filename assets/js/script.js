// Menu mobile
var ul = document.querySelector('.menu-mobile');
var imgClose = document.querySelector('.close-img');
var linkHover = document.querySelectorAll('nav ul li a');

// Scroll section
var home = document.querySelector('#home');
var about = document.querySelector('#about');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');


// Abrir e fechar menu mobile

openMenu = () => {
	ul.style.visibility = 'visible';
	imgClose.style.visibility = 'visible';
	imgClose.style.zIndex = '999';
}
closeMenu = () => {
	ul.style.visibility = 'hidden';
	imgClose.style.visibility = 'hidden';
}

// Menu Fixo quando der um stroll

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;//Retorna o numero de pixels do scroll

	//Se o scroll baixar ao numero de 676 fixa o menu no topo
	if(scroll > 676) {
		//Adiciona a classe que faz o menu ser fixo no topo
		document.querySelector('nav').classList.add('menu-fix');

		//Percorre todos os li do menu para manter a cor da fonte branca
		for (var i = 0; i < linkHover.length; ++i) {
		  	var li = linkHover[i];
		  	//Quando passar o mouse acima do link a cor continua branca
		  	li.addEventListener("mouseover", function(event) {
			    event.target.style.color = "#FFF";
			});
		}

	} else {
		//Remove a classe que faz o menu ser fixo no topo
		document.querySelector('nav').classList.remove('menu-fix');
		
		//Percorre todos os li do menu para controlar a cor da fonte
		for (var i = 0; i < linkHover.length; ++i) {
		  	var li = linkHover[i];

		  	//Quando passar o mouse acima do link altera a cor para azul
		  	li.addEventListener('mouseover', function(event) {
			    event.target.style.color = "#11C3FB";
			});
			
			//Quando retirar o mouse de cima do link volta a cor branca padrao
			li.addEventListener('mouseout', function(event) {
			    event.target.style.color = "#FFF";
			});
		}
	}
});

// Scroll section
scrollTop = (element) => {
	//Move o elemento dentro da pagina
	document.querySelector(element).scrollIntoView({ behavior: 'smooth' });
}
about.addEventListener('click', function(event) {

	scrollTop('#about');
});
projects.addEventListener('click', function(event) {

	scrollTop('#projects');
});
contact.addEventListener('click', function(event) {

	scrollTop('#contact');
});