var squares     = document.querySelectorAll('.square'),
    disColor    = document.querySelector('#display-val'),
    headerColor = document.querySelector('.header-div'),
    newBtn      = document.querySelector('#new-btn'),
    easyBtn     = document.querySelector('#easy-btn'),
    hardBtn     = document.querySelector('#hard-btn'),
    msg         = document.querySelector('#msg'),
    numSquares  = 6,
    gameOver    = false,
    colors      = [],
    finalColor;

fillColor();

// DECLARE winning...
for(var i = 0; i < numSquares; i++){
  squares[i].addEventListener('click', function(){
    if(this.style.backgroundColor !== finalColor && !gameOver){
      this.style.backgroundColor = '#232323';
      this.style.visibility = 'hidden';
      msg.textContent = 'Try Again';
    } else {
      msg.textContent = 'Awesome';
      headerColor.style.backgroundColor = finalColor;
      gameOver = true;
    }
  })
}

// NEW Colors
newBtn.addEventListener('click', function(){
  gameOver = false;
  fillColor();
})

// EASY & HARD
easyBtn.addEventListener('click', function(){
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  numSquares = 3;
  gameOver = false;
  fillColor();
})

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  gameOver = false;
  fillColor();
})

// Functions===

// Fill Colors to squares
function fillColor(){
  randomColor();

  finalColor = colors[Math.floor(Math.random() * numSquares)];
  disColor.textContent = finalColor;
  headerColor.style.backgroundColor = '#4881B3';

  for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = '#232323';
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.visibility = 'visible';
  }
}

// PUSH: random colors to array
function randomColor(){
  colors = [];

  for(var i = 0; i < numSquares; i++){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    colors.push('rgb(' + r + ', ' + g + ', ' + b + ')');
  }
}