let prevScrollPos = window.scrollY;
const navbar = document.querySelector('.navbar');

window.onscroll = function() {
  const currentScrollPos = window.scrollY;
  
  if (currentScrollPos > 150) {
    navbar.classList.add('navbar-hidden');
  } else {
    navbar.classList.remove('navbar-hidden');
  }

  prevScrollPos = currentScrollPos;
};



document.querySelector('#sliderNav').addEventListener('click',function(event){
    document.querySelector('#zero').classList.remove('active');
    document.querySelector('#one').classList.remove('active');
    document.querySelector('#two').classList.remove('active');
    document.querySelector('#three').classList.remove('active');
   document.querySelector("#"+event.delegateTarget.id).classList.add('active');
});


// var carouselWidth = document.querySelector('.venues #venue-car .carousel-inner').scrollWidth;
// var cardWidth = document.querySelector('.venues #venue-car .carousel-inner .carousel-itme').width();
// var scrollPosition = 0;
// document.querySelector('.venues #venue-car .carousel-control-next').addEventListener('click',function(){
//    if(scrollPosition < (carouselWidth - (cardWidth*4))){
//     scrollPosition = scrollPosition + cardWidth;
//     document.querySelector('.venues #venue-car .carousel-inner').animate({scrollleft : scrollPosition},600);
//    }
   
    
// });
