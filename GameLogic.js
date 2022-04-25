const container = document.querySelector('.container');

//I need to create a function that creates rows and columns. This will involve a loop 
// loops around x number of times (depending on input number) and creates the grid. 

function row(num){
for (let i = 0; i < num; i++){
    const div = document.createElement('div');
    container.appendChild(div);
}
}
/* the above function has created the 16 rows but I now need to create the columns function. 
I belive this means we have to turn each row element at the top into another container div
so that we can populate the columns but im not sure */ 


// function column(num){
//     for (let i = 0; i < num; i++){
//         const div = document.createElement('div');
//         container.appendChild(div);
//     }
//     }
    // column(16);
    row(16);
    