






const target = document.querySelectorAll('[data-anime]');
const animationClass = 'trans-animate';

function animeScroll(){

   const windowTop = window.pageYOffset - 1500;
   target.forEach(function(element){
   	if((windowTop) > element.offsetTop){
   		element.classList.add('trans-animate');
   	}


   	console.log(element.offsetTop, element);
   })
}

window.addEventListener('scroll', function() {
	animeScroll();
})



/*console.log(windowTop);*/