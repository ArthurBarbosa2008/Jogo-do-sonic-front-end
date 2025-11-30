const sonic = document.querySelector('.sonic');
const cacto = document.querySelector('.cacto');
const mario = document.querySelector('.mario');
const pássaro = document.querySelector('.pássaro');
const gameOver = document.querySelector('.game-over');

audioJump = new Audio('../sonic/sonic-jump-sound-effect.mp3');

const pulo = () => {
    
    sonic.classList.add('pulo')
    sonic.src = "../sonic/SONIC-JUMP.gif";
    sonic.style.width = '110px'

    setTimeout(() => {
        
        sonic.classList.remove('pulo');
        sonic.src = "../sonic/SONIC-RUN.gif";
        sonic.style.width = '100px'
    }, 400);
}



const ob0 =
    setInterval(() => {
    const cactoPosition = cacto.offsetLeft
    const sonicPosition = window.getComputedStyle(sonic)
    .bottom.replace('px', '');
    

    if (cactoPosition <= 70 && cactoPosition > 0 && sonicPosition < 35) {
    
    cacto.classList.remove('.cacto-animation');
    cacto.style.left = `${cactoPosition}px`;
    
    sonic.classList.remove('.pulo')
    sonic.style.bottom = `${sonicPosition}px`;
    sonic.src= "../sonic/SONIC-DIE.png"

    gameOver.style.display = 'flex'
    remove(pulo);
    clearInterval(ob0)
    
    }
}, 10)

const ob1 = setInterval(() => {

    const marioPosition = mario.offsetLeft 
    const cactoPosition = cacto.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    const gameOver = document.querySelector('.game-over')
    
    console.log(sonicPosition);

    if (cactoPosition <= 70 && cactoPosition > 0 && sonicPosition < 35) {

    cacto.style.animation = 'none';
    cacto.style.left = `${cactoPosition}px`;
    
    mario.style.animation = 'none';
    mario.style.left = `${marioPosition}px`;
    
    sonic.classList.remove('.pulo')
    sonic.style.bottom = `${sonicPosition}px`;
    sonic.src= "../sonic/SONIC-DIE.png"
    gameOver.style.display = 'flex'
    remove(pulo); 
    clearInterval(ob1)
    
    } 
}, 10) ; 

const ob2 = setInterval(() => {

    const cactoPosition = cacto.offsetLeft
    const marioPosition = mario.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
    
    console.log(sonicPosition);

    if (marioPosition <= 63 && marioPosition > 0 && sonicPosition < 35) {

    mario.style.animation = 'none';
    mario.style.left = `${marioPosition}px`;
    
    cacto.style.animation = 'none';
    cacto.style.left = `${cactoPosition}px`;

    sonic.style.animation = 'none';
    sonic.style.bottom = `${sonicPosition}px`;
    sonic.src= "../sonic/SONIC-DIE.png"
    gameOver.style.display = 'flex'
    remove(pulo);
    clearInterval(ob2)
    
    }
}, 10);

const ob3 = setInterval(() => {

  const cactoPosition = cacto.offsetLeft
  const pássaroPosition = pássaro.offsetLeft
  const marioPosition = mario.offsetLeft
  const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
  
  console.log(sonicPosition);

  if ((pássaroPosition <= 63 && pássaroPosition > 20 && sonicPosition > 50) || (cactoPosition <= 70 && cactoPosition > 0 && sonicPosition < 35) || (marioPosition <= 63 && marioPosition > 0 && sonicPosition < 35)) {

  pássaro.style.animation = 'none';
  pássaro.style.left = `${pássaroPosition}px`;
  
  mario.style.animation = 'none';
  mario.style.left = `${marioPosition}px`;
  
  cacto.style.animation = 'none';
  cacto.style.left = `${cactoPosition}px`;

  sonic.style.animation = 'none';
  sonic.style.bottom = `${sonicPosition}px`;
  sonic.src= "../sonic/SONIC-DIE.png"
  gameOver.style.display = 'flex'
  remove(pulo);
  clearInterval(ob3)
  
  }
}, 10);

document.addEventListener('keypress', e => {
    const tecla = e.key
    if (tecla === ' ') {
      pulo()
    }
  })
  
  document.addEventListener('touchstart', e => {
    if (e.touches.length) {
      pulo() 
    }
  })
  