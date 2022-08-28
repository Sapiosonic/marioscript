const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

//criando uma arrow function para controlar o pulo do Mário
const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() =>{
    mario.classList.remove("jump-mario");
  }, 500);
}

//para a execução no momento da execução
//com o setInterval criamos um intervalo entre a execução
const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

  if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
  pipe.style.animation = "none";
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = "none";
  mario.styel.bottom = `${marioPosition}px`;

  mario.src = "./img/mario-game-over.png";
  mario.style.width = "75px";
  mario.style.margiLeft = "45px";

  clearInterval(loopGame);

  }

}, 10);

document.addEventListener("keydown", jump);

