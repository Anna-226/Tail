const burger = (burgerSelector) => {
   const burgerBtn = document.querySelector(burgerSelector),
         header = document.querySelector('header'),
         body = document. querySelector('body');

   burgerBtn.addEventListener('click', () => {
      header.classList.toggle('menu-open');
      body.classList.toggle('locked');
   });
   document.addEventListener('click', (e) => {
     let target = e.target;
      if (target && target.classList.contains('header__menu') || target && target.classList.contains('menu__link')) {
         header.classList.remove('menu-open');
         body.classList.remove('locked');
      }
   });
   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         header.classList.remove('menu-open');
         body.classList.remove('locked');
      }
   });
};

export default burger;