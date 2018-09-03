const images = document.querySelectorAll('.img');
const inner = document.querySelector('.inner');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let counter = 0;
let width = 50;

function switching() {
	inner.style.left = -width * counter + 'vw';
}

function showPrev () {
	counter--;
	if (counter < 0) {
		counter = images.length - 1;
	}
	
	switching();
}

function showNext () {
	counter++;
	if (counter >= images.length) {
		counter = 0;
	}
	
	switching();
}

prev.addEventListener('click', showPrev);

next.addEventListener('click', showNext);

switching();

setInterval(showNext, 5000);