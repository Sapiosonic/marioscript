const mario = document.querySelector('.super-mario');
const pipe = document.querySelector('.pipe-game');

//criando uma arrow function para controlar o pulo do Mário
const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() =>{
    mario.classList.remove("jump-mario");
  }, 500);
}

document.addEventListener("keydown", jump);