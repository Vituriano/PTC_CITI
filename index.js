KEY_DOWN = 40;
KEY_UP = 38;
KEY_LEFT = 37;
KEY_RIGHT = 39;

x = 0;
y = 0;

tam = 5;
area = 20;

let pos = [[], []];

const ball = document.querySelector('.ball');

// come as food
function compara() {
  for (var i = 0; i < 20; i++) {
    if ((x - area <= pos[0][i] && x + area >= pos[0][i]) && (y - area <= pos[1][i] && y + area >= pos[1][i])) {
      document.querySelector(`#food${i}`).remove();
      tam += 5;
      area += 5;
      ball.style.width = `${20+tam}px`;
      ball.style.height = `${20+tam}px`;
    }
  }
}

for (var i = 0; i < 20; i++) {
  // cria a div
  const div = document.createElement('div');
  const body = document.getElementById('body');
  div.setAttribute('id', `food${i}`);
  div.setAttribute('class', 'food');
  document.body.insertBefore(div, body);
  const food = document.querySelector(`#food${i}`);
  // espalha ela na tela
  X_food = (Math.floor(Math.random() * 1000));
  Y_food = (Math.floor(Math.random() * 1000) % 600);
  food.style.marginLeft = `${X_food}px`;
  food.style.marginTop = `${Y_food}px`;

  pos[0].push(X_food);
  pos[1].push(Y_food);
}

// recebe o comando
document.querySelector('body').addEventListener('keydown', (e) => {

  let tecla = e.keyCode;
  if (tecla == KEY_LEFT) {
    // x = (x-5) % 255;
    x -= 5;
    ball.style.marginLeft = `${x}px`;
  } else if (tecla == KEY_UP) {
    y -= 5;
    ball.style.marginTop = `${y}px`;

  } else if (tecla == KEY_RIGHT) {
    x += 5;
    ball.style.marginLeft = `${x}px`;

  } else if (tecla == KEY_DOWN) {
    y += 5;
    ball.style.marginTop = `${y}px`;
  }
  compara();
});