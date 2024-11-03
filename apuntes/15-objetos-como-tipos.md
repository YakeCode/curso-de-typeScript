# Tipando Objetos

El tipado de objetos nos permite tener una estructura mas compleja, pues este nos deja darle una estructura mas solida a la hora de crear objetos ayudandonos a no tener errores tan facilmente.

*Antes teniamos este codigo*

```Typescript

     const products: any[] = []

    const addProduct = (product: {
        title: S,
        crearesAt: D,
        stock: N,
        size?: Sz
    }) => {
        products.push(product)
    }
```

*Pero ahora podemos evitar el any ty darle una mayor solides al codigo*

```Typescript

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

```



