import '../styles/style.scss';
import burger from './modules/burger';
import search from './modules/search';
import slider from './modules/slider';
import animation from './modules/animation';

window.addEventListener('DOMContentLoaded', () => {
   "use strict";
   burger('.icon-menu');
   search('.icons-header__item_search', '.search-form', '.search-form__button');
   slider('.swiper');
   animation('.block-category_big', '.block-category_big', 'from-left', 400);
   animation('.block-category_second', '.block-category_big', 'from-up', 400);
   animation('.block-category_third', '.block-category_big', 'from-down', 400);
   animation('.special__button', '.orange', 'from-right', 200);
   animation('.orange', '.orange', 'from-left', 200);
});