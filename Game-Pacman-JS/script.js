import { makeCanvas, makeGrid } from "../JS-Shared/Shared-Canvas.js";
import { make, insertar } from "../JS-Shared/Shared-DOM.js";
// ┌───────────────────────────────────┐
// │        Variables - Game           │
// └───────────────────────────────────┘
const board = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1],
  [1, 5, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 5, 1],
  [1, 5, 1, 1, 1, 1, 5, 5, 5, 1, 1, 1, 5, 5, 5, 1, 1, 1, 1, 5, 1],
  [1, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 1],
  [1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 0, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1],
  [1, 5, 1, 1, 1, 1, 5, 1, 0, 0, 0, 0, 0, 1, 5, 1, 1, 1, 1, 5, 1],
  [1, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0, 0, 1, 5, 5, 5, 5, 5, 5, 1],
  [1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1],
  [1, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 1],
  [1, 5, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 5, 1],
  [1, 5, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const user = {
  Position: { x: 1, y: 1 },
  Color: "yellow",
};

const ghosts = [
  {
    color: "red",
    Position: { x: 9, y: 6 },
    direccion: { x: 0, y: 0 },
  },
  {
    color: "pink",
    Position: { x: 10, y: 6 },
    direccion: { x: 0, y: 0 },
  },
  {
    color: "cyan",
    Position: { x: 9, y: 7 },
    direccion: { x: 0, y: 0 },
  },
  {
    color: "orange",
    Position: { x: 10, y: 7 },
    direccion: { x: 0, y: 0 },
  },
];

let direccionActual;

let puntaje = 0;
const cellSize = 35;

const fondoColor = "#262626";
const cellParedColor = "#5555e8";
const cellPuntoColor = "white";

const [width, height] = [board[0].length * cellSize, board.length * cellSize];

// ┌───────────────────────────────────┐
// │        Variables - Canvas         │
// └───────────────────────────────────┘
const canvas = makeCanvas(height, width, "canvas", true);
const ctx = canvas.getContext("2d");

// --> Imagina una Lupa
ctx.scale(cellSize, cellSize);

// ┌───────────────────────────────────┐
// │         Variables - DOM           │
// └───────────────────────────────────┘
const htmlPuntaje = make("h1", `Puntaje: ${puntaje}`, ["puntaje"]);
insertar(document.body, htmlPuntaje);
// ┌───────────────────────────────────┐
// │            Funciones              │
// └───────────────────────────────────┘
function draw() {
  // --> Draw_Bg
  ctx.fillStyle = fondoColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // --> Draw_Grid [Plano Cartesiano]
  board.forEach((row, y) => {
    row.forEach((value, x) => {
      // [CODIGO]
      if (value === 1) {
        ctx.fillStyle = cellParedColor;
        ctx.fillRect(x, y, 1, 1);
      }
      if (value === 5) {
        ctx.fillStyle = cellPuntoColor;
        ctx.beginPath();
        ctx.arc(x + 0.5, y + 0.5, 0.15, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  });

  // --> Draw_Usuario [Plano Cartesiano]
  ctx.fillStyle = user.Color;
  ctx.fillRect(user.Position.x, user.Position.y, 1, 1);

  // --> Dras_Fantasma [Plano Cartesiano]
  ghosts.forEach((fantasma) => {
    ctx.fillStyle = fantasma.color;
    ctx.beginPath();
    ctx.arc(
      fantasma.Position.x + 0.5,
      fantasma.Position.y + 0.5,
      0.45,
      0,
      Math.PI * 2,
    );
    ctx.fill();
  });
}

function verificaColicion(character = user) {
  let [x, y] = [character.Position.x, character.Position.y];
  if (board[y][x] === 1) {
    return true;
  }
  if (board[y][x] === 5 && character === user) {
    puntaje += 10;
    board[y][x] = 0;
  }
}

function verificaColicionConFantasma() {
  let [userx, usery] = [user.Position.x, user.Position.y];
  let respuesta = ghosts.some((fantasma) => {
    return fantasma.Position.x === userx && fantasma.Position.y === usery;
  });

  if (respuesta) {
    alert("¡Game Over!");
  }
}

function verificaHayBolitas() {
  const hayBolitas = board.some((row) => row.includes(5));
  if (!hayBolitas) {
    alert("🏆 ¡Ganaste!");
    return true;
  }
}
function moverFantasmas() {
  ghosts.forEach((fantasma) => {
    const direcciones = [
      { x: 0, y: -1 }, // arriba
      { x: 0, y: 1 }, // abajo
      { x: -1, y: 0 }, // izquierda
      { x: 1, y: 0 }, // derecha
    ];

    const opcionesValidas = direcciones.filter((d) => {
      const nx = fantasma.Position.x + d.x;
      const ny = fantasma.Position.y + d.y;
      // Dentro del tablero y no es pared
      return board[ny]?.[nx] !== undefined && board[ny][nx] !== 1;
    });

    if (opcionesValidas.length > 0) {
      const aleatoria =
        opcionesValidas[Math.floor(Math.random() * opcionesValidas.length)];
      fantasma.Position.x += aleatoria.x;
      fantasma.Position.y += aleatoria.y;
    }
  });
}

// ┌───────────────────────────────────┐
// │              Trigger              │
// └───────────────────────────────────┘
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  switch (key) {
    case "arrowup":
    case "w":
      //moverArriba();
      direccionActual = moverArriba;
      break;

    case "arrowdown":
    case "s":
      //moverAbajo();
      direccionActual = moverAbajo;
      break;

    case "arrowleft":
    case "a":
      //moverIzquierda();
      direccionActual = moverIzquierda;
      break;

    case "arrowright":
    case "d":
      //moverDerecha();
      direccionActual = moverDerecha;
      break;
  }
});

function moverArriba() {
  user.Position.y--;
  if (verificaColicion()) {
    user.Position.y++;
  }
}

function moverAbajo() {
  user.Position.y++;
  if (verificaColicion()) {
    user.Position.y--;
  }
}
function moverIzquierda() {
  user.Position.x--;
  if (verificaColicion()) {
    user.Position.x++;
  }
}
function moverDerecha() {
  user.Position.x++;
  if (verificaColicion()) {
    user.Position.x--;
  }
}
// ┌───────────────────────────────────┐
// │               Main                │
// └───────────────────────────────────┘
let lastTime = 0;
let dropCounter = 0;

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;

  dropCounter += deltaTime;

  // Html
  htmlPuntaje.innerText = `Puntaje: ${puntaje}`;

  // Verificacion
  verificaColicionConFantasma();
  verificaHayBolitas();

  // Ejecuta por Segundo
  if (dropCounter > 200) {
    // Pre
    dropCounter = 0;

    if (typeof direccionActual === "function") {
      direccionActual();
    }

    moverFantasmas();
  }

  draw();
  window.requestAnimationFrame(update);
}

update();
