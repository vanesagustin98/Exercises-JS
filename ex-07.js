function getGiftsToRefill(a1, a2, a3) {
    let giftsRefill = []
    for (let i = 0; i < a1.length; i++) {
        if (!a2.includes(a1[i]) && !a3.includes(a1[i])) {
            giftsRefill.push(a1[i])
        }
    }
    for (let i = 0; i < a2.length; i++) {
        if (!a1.includes(a2[i]) && !a3.includes(a2[i])) {
            giftsRefill.push(a2[i])
        }
    }
    for (let i = 0; i < a3.length; i++) {
        if (!a1.includes(a3[i]) && !a2.includes(a3[i])) {
            giftsRefill.push(a3[i])
        }
    }
    return [...new Set(giftsRefill)]
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3));

// En los almacenes de Papá Noel están haciendo inventario. Hay tres almacenes (que se representa cada uno como un Array). En cada almacén hay regalos.
// Nos han pedido que escribamos un programa que nos diga qué regalos hay que comprar para reponer en nuestros almacenes ahora que se acerca la Navidad. Un regalo se tiene que reponer cuando sólo hay stock en uno de los tres almacenes.
// Por ejemplo, si tenemos los siguientes almacenes:

// const a1 = ['bici', 'coche', 'bici', 'bici']
// const a2 = ['coche', 'bici', 'muñeca', 'coche']
// const a3 = ['bici', 'pc', 'pc']

// El almacén a1 tiene "bici" y "coche".
// El almacén a2 tiene "coche", "bici" y "muñeca".
// El almacén a3 tiene "bici" y "pc".

// El regalo "muñeca" y "pc" sólo están en los almacenes a2 y a3 respectivamente.

// const gifts = getGiftsToRefill(a1, a2, a3) // ['muñeca', 'pc']
// Como ves, los almacenes pueden tener el mismo regalo repetido varias veces. Pero, por más existencias que haya en un almacén, si no tenemos en los otros dos, debemos reponerlo para tener mejor distribución.

// 📝 Summary
// • Crea una función getGiftsToRefill que reciba tres Array como parámetros.
// • La función debe devolver un Array con los regalos que hay que reponer.
// • Un regalo se debe reponer cuando sólo hay stock en uno de los tres almacenes.
// • Si no hay ningún regalo que reponer, la función debe devolver un Array vacío.
// • Si hay más de un regalo que reponer, la función debe devolver un Array con todos los regalos que hay que reponer.