(() => {

    type S = string;
    type N = number;

    const calcTotal = (prices: N[]): S => {

        /*puedo tipar lo que retorna la funcion antes de la flecha*/

        let total = 0;
        prices.forEach((item => total += item));
        return total.toString()
        /*prices.reduce((total, price) => total + price, 0);*/
    }

    const printTotal = (prices: N[]): void => {
        const rta = calcTotal(prices)
        console.log('el total es ', rta)
    }

    //const total1 = calcTotal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    //console.log(total1)

    const total2/*void */ = printTotal([1, 2, 3, 4, 5, 6, 7, 8, 9]) /*el total es  45 */
})()