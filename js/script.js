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
const winner = document.querySelector('.winner');
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

works = true;

let player = 1;
let winList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
]; 
playListO = [];
playListX = [];

function choosing(X, Y){ 
    for(let num1 of winList){
        let count = 0;
        for(let num2 of num1){
            for(let elem of X){
                if(elem === num2){
                    count++;
                };
            };
        };
        if(count >= 3){
            winner.innerHTML = `<span class="color">O</span> wins`;
            works = false;
            break;
        }
    };
    for(let num1 of winList){
        let count = 0;
        for(let num2 of num1){
            for(let elem of Y){
                if(elem === num2){
                    count++;
                };
            };
        };
        if(count >= 3){
            winner.innerHTML = `<span class="color">X</span> wins`;
            works = false;
            break;
        }
    };
};

function fCell1(){
    if (!cell1.classList.contains('zero') && !cell1.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell1.classList.remove('zero');
            cell1.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(1);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell1.classList.remove('cross');
            cell1.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(1);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell2(){
    if (!cell2.classList.contains('zero') && !cell2.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell2.classList.remove('zero');
            cell2.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(2);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell2.classList.remove('cross');
            cell2.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(2);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell3(){
    if (!cell3.classList.contains('zero') && !cell3.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell3.classList.remove('zero');
            cell3.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(3);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell3.classList.remove('cross');
            cell3.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(3);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell4(){
    if (!cell4.classList.contains('zero') && !cell4.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell4.classList.remove('zero');
            cell4.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(4);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell4.classList.remove('cross');
            cell4.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(4);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell5(){
    if (!cell5.classList.contains('zero') && !cell5.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell5.classList.remove('zero');
            cell5.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(5);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell5.classList.remove('cross');
            cell5.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(5);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell6(){
    if (!cell6.classList.contains('zero') && !cell6.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell6.classList.remove('zero');
            cell6.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(6);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell6.classList.remove('cross');
            cell6.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(6);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell7(){
    if (!cell7.classList.contains('zero') && !cell7.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell7.classList.remove('zero');
            cell7.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(7);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell7.classList.remove('cross');
            cell7.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(7);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell8(){
    if(!cell8.classList.contains('zero') && !cell8.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell8.classList.remove('zero');
            cell8.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(8);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell8.classList.remove('cross');
            cell8.classList.add('zero');
            Player.innerText = 'X';
            playListO.push(8);
            choosing(playListO, playListX);
        }
        player++
    }
};
function fCell9(){
    if (!cell9.classList.contains('zero') && !cell9.classList.contains('cross') && works){
        if (player % 2 == 0){
            cell9.classList.remove('zero');
            cell9.classList.add('cross');
            Player.innerText = 'O';
            playListX.push(9);
            choosing(playListO, playListX);
        }
        if (player % 2 == 1){
            cell9.classList.remove('cross');
            cell9.classList.add('zero');
            Player.innerText = 'O';
            playListO.push(9);
            choosing(playListO, playListX);
        }
        player++
    }
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

    playListO = [];
    playListX = [];
    winner.textContent = '';
    works = true;

    player = 1;
    Player.innerText = 'O';
}