let button = document.createElement('button');
let btnText = document.createTextNode('Add Square');
const colorArray = ['red', 'blue', 'green', 'orange', 'teal', 'yellow', 'brown', 'pink'];
button.appendChild(btnText);
document.body.appendChild(button);
let sqrId = 1
let container = document.createElement('div')
container.className = "containter"
document.body.appendChild(container)

button.addEventListener("click", function () {
  let square = document.createElement('div');




  square.className = "square";
  container.appendChild(square);
  square.id = sqrId++
  square.style.background = "black";
  square.style.height = "100px";
  square.style.width = "100px";
  square.style.float = "left";
  square.style.boxSizing = "border-box";
  square.style.color = colorArray

  square.addEventListener("mouseover", function () {

    square.innerHTML = square.id
  })// this helps us display the id value over the squares
  square.addEventListener('mouseout', function () {
    square.innerHTML = ''
  })// this helps the program listen for the mouse to stop hovering over a square
  square.addEventListener('click', function () {
    const randomNum = Math.floor((Math.random() * 7));
    square.style.color = colorArray[randomNum]
  });

  square.addEventListener('dblclick', function () {
    if (square.id % 1 == 0) {
      if (square.nextSibling) {
        container.removeChild(square.nextSibling)

      } else {
        alert('No Square Here!')
      }
      
    }
    if (square.id % 0 == 0) {
      if (square.nextSibling) {
        container.removeChild(square.nextSibling)
      
      } else{
        alert('No Square Here!')
      }

    }
  })
  
});