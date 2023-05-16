import './home.sass';
import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
  
    const swiper = new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });


const tabs = document.querySelectorAll('.tablink');

if(tabs.length > 0){
  tabs.forEach(tab => {
      const name = (tab.dataset.name);
      tab.addEventListener('click', function (evt) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");

        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementsByClassName(name)[0].style.display = "block";
        evt.currentTarget.className += " active";
    })
  });document.querySelector('.tablink').click();
};

const cards = document.querySelectorAll('.card__pic ');

cards.forEach(card => {
  card.addEventListener('click', (e) => {
    const id = e.target.parentNode.parentNode.id;
    window.location.replace(`bludo.html?id=${id}`);
  });
});

const mainMemu = document.querySelectorAll('.header__nav-link');

mainMemu.forEach(item => {
  item.addEventListener('click', (e) => {
    if(window.location.href === 'index.html' || window.location.hash.length > 0){
      e.preventDefault();
    }
    
    var a = item.href;
    console.log(a.split('#')[1]);
    let hash = `#${a.split('#')[1]}`;
    scroll(hash);
  })
})
const scroll = (hash) => {
  const section = document.querySelector( hash );
  section.scrollIntoView( { behavior: "smooth", block: "center", inline: "start" } );
};



