function resizeCanvas() {
  var canvas = document.getElementById('viewport');
  var parent = canvas.parentElement;
  canvas.width = parent.offsetWidth;
  canvas.height = parent.offsetWidth;
}

window.addEventListener('load', resizeCanvas);