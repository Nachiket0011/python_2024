// let boxs = document.querySelectorAll(".box");
// let restbtn = document.querySelector("#resetbutton");

// let turnO = true;



// // let turnX=true;

// const winpattern = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];


// boxs.forEach((box) => {
//     box.addEventListener("click",() => {
//       console.log("The button is clicked")

//       if(turnO){
//         box.innertext = "O";
//         turnO = false;
//       }
//       else{
//         box.innertext = "X";
//         turnO = true
//       }
//        box.disabled = true

//     })
//     })
     




let boxs = document.querySelectorAll(".box");
let restbtn = document.querySelector("#resetbutton");
let newbtn = document.querySelector("#new-game");
let msgcont = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame =() =>{
    turnO = true;
    enableboxs ();
    msgcont.classList.add("hide");
}
boxs.forEach((box) => {
    box.addEventListener("click",() => {
      console.log("The button is clicked");

      if(turnO){
        box.innerText = "O"; // Changed innertext to innerText
        turnO = false;
      }
      else{
        box.innerText = "X"; // Changed innertext to innerText
        turnO = true;
      }
      box.disabled = true; // Set disabled on the box element

      checkwinner();
    });
});


const showWinner = (winner)=>{
    msg.innerText = `Congratulation the winner is ${winner}`;
    msgcont.classList.remove("hide");

}
const disableboxs =() => {
    for (let box of boxs){
        box.disabled = true
    }
}
const enableboxs =() => {
    for (let box of boxs){
        box.disabled = false;
        box.innerText = ""
    }
}

const checkDraw = () => {
    // If all boxes are filled and no winner is found, it's a draw
    let allFilled = true;
    for (let box of boxs) {
        if (box.innerText === "") {
            allFilled = false;
            break;
        }
    }
    if (allFilled) {
        // No winner found and all boxes are filled
        msg.innerText = "It's a Draw!";
        msgcont.classList.remove("hide");
        disableboxs();
    }
};


const checkwinner = () => {
    for(let pattern of winpattern){
        // console.log(boxs[pattern[0]].innerText,boxs[pattern[1]].innerText,boxs[pattern[2]].innerText)
        let pos1 =boxs[pattern[0]].innerText;
        let pos2 =boxs[pattern[1]].innerText;
        let pos3 =boxs[pattern[2]].innerText;
        
        if(pos1 != ""  &&  pos2 != "" &&  pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1);
                showWinner(pos1)
                disableboxs();
                
            }
        }
        
    };
    checkDraw()
};
newbtn.addEventListener("click",resetgame);
restbtn.addEventListener("click",resetgame);