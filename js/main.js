

var cards = document.getElementsByClassName("card");
console.log(cards);

for (var i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
    $('.card').removeClass('active');
    $(this).addClass('active');
  });
}


const mySiema = new Siema({
  selector: '.slider',
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

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());


