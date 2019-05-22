var player = 1;
var isset = {};
var player1 = [];
var player2 = [];
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

function Win (){
    alert("you win");
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
            Win();
            return
        }
    });
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
        player = 2;
        check(player1);
    } else {
        player = 1;
        player2.push(test);
        check(player2);
    }

}