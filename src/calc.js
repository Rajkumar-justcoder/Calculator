const mycalculator = document.querySelector(".mycalc");
const mykeys = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["C", "0", "=", "/"]];
const myoper = ["+", "-", "*", "/"];

let myoutput;

document.addEventListener("DOMContentLoaded", function () {

    myoutput = document.createElement("div");
    myoutput.innerHTML = "0";
    myoutput.classList.add("output");
    mycalculator.appendChild(myoutput)

    for (let y = 0; y < mykeys.length; y++) {
        let div = document.createElement("div");
        div.classList.add("row");
        for (let x = 0; x < mykeys[y].length; x++) {
            // console.log(mykeys[y][x]);

            let btn = document.createElement("div");
            btn.innerHTML = mykeys[y][x];
            btn.classList.add("btn");
            btn.addEventListener("click", btnHit);
            div.appendChild(btn);

        }

        mycalculator.appendChild(div);

        // console.log(div);
    }
    function btnHit(e) {

        // console.log(this.innerText);

        let myval = this.innerText;
        let myCal = myoutput.innerText;
        if (myCal == "0") {
            myCal = "";
        }
        if (myval == "=") {
            myCal = eval(myCal);

        }
        else {
            let lastcharacter = myCal.substring(myCal.length - 1);
            // console.log(lastcharacter);
            if (myoper.includes(myval)) {
                if (myoper.includes(lastcharacter)) {
                    myCal = myCal.substring(0, myCal.length - 1)
                } else {
                    myCal = eval(myCal);
                }
            }


            myCal = myCal + myval;
        }
        if (myval == "C") {
            myCal = 0;
        }

        myoutput.innerText = myCal;

    }

})