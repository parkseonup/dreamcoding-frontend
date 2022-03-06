const select = document.querySelector('.select');

select.addEventListener('click', (event) => {
  console.log(event.target.getBoundingClientRect());
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
});

const by = document.querySelector('.scroll-by');
const to = document.querySelector('.scroll-to');
const into = document.querySelector('.scroll-into');

by.addEventListener('click', () => {
  window.scrollBy({
    top: 100,
    left: 0,
    behavior: 'smooth'
  });
});

to.addEventListener('click', () => {
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: 'smooth'
  });
})

into.addEventListener('click', () => {
  window.scrollTo({
    top: select.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
})