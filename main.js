

var cards = document.getElementsByClassName("card");
console.log(cards);

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    $('.card').removeClass('active');
    $(this).addClass('active');
  });
}

/*document.getElementsByClassName('sbutton-left').onclick = sliderLeft;
var left = 0;

function sliderLeft(){
   var bar = document.getElementsByClassName('slide');
   left = left - 1140;
   bar.style.left = left+'px';
}*/


new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 1,
  startIndex: 0,
  draggable: false,
  multipleDrag: false,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());


