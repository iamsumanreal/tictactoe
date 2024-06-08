const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const cell0 = document.getElementById('cell0');
const cell1 = document.getElementById('cell1');
const cell2 = document.getElementById('cell2');
const cell3 = document.getElementById('cell3');
const cell4 = document.getElementById('cell4');
const cell5 = document.getElementById('cell5');
const cell6 = document.getElementById('cell6');
const cell7 = document.getElementById('cell7');
const cell8 = document.getElementById('cell8');
let currentPlayer = 'X';
const winningConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

cells.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true });
});

function handleClick(event) {
    const cell = event.target;
    cell.textContent = currentPlayer;
    const cellIndex = Array.from(cells).indexOf(cell);
    if(checkwin(currentPlayer)){
        alert(`${currentPlayer} Won`);
        Button();
    }
    else if(isDraw()){
        alert("It Is A Draw!");
        Button();
    }
    switchPlayer();
    
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

}
function checkwin(){
    return winningConditions.some(condition => {
        return condition.every(index=>{ return cells[index].textContent===currentPlayer;
    });
});
}
  
function isDraw(){
    return Array.from(cells).every(cell =>{
        return cell.textContent === 'X'||cell.textContent === 'O'
    });
}

function Button(){
    const button = document.createElement('button');
    button.textContent ='Refresh';
    button.id='mybutton';
    button.addEventListener('click',()=>{
        window.location.reload();
    });

    const container =document.getElementById('button-container');
    container.appendChild(button);
}