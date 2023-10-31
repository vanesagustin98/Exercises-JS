function getCompleted(part, total) {
    let partes = part.split(':')
    let totall = total.split(':')
    let secPart = parseInt(partes[2], 10);
    let minPart = parseInt(partes[1], 10);
    let horaPart = parseInt(partes[0], 10);
    let secTotal = parseInt(totall[2], 10);
    let minTotal = parseInt(totall[1], 10);
    let horaTotal = parseInt(totall[0], 10);
    let parteInt = horaPart*3600+minPart*60+secPart
    let totalInt = horaTotal*3600+minTotal*60+secTotal
    const gcd = function (a,b) {
        return b === 0? a : gcd(b, a%b) 
    }
    let divisorComun = gcd(parteInt, totalInt)
    let partSimplificado = parteInt/divisorComun
    let totalSimplificado = totalInt/divisorComun

    return `${partSimplificado}/${totalSimplificado}`
}

console.log(getCompleted('01:00:00', '03:00:00'));

// Papa Noél está un poco preocupado porque los preparativos están llevando mucho tiempo. Hace poco se ha sacado una certificación de Scrum y ha decidido usar la metodología para organizar el trabajo de sus elfos.
// Le dicen la duración esperada de las tareas con un string con el formato hh:mm:ss y en el mismo formato cuánto tiempo llevan trabajando en ella.
// Pero Papa Noél no se entera rápidamente si falta o mucho para que termine, así que nos ha pedido que hagamos un programa que nos indique la porción de la tarea que ya se ha completado.
// Por ejemplo, si la tarea dura 03:00:00 y llevan trabajando 01:00:00 entonces ya han completado 1/3 de la tarea. En código:

// getCompleted('01:00:00', '03:00:00') // '1/3'
// getCompleted('02:00:00', '04:00:00') // '1/2'
// getCompleted('01:00:00', '01:00:00') // '1/1'
// getCompleted('00:10:00', '01:00:00') // '1/6'
// getCompleted('01:10:10', '03:30:30') // '1/3'
// getCompleted('03:30:30', '05:50:50') // '3/5
// Ten en cuenta:

// •El formato de la hora es hh:mm:ss.
// •El formato de la salida es un string a/b donde a es la porción de la tarea que ya se ha completado y b es la porción de la tarea que falta por completar.
// •La porción siempre se muestra con la menor fracción posible. (por ejemplo, nunca se mostraría 2/4 porque se puede representar como 1/2).
// •Si ya se ha completado la tarea, la fracción sería 1/1.
// •Ningun elfo ha sido maltratado durante la ejecución de este reto ni han tenido que usar Scrum de verdad.