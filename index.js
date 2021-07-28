const input = document.getElementById('input');
const main = document.getElementById('main');

function addingEventListener() {
function clickAlert() {
  alert('CLICK!');
}
input.addEventListener('click', clickAlert); 
main.addEventListener('click',clickAlert);
}
