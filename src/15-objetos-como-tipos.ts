(() => {
    // Tipar Objetos

    type Size = 'S' | 'M' | 'L' | 'XL' // Type Alias

    type Product = {
        title: string,
        createAt: Date,
        stock: number,
        size?: Size
    }

    const products: Product[] = []

    const addProduct = (data: Product) => {
        products.push(data)
    }

    /* Si intento utilizar la funcion add... te va a pedir todos los parametro obligatorios, en caso de que no marcarioa error */


})()