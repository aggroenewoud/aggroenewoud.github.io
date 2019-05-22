function Bot() {
    var Numbers = ["1","2","3","4","5","6","7","8","9"];
    var NumberCount = [];

    Numbers.forEach(Q => {
        if(isset[Q]){
            NumberCount.push("Y");
        }
    });

    if(NumberCount.length == 9){
        Win("Tie!");
        return
    }

    var singlecombo = [];
    var doublecombo = [];
    var Checkeddoublecombo = [];

    combo.forEach(x => {
        var occurences = [];
        var count = [];
        x.forEach(y => {
            var f = player1.indexOf(y);
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
        if(count.length == 1){
            singlecombo.push(x);
        } else if (count.length == 2) {
            doublecombo.push(x);
        }
    });
    Check();

    function Check() {
        doublecombo.forEach(O => {
            var Count = [];
            O.forEach(D => {
                if(isset[D]) {
                    Count.push("Y");
                }
            });
            if(Count.length == 2) {
                Checkeddoublecombo.push(O);
            }
        });
        if(Checkeddoublecombo.length == 0){
            singleC();
        } else {
            doubleC();
        }
    }

    function doubleC(){
        Checkeddoublecombo[0].forEach(P => {
            if(isset[P] != true){
                Start(P);
            }
        });
    }

    function singleC(){
        var Z = singlecombo[1];
        Z.forEach(P => {
            if(isset[P]){
                var i = Z.indexOf(P);
                if(i != -1) {
                    Z.splice(i, 1);
                }
            }
        });
        if(isset[Z[0]]){
            Start(Z[1]);
        } else {
            Start(Z[0]);
        }
    }
}