const main = document.getElementById('main');
//console.log(main)
main.remove();

const newHeader = document.createElement('h1');
const body = document.querySelector('body');
body.append(newHeader);
newHeader.nodeName = 'H1'
newHeader.id = 'victory'
newHeader.innerHTML = 'ERIC is the champion'







// 1) has a 'newHeader' variable that points to node 'h1#victory'
// 2) has a 'newHeader' variable that points to node 'h1#victory'
// 3) has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside