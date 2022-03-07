const target = document.querySelector('.target');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  target.style.top = `${y}px`;
  target.style.left = `${x}px`;
  horizontal.style.top = `${y}px`;
  vertical.style.left = `${x}px`;
  coordinates.style.top = `${y}px`;
  coordinates.style.left = `${x}px`;
  coordinates.innerText = `${x}px, ${y}px`;
});
