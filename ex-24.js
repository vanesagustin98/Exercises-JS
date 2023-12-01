function canExit(maze) {
    let start = [];
    for (let i = 0; i < maze.length; i++) {
        for (let j = 0; j < maze[i].length; j++) {
            if (maze[i][j] === 'S') {
                start = [i, j];
                break;
            }
        }
    }

    function dfs(row, col) {
        if (
            row < 0 || row >= maze.length ||
            col < 0 || col >= maze[row].length ||
            maze[row][col] === 'W' || maze[row][col] === 'visited'
        ) return false;

        if (maze[row][col] === 'E') return true;
        maze[row][col] = 'visited';

        return (
            dfs(row - 1, col) ||
            dfs(row + 1, col) ||
            dfs(row, col - 1) ||
            dfs(row, col + 1)
        );
    }

    return dfs(start[0], start[1]);
}

console.log(
    canExit([
        [' ', ' ', 'W', ' ', 'S'],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', 'W', ' '],
        ['W', 'W', ' ', 'W', 'W'],
        [' ', ' ', ' ', ' ', 'E'],
    ])
);

// ¡Ha llegado el día! Hoy vamos a repartir los regalos… pero los almacenes son un labertinto y los elfos están perdidos.
// Indielfo Jones quiere escribir un programa que al recibir una matriz, sepa si puede salir o no del laberinto rápidamente desde su entrada a la salida.
// Los laberintos tienen las siguientes posiciones:

// W: Es una pared, no se puede pasar por ahí.
// S: Punto de entrada al almacén.
// E: Punto de salida del almacén.
// : Los espacios en blanco es por donde se puede pasar. Los movimientos válidos son de una posición hacia arriba, abajo, izquierda o derecha. No se puede mover en diagonal.
// canExit([
//   [' ', ' ', 'W', ' ', 'S'],
//   [' ', ' ', ' ', ' ', ' '],
//   [' ', ' ', ' ', 'W', ' '],
//   ['W', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ]) // -> true

// Se puede salir porque empezamos en [0, 4]
// y hay un camino hasta la salida que es [4, 4]

// canExit([
//   [' ', ' ', 'W', 'W', 'S'],
//   [' ', ' ', ' ', 'W', ' '],
//   [' ', ' ', ' ', 'W', ' '],
//   ['W', 'W', ' ', 'W', 'W'],
//   [' ', ' ', ' ', ' ', 'E']
// ]) // -> false

// No hay manera de llegar de [0, 4] a [4, 4]

// Recuerda que:
// • Sólo tienes que devolver si se puede salir del laberinto con un booleano.
// • Las paredes W no se pueden saltar.
// • No se pueden salir de los límites de la matriz, siempre hay que seguir un camino interno.