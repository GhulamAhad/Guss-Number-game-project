let rendomn = Math.trunc(Math.random() * 20) + 1;
console.log(rendomn);
let scoure = 5;
let heigh = 0;
let geter = document.querySelector(".cheakb");
geter.addEventListener("click", function () {
  const guss = Number(document.querySelector(".inputv").value);

  const massege = document.querySelector(".massege");
  let getscoure = document.querySelector(".scoure_count");

  if (!guss) {
    massege.textContent = "You did not enter any number";
  } else if (guss === rendomn) {
    massege.textContent = "You won the game";
    const hiden = document.querySelector(".show");
    hiden.textContent = guss;
    const color = document.querySelector("body");
    color.style.backgroundColor = "green";
    if(scoure>heigh){
      heigh=scoure;
      document.querySelector('.high').textContent=heigh;
    }
  } else if (guss < rendomn) {
    if (scoure > 1) {
      massege.textContent = "You are so smaller than hidden number ";
      scoure--;
      getscoure.textContent = scoure;
    } else {
      massege.textContent = "You lose the game ";
      getscoure.textContent = 0;
    }
  } else if (guss > rendomn) {
    if (scoure > 1) {
      massege.textContent = "You are so higher than hidden number ";
      scoure--;
      getscoure.textContent = scoure;
    } else {
      massege.textContent = "You lose the game ";
      getscoure.textContent = 0;
    }
  }
});

let againPlay = document.querySelector(".butween_again");
againPlay.addEventListener("click", function () {
  scoure = 5;
  rendomn = Math.trunc(Math.random() * 20) + 1;
  console.log(rendomn);
  document.querySelector(".inputv").value = "";
  const massege = document.querySelector(".massege");
  massege.textContent = "Play Again !";
  const color = document.querySelector("body");
  color.style.backgroundColor = "black";
  const hiden = document.querySelector(".show");
  hiden.textContent = "?";
  let getscoure = document.querySelector(".scoure_count");
  getscoure.textContent = scoure;
});
