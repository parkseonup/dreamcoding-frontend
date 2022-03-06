const p = document.querySelector('p');

function sizeWindow() {
  p.innerHTML = `
    window.screen: ${window.screen.width}, ${window.screen.height}<br/>
    window.outer: ${window.outerWidth}, ${window.outerHeight}<br/>
    window.inner: ${window.innerWidth}, ${window.innerHeight}<br/>
    documentElement.client: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}
  `;
}

sizeWindow();
window.addEventListener('resize', sizeWindow);