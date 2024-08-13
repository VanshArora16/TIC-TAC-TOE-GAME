let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#message");
let msgCon = document.querySelector(".msg-container");
function randomStart(){
        if(Math.random() < 0.5){
                return true;
        }else{
                return false;
        }
}

let turnO = randomStart();
let turnC =turnO;
const winPatterns = new Array();
winPatterns.push(
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
);

const disabledBoxes = ()=>{
        boxes.forEach((box)=> box.disabled = true);
}
const enableBoxes = ()=>{
        boxes.forEach((box)=> box.disabled = false);
}
const showWinner = (winner) =>{
        msgCon.classList.remove("hide");
        msg.innerText =`congratulations, winner is ${winner}`;
        disabledBoxes();

}
const checkWinner = () => {
        winPatterns.forEach((pat) => {
                
                let position1 =boxes[pat[0]].innerText;
                let position2=boxes[pat[1]].innerText;
                let position3 =boxes[pat[2]].innerText;
                if (position1 && position2 && position3 !== ""){
                        if (position1 === position2 && position2 === position3){
                                showWinner(position1);
                        } 
                }
        });
};

boxes.forEach(function (box) {
        box.addEventListener("click", function () {
                turnO == true ? (this.innerText = "X") : (this.innerText = "O");
                turnO = !turnO;
                this.disabled = true;

                checkWinner();
        });
});


const resetGame = ()=>{
        turnO = turnC;
        boxes.forEach((box) => (box.innerText = ""));
        enableBoxes();
        msgCon.classList.add("hide");
}

const newGame = ()=>{
        turnO = randomStart();
        boxes.forEach((box) => (box.innerText = ""));
        enableBoxes();
        msgCon.classList.add("hide");
}

resetBtn.addEventListener("click" , resetGame);

newBtn.addEventListener("click" , newGame);