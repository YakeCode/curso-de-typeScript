# Retorno de funciones

Arrow Function = puedo tipar lo que retorna la funcion antes de la flecha

```Typescript

    const calcTotal = (prices: N[]): S => {

        /*puedo tipar lo que retorna la funcion antes de la flecha*/

        let total = 0;
        prices.forEach((item => total += item));
        return total.toString()
        /*prices.reduce((total, price) => total + price, 0);*/
    }

    const total1 = calcTotal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    console.log(total1)

```

## Void 

Sucede cuando una funcion no retorna nada implicito, por lo general es una funcion quer ejecuta algo mas no hace nada mas

si equiero que una funcion no etorne nada y quiero que permanezca asi le puedo poner lo que retorna la funcion como void

```Typescript

    const printTotal = (prices: N[]): void => {
        const rta = calcTotal(prices)
        console.log('el total es ', rta)
    }

```
