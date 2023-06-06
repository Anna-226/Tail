const animation = () => {
   
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

export default animation;
