let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("reset");
let newgame=document.querySelector(".new-btn");
let msgcontainer=document.querySelector(".w");
let turno=true;
const winingpatter=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [6,4,2],
    [2,5,8],
    [1,4,7],
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){//player 1
            box.innerText="O";
            turno=false;
        }
        else{//player 2
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;

        checkwinner();
    });

});
 const showwinner=(winner)=>{
    
    msgcontainer.classList.remove("hide");
 };
const checkwinner=()=>{
    for(let pattern of winingpatter){
      let pos1= boxes[pattern[0]].innerText;
      let pos2= boxes[pattern[1]].innerText;
      let pos3= boxes[pattern[2]].innerText;
      if (pos1!=""&&pos2!=""&&pos2!=""){
         if(pos1==pos2&&pos2==pos3&&pos1==pos3){
            alert("winner")
            showwinner(pos1);
         }
      }
    }
};

