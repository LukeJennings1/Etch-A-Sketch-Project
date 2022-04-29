const button16 = document.querySelector('.smol'); 
const button24 = document.querySelector('.med'); 
const button64 = document.querySelector('.large'); 
const button = document.querySelector('.reset');
const container = document.querySelector('.container');

// let randomColor = Math.floor(Math.random()*);

function row(num, columns){
for (let i = 0; i < num; i++){
    const div = document.createElement('div');
    container.appendChild(div);

for (let i = 0; i < columns; i++){
    const div2 = document.createElement('div2');
    div.appendChild(div2);
}
}
}

hover(row(16, 16))
button16.addEventListener('click', () => {
    clearGrid();
    hover(row(16, 16))
});
button24.addEventListener('click', () => {
    clearGrid();
    hover(row(24, 24))
});
button64.addEventListener('click', () => {
    clearGrid();
    hover(row(64, 64))
});

function hover() {
const wrapper2 = container.querySelectorAll('div2');

wrapper2.forEach(wrapper2 => wrapper2.addEventListener('mouseenter', () => {
    const hash = '#';
    let randomColor = Math.floor(Math.random()*16777215).toString(16); 
    wrapper2.style.backgroundColor = hash + randomColor;
}));

wrapper2.forEach(wrapper2 => button.addEventListener("click", () => {
    wrapper2.style.backgroundColor = 'white';
}));
}
function clearGrid() {          /* innerHTML is all the html elements including all spacing etc inside html tags*/
container.innerHTML = null       // IE everything inside div tags etc (so everything in our container)//
  }                            // by setting it to null we are resetting all innerHTML elements to nothing
                              // hence it resets everything in the container (hence container.innerHTML)
                            // back to its original uncalled state. 

