
let squares = document.querySelectorAll('.square')
let currentPlayer = "X";



squares.forEach(square => {
     square.addEventListener('click', function(){
     if (square.innerHTML === ""){
            square.innerHTML = currentPlayer;
            currentPlayer = currentPlayer==="X" ?"O" :'X';
            alert('Your code is here')
            updateStatus();
        } 
    });
});

function updateStatus(){
    let status = document.querySelector('.status');
    let winner = checkWinner();
    if(winner){
        status.innerHTML = 'Winner: '+ winner;
    }else if (isTie()){
        status.innerHTML = 'Tie';
    }else{
        status.innerHTML = "Next Player: "+ currentPlayer;
    }
}
function checkWinner(){
    let WinningLines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for (let i=0;i<WinningLines.length; i++){
        let [a,b,c] = WinningLines[i];
        if(squares[a].innerHTML && squares[a].innerHTML === squares[b].innerHTML && squares[a].innerHTML===squares[c].innerHTML){
            return squares[a].innerHTML;
        }
    }
    return null;
}
function isTie(){
    for (let i=0; i<squares.length; i++){
        if (squares[i].innerHTML ===""){
            return false
        }
    }
    return true;
}