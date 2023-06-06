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
   animation();
});