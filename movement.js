const body = document.getElementById("body");
const display = document.getElementById("display");
//load the game row by row, basically recreate how a dark room does their map

//below the dictionary for tiles
const def_tiles = new Map();

const player = {
  x: null,
  y: null,
};

def_tiles.set(1, {
  char: "#",

  walkable: false,
});

def_tiles.set(0, {
  char: " ",

  walkable: true,
});

def_tiles.set("P", {
  char: "o",
});

let testMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, "P", 0, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

function findPlayer(map) {
  if (player.x === null || player.y === null) {
    for (let x = 0; x < map.length; x++) {
      for (let y = 0; y < map[x].length; y++) {
        if (map[x][y] == "P") {
          player.x = x;
          player.y = y;
          break;
        }
      }
    }
  }
}

function displayMap(map) {
  //reads the map row by row
  for (let x = 0; x < map.length; x++) {
    let textRow = document.createElement("p");

    for (let y = 0; y < map[x].length; y++) {
      let char = def_tiles.get(map[x][y]).char;
      textRow.textContent += char;
    }
    textRow.classList.add("map");
    textRow.id = x;
    display.appendChild(textRow);
  }
}

function movePlayer(direction) {
  let nxtPosition = null;

  switch (direction) {
    case "up":
      nxtPosition = [player.x, player.y - 1];
      if (nxtPosition[2] < 0) {
        return "can not go further up";
      } else {
        player.x = nxtPosition[0];
        player.y = nxtPosition[1];
        displayMap(testMap);
      }
      break;
  }
}

body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      movePlayer("up");
      console.log(player);
      break;
  }
});

displayMap(testMap);
findPlayer(testMap);
console.log(player);
