
(() => {

    let productTitle: string = 'My Product';

    productTitle = 'My Product Changed';

    console.log(`strings : ${productTitle}}`)

    let name: string = 'i am yo'; // si se utiliza la forma abreviiada generaria error

    let lastName: string = " I'm yo"

    const sumAll: string = `
    title : ${productTitle}
    name : ${name}
    lastName : ${lastName}
    `
    console.log(`SUM ALL : ${sumAll}`)
})()