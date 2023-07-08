import Swiper, {Pagination, Autoplay} from 'swiper';
import 'swiper/css';

const slider = (sliderSelector) => {
   const swiper = new Swiper(sliderSelector, {
      modules: [Pagination, Autoplay],
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
/*       autoplay: {
         delay: 5000,
      }, */
   });
   const slideName = document.querySelectorAll('.swiper-slide__slide-name'),
         slideDescripton = document.querySelectorAll('.swiper-slide__description'),
         slideButton = document.querySelectorAll('.swiper-slide__button');

   slideName[swiper.activeIndex].classList.add('down-animation');
   slideDescripton[swiper.activeIndex].classList.add('left-animation');
   slideButton[swiper.activeIndex].classList.add('right-animation');

   swiper.on('slideChange', function () {
      slideName.forEach((item, i) => {
         if (swiper.activeIndex === i) {
            slideName[i].classList.add('down-animation');
            slideDescripton[i].classList.add('left-animation');
            slideButton[i].classList.add('right-animation');
         } else {
            slideName[i].classList.remove('down-animation');
            slideDescripton[i].classList.remove('left-animation');
            slideButton[i].classList.remove('right-animation');
         }
      });
   });
};

export default slider;