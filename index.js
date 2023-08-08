const bar = document.querySelector('#bar');
const menu = document.querySelector('#menu');

bar.addEventListener('click', () => {
     if (menu.classList.contains('hidden')) {
          menu.classList.remove('hidden');
     } else {
          menu.classList.add('hidden');
     }
})