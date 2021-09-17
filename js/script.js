const cell1 = document.querySelector('.cell1');
const cell2 = document.querySelector('.cell2');
const cell3 = document.querySelector('.cell3');
const cell4 = document.querySelector('.cell4');
const cell5 = document.querySelector('.cell5');
const cell6 = document.querySelector('.cell6');
const cell7 = document.querySelector('.cell7');
const cell8 = document.querySelector('.cell8');
const cell9 = document.querySelector('.cell9');

const Player = document.querySelector('.color');
const reset = document.querySelector('.reset');

cell1.addEventListener('click', fCell1);
cell2.addEventListener('click', fCell2);
cell3.addEventListener('click', fCell3);
cell4.addEventListener('click', fCell4);
cell5.addEventListener('click', fCell5);
cell6.addEventListener('click', fCell6);
cell7.addEventListener('click', fCell7);
cell8.addEventListener('click', fCell8);
cell9.addEventListener('click', fCell9);

reset.addEventListener('click', fReset);

let player = 1;

function fCell1(){
    if (player % 2 == 0){
        cell1.classList.remove('zero');
        cell1.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell1.classList.remove('cross');
        cell1.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell2(){
    if (player % 2 == 0){
        cell2.classList.remove('zero');
        cell2.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell2.classList.remove('cross');
        cell2.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell3(){
    if (player % 2 == 0){
        cell3.classList.remove('zero');
        cell3.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell3.classList.remove('cross');
        cell3.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell4(){
    if (player % 2 == 0){
        cell4.classList.remove('zero');
        cell4.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell4.classList.remove('cross');
        cell4.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell5(){
    if (player % 2 == 0){
        cell5.classList.remove('zero');
        cell5.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell5.classList.remove('cross');
        cell5.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell6(){
    if (player % 2 == 0){
        cell6.classList.remove('zero');
        cell6.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell6.classList.remove('cross');
        cell6.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell7(){
    if (player % 2 == 0){
        cell7.classList.remove('zero');
        cell7.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell7.classList.remove('cross');
        cell7.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell8(){
    if (player % 2 == 0){
        cell8.classList.remove('zero');
        cell8.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell8.classList.remove('cross');
        cell8.classList.add('zero');
        Player.innerText = 'X';
    }
    player++
};
function fCell9(){
    if (player % 2 == 0){
        cell9.classList.remove('zero');
        cell9.classList.add('cross');
        Player.innerText = 'O';
    }
    if (player % 2 == 1){
        cell9.classList.remove('cross');
        cell9.classList.add('zero');
        Player.innerText = 'O';
    }
    player++
};
function fReset(){
    cell1.classList.remove('zero');
    cell1.classList.remove('cross');
    cell2.classList.remove('zero');
    cell2.classList.remove('cross');
    cell3.classList.remove('zero');
    cell3.classList.remove('cross');
    cell4.classList.remove('zero');
    cell4.classList.remove('cross');
    cell5.classList.remove('zero');
    cell5.classList.remove('cross');
    cell6.classList.remove('zero');
    cell6.classList.remove('cross');
    cell7.classList.remove('zero');
    cell7.classList.remove('cross');
    cell8.classList.remove('zero');
    cell8.classList.remove('cross');
    cell9.classList.remove('zero');
    cell9.classList.remove('cross');

    player = 1;
}