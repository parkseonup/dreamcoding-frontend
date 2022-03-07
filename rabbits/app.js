const button = document.querySelector('button');
const rabbit = document.querySelector('.rabbit');

button.addEventListener('click', () => {
  const rabbitX = rabbit.getBoundingClientRect().top;

  rabbit.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
})