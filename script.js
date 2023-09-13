
const btnroll1 = document.querySelector(".Roll-Now1");
const btnroll2 = document.querySelector(".Roll-Now2");

const resetbtn = document.querySelector(".Reset");


const player01score = document.querySelector(".score-1");
const player02score = document.querySelector(".score-2");
const h1Text = document.querySelector(".h1Text");

const dice1 = document.querySelector(".dice-img");

// btm
const winnerscore=30;
let player1score =0;
let player2score =0;


const setDefaultImage = () => {
    dice1.classList.add("hidden");
    player01score.textContent = 0;
    player02score.textContent = 0;
    player1score = 0;
    player2score = 0;
    h1Text.textContent = "let's go to play";
    h1Text.classList.remove("winner");
    btnroll1.disabled = false;
    btnroll2.disabled = false;
  };



  btnroll1.addEventListener("click", function () {
    dice1.classList.remove("hidden");
    const dice = Math.floor(Math.random() * 6)+1;
    dice1.src = `dice-${dice}.png`;
    let printvalue1 = dice;
    player1score += printvalue1;
    if (player1score >= winnerscore) {
      h1Text.textContent =
        "✨🎉 Congratulations Player 1! 🏆 You're the winner! 💕";
      h1Text.classList.add("winner");
      player01score.textContent = player1score;
  
      btnroll1.disabled = true;
      btnroll2.disabled = true;
    } else {
      player01score.textContent = player1score;
      h1Text.textContent = "player-2 to play";
  
      
      btnroll1.disabled = true;
      btnroll2.disabled = false;
    }
    
  });


  btnroll2.addEventListener("click", function () {
    dice1.classList.remove("hidden");
    const dice = Math.floor(Math.random() * 6)+1;
    dice1.src = `dice-${dice}.png`;
    let printvalue2 = dice;
    player2score += printvalue2;
    if (player2score >= winnerscore) {
      h1Text.textContent =
        "✨🎉 Congratulations Player 2! 🏆 You're the winner! 💕 ";
      h1Text.classList.add("winner");
      player02score.textContent = player2score;
  
      btnroll1.disabled = true;
      btnroll2.disabled = true;
    } else {
      player02score.textContent = player2score;
      h1Text.textContent = "player-1 to play";
  
      
      btnroll1.disabled = false;
      btnroll2.disabled = true;
    }
    
  });

  



  resetbtn.addEventListener("click", setDefaultImage);
  
