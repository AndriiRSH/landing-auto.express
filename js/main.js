$(function(){

  $('.carousel__inner').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 841,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
});

// const anchors = document.querySelectorAll('button [href*='#']');
//
// for(let anchor of anchors){
//   anchor.addEventListener("click", function(event){
//     ev.preventDefalt();
//     const blockID = anchor.getAttribute('href')
//     document.querySelector('' + blockID).scrollIntoView({
//       behavior: "smoth",
//       block: "start"
//     })
//   })
// }

function onClickButton(){
  alert('Заповніть форму нище та наш консультант звяжеться з нами');
}
