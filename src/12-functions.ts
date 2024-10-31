(() => {
    // Funciones
    type S = string;
    type N = number;
    type Sizes = 'S' | 'M' | 'L' | 'XL'

    function createProductToJson(
        title: S,
        createdAt: Date,
        stock: N,
        size: Sizes
    ) {

        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('tv', new Date(), 12, 'XL')
    //console.log(producto1)

    // Arrow Function's

    const createProductToJson2 = (
        title: S, createdAt: Date, stock: N, size: Sizes
    ) => (
        { title, createdAt, stock, size }
    )

    const producto2 = createProductToJson2('tv', new Date(), 12, 'XL')
    console.log('producto 2: ', producto2)

})()