function decorateTree(base) {
    let arbol = [];
    while (base.length > 1) {
        arbol.unshift(base);
        let str = '';
        for (let i = 0; i < base.length; i += 2) {
            let bistr = base.slice(i, i + 3);
            if (bistr.length === 3) {
                if (bistr[0] == bistr[2]) {
                    str = str + ' ' + bistr[0];
                }
                if (bistr == 'B P' || bistr == 'P B') {
                    str = str + ' R';
                }
                if (bistr == 'R P' || bistr == 'P R') {
                    str = str + ' B';
                }
                if (bistr == 'B R' || bistr == 'R B') {
                    str = str + ' P';
                }
            }
        }
        base = str.trim();
    }
    arbol.unshift(base);
    return arbol;
}

console.log(decorateTree('B P R P'));

// Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

// • Bolas de colores : B
// • Regalos pequeños : R
// • Piñas de pino : P
// El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

// Arriba coloca  :     P     R     B     P
// Si abajo tiene :    P P   B P   R P   B R
// Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

// Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

//    R
//   P B
//  R B B
// B P R P
// Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

// decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// decorateTree('B B') // ['B', 'B B']

// Ten en cuenta que:
// • El programa recibe siempre la cadena de texto que representa la base del árbol.
// • Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
// • Hay que seguir la fórmula para saber qué decoración colocar en cada posición.