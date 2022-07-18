const cylinderLayout = document.getElementById("cylinder-layout");
const shape = document.querySelector(".shape");
const constrain = 5;
const perspective = 800;

function transform(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - box.height / 2) / constrain;
  let calcY = (x - box.x - box.width / 2) / constrain;

  return `perspective(${perspective}px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
}

function transformEl(el, xyEl) {
  el.style.transform = transform.apply(null, xyEl);
}

cylinderLayout.onmousemove = (e) => {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([shape]);

  window.requestAnimationFrame(function () {
    transformEl(shape, position);
  });
};
