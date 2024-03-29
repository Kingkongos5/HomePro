
// Header ==============================================

const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const main = document.querySelector('.wrapper');
const wrapper = document.body;
const tabs = document.querySelectorAll('.questions__item');


addEventListener("click", open);

function open(e) {
   if (e.target.closest('.questions__items')) {
      tabs.forEach((item) => {
         if (!e.target.classList.contains('questions__items')) {
            item.classList.remove('active')
         }
      })
      if (e.target.classList.contains('questions__name') || e.target.classList.contains('questions__info')) {
         e.target.parentNode.classList.toggle('active')
      } else {
         e.target.classList.toggle('active')
      }
   }

   if (e.target.closest('.header__burger')) {
      burger.classList.toggle('active');
      nav.classList.toggle('active');
      main.classList.toggle('black')
      wrapper.classList.toggle('lock')
   }

   if (!e.target.closest('.header__nav') && !e.target.closest('.header__burger')) {
      burger.classList.remove('active');
      nav.classList.remove('active');
      main.classList.remove('black')
      wrapper.classList.remove('lock')
   }

}


// =====================================================

window.addEventListener('DOMContentLoaded', function () {
   const categories = document.querySelectorAll('.item-blog__categories');
   const catFor = [];
   categories.forEach((cat) => {
      catFor.push(cat.children);
   });
   catFor.forEach((cat) => {
      if (cat.length >= 3 && cat[2].textContent != '...') {
         var text = cat[2].textContent;
         for (let i = 0; i < categories.length; i++) {
            if (categories[i].offsetHeight > 40) {
               cat[2].textContent = '...'
               cat[2].addEventListener("click", function (e) {
                  e.preventDefault();
                  cat[2].textContent = text;
                  if (cat.length > 3) {
                     for (let i = 3; i < cat.length; i++) {
                        cat[i].classList.remove('hidden')
                     }
                  }
               })
               if (cat.length > 3) {
                  for (let i = 3; i < cat.length; i++) {
                     cat[i].classList.add('hidden')
                  }
               }
            }
         }
      }
   });
});







