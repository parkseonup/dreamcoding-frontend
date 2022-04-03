const target = document.querySelector('.target');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const coordinates = document.querySelector('.coordinates');

window.addEventListener('load', () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  window.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    //target.style.top = `${y}px`;
    //target.style.left = `${x}px`;
    //horizontal.style.top = `${y}px`;
    //vertical.style.left = `${x}px`;
    //coordinates.style.top = `${y}px`;
    //coordinates.style.left = `${x}px`;
    //coordinates.innerText = `${x}px, ${y}px`;

    target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfHeight}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    coordinates.style.transform = `translate(${x}px, ${y}px)`;
    coordinates.innerText = `${x}px, ${y}px`;
  });
})
