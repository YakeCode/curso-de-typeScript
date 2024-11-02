(() => {
    type S = string;
    type N = number;
    type D = Date;
    type Sz = "S" | "M" | "L" | "XL";

    const login = (data: { email: S, password: S }) => {
        console.log(data.email, data.password)
    }

    login({
        email: 'YaKe',
        password: '123654'
    })

    const products: any[] = []

    const addProduct = (product: {
        title: S,
        crearesAt: D,
        stock: N,
        size?: Sz
    }) => {
        products.push(product)
    }

    const product1 = addProduct({
        title: 'TV',
        crearesAt: new Date(),
        stock: 20,
    })

    const product2 = addProduct({
        title: 'Shirt',
        crearesAt: new Date(),
        stock: 20,
        size: 'S'
    })

    console.log(products)

})()

