window.addEventListener('load', start);

function start() {
  var r = document.querySelector('#range-red').value;
  var g = document.querySelector('#range-green').value;
  var b = document.querySelector('#range-blue').value;
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';

  document.querySelector('.column-square').style.background = rgb;

  document.querySelector('#range-red-value').setAttribute('value', r);
  document.querySelector('#range-green-value').setAttribute('value', g);
  document.querySelector('#range-blue-value').setAttribute('value', b);
};

document.querySelector('#range-red').addEventListener('input', start);
document.querySelector('#range-green').addEventListener('input', start);
document.querySelector('#range-blue').addEventListener('input', start);