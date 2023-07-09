const search = (searchSelector, searchField, searchButton) => {
   const searchIcon = document.querySelector(searchSelector),
         searchInput = document.querySelector(searchField),
         buttonSearch = document.querySelector(searchButton);

   searchIcon.addEventListener('click', () => {
      searchInput.classList.add('search-active');
   });

   document.addEventListener('click', (e) => {
 
      let target = e.target;
      if (target && !target.closest('.search-form') && target !== searchIcon) {
         searchInput.classList.remove('search-active');
         searchInput.reset();
      }
   });

   document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
         searchInput.classList.remove('search-active');
         searchInput.reset();
      }
   });

   buttonSearch.addEventListener('click', ()=> {
     /*  console.log('1'); */
   });
};
export default search;