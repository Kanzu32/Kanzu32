var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];
var slide = 0;
var slider = document.getElementsByClassName("image");

function plSlide(){
	slide +=1;
	if (slide >= 3){
		slide = 0;
	}
	slider[0].src = images[slide];
}
function mnSlide(){
	slide -=1;
	if (slide < 0){
		slide = 2;
	}
	slider[0].src = images[slide];
}
function showSlide(n){
	slide = n;
	slider[0].src = images[slide];
}