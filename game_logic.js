
var cnt = 0;

var state = [ 
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8] 
]


var played = new Array(9);
var gameOver = false;

function check(){
    for(let i = 0; i < state.length; i++){
        var firstCell = played[ state[i][0] ]; 
        if(firstCell){

            var ok = true;
            for(let j = 1; j < 3; j++){
                if(firstCell !== played[ state[i][j] ]) ok = false; 
            }
            
            if(ok){
                return true;
            }
        }
    }
    return false;
}


function clickButton(){
    for(var i = 0; i < 9; i++){
        document.getElementById(i).innerHTML = null;
        played[i] = null;
        gameOver = false;
        document.getElementById("heading").innerHTML = "Cờ Ca Rô";
    }
    
}


function clickcell(thisId){
    if(gameOver === true) return; 
    if(played[thisId]) return;
    cnt++;
    var Name = 'X';
    if(cnt % 2 == 0) Name = 'O';
    played[thisId] = (cnt%2 + 1);
    document.getElementById(thisId).innerHTML = Name;

    if(check()){     
        Name  = Name + " won!";
        document.getElementById("heading").innerHTML = Name;
        gameOver = true;
        return;
    }
}