/* const animation = () => {
   
   const firstBlock = document.querySelector('.block-category_big'),
         secondBlock = document.querySelector('.block-category_second'),
         thirdBlock = document.querySelector('.block-category_third');

   document.addEventListener('scroll', function() {
      const posTop = firstBlock.getBoundingClientRect().top;
      if (posTop + 400 < window.innerHeight) {
         firstBlock.classList.add('from-left');
         secondBlock.classList.add('from-up');
         thirdBlock.classList.add('from-down');
      }
   });
};

export default animation; */

const animation = (animElement, animTrigger, animationName, animDelay) => {
   
    const elem = document.querySelector(animElement), 
          trigger = document.querySelector(animTrigger);
        /* secondBlock = document.querySelector('.block-category_second'),

         thirdBlock = document.querySelector('.block-category_third'); */

   document.addEventListener('scroll', function() {
      const posTop = trigger.getBoundingClientRect().top;
      if (posTop + animDelay < window.innerHeight) {
         elem.classList.add(animationName);
      }
   });
};

export default animation;

//animation('.block-category_second', 'from-up', 400);
//animation('.block-category_third', 'from-down', 400);
//animation('.special__button', 'from-right', 200);
//animation('.orange', 'from-left', 200);