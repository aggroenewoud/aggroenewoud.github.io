var player = 1;
var isset = {};
var player1 = [];
var player2 = [];
var J = false;
var combo = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"],
    ["1","5","9"],
    ["3","5","7"]
]

function Win (V){
    alert(V);
    location.reload();
}

function check(p) {
    combo.forEach(x => {
        var occurences = [];
        var count = [];
        x.forEach(y => {
            var f = p.indexOf(y);
            if(f == -1){
                occurences.push(false);
            } else {
                occurences.push(true);
            }
        });
        occurences.forEach(t => {
            if(t){
                count.push("Y");
            } 
        });
        if(count.length == 3){
            J = true;
            if(player == 1){
                Win("You win!");
                return
            } else {
                Win("Bot wins!");
                return
            }
        }
    });
    if(J == false){
        if(player == 1){
            player = 2;
            Bot();
        } else {
            player = 1;
        }
    }
}

function Start (test){
    if(player == 1){
        var sym = "X";
    } else {
        var sym = "O";
    }

    if(isset[test]){
        return
    }
    document.getElementById(test).innerHTML = sym;
    isset[test] = true;

    if(player == 1){
        player1.push(test);
        check(player1);
    } else {
        player2.push(test);        
        check(player2);
    }
}