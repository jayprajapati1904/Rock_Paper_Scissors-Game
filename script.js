let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user_score");
const compscore = document.querySelector("#Comp_score");

const gencopchoice = () => {
  const option = ["rock", "paper", "scissors"];
  const ranidx = Math.floor(Math.random() * 3);
  return option[ranidx];
};

const showwinner = (userwin) => {
  if (userwin) {
    userScore++;
    userscore.innerText = userScore;
    console.log("you win !");
    msg.innerText = "You Win!";
    msg.style.backgroungColor = "green";
  } else {
    compScore++;
    compscore.innerText = compScore;
    console.log("you lose");
    msg.innerText = "You lose";
    msg.style.backgroungColor = "red";
  }
};

const drawgame = () => {
  console.log("the game is  draw ");
  msg.innerText = "The game is draw , please try again !";
  msg.style.backgroungColor = "#081b031";
};

const playgame = (userchoice) => {
  console.log("user choice = ", userchoice);
  const compchoice = gencopchoice();
  console.log("comp choice =", compchoice);

  if (compchoice == userchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showwinner(userwin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
