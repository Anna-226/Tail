const burger = (burgerSelector) => {
   headerAdaptive();

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

   function headerAdaptive() {
      const like = document.querySelector('._icon-like'),
            menuList = document.querySelector('.menu__body'),
            iconCart = document.querySelector('._icon-cart');
      if (document.documentElement.clientWidth<=767.98) {
         const likedBlock = document.createElement('div');
         likedBlock.classList.add('likedBlock');
         menuList.prepend(likedBlock);
         likedBlock.appendChild(like);
      } else {
         iconCart.before(like);
      }
   }
   
   window.addEventListener('resize', () => {
      headerAdaptive();
   });
};

export default burger;