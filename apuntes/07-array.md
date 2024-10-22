# Arrays

const price = [1, 2, 3, 4, 5, 6, 7, 8, 9] -> el tipo inferido sera number pero en array -> number []

A la hora de intentar utilizar los metodos de los arrays solo me dejara ingresar los tipos de datos que tiene desde un inicio

* si le quiero pober tipado explicito  tiene la siguiente estructura

    const prices: (string | number)[] = [1, 'string']