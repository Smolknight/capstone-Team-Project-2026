// let exGrid = [['0', '1'],["4","2"]];
// for (let x = 0; x < exGrid.length; x++){
//     for (let y = 0; y < exGrid[x].length; y++){
//         console.log(`(${x},${exGrid[x][y]})`);
//     };
// };

const gridWidth = 1000;
const gridHeight = 1000;
let grid = new Array(gridWidth);
for (let x = 0; x < grid.length; x++){
    grid[x] = new Array(gridHeight);
    for (let y = 0; y < grid[x].length; y++){
        grid[x][y] = y;
    }
};

function arrScroll(map) {
    for (let x = 0; x < map.length; x++){
        for (let y = 0; y < map.length; y++){
            console.log(`(${x},${y})`)
        }
    }
}

arrScroll(grid);
// console.log(grid);