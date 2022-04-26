const container = document.querySelector('.container');


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
    row(16, 16);
    