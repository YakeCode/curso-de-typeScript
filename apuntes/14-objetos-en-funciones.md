# Manejo De Objetos Con Funciones

Crear una funcion con objeto tiene un objeto como parametro lo podemos declarar de esta forma

```Typescript 
    const login = (data: { email: S, password: S }) => {
        console.log(data.email, data.password)
    }
```

Declaramos la funcion, y dentro de los parametros le podemos indicar el nombre del objeto y las propiedades de este mismo. Por lo cual veremos como que dentro de la funcion nos debemos referir al onjeto a la hora de llamar sus propiedades _data.email_ y _data.password_

### ejecutar y pasar valores 

A la hora de ejecutar la funcion le mandamos los valores tal cual se los mandamos en los parametros

``` Typescript
    login({
        email: 'YaKe',
        password: '123654'
    })
```

#### Ejemplo
 
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

    console.log(products) /* Products = [
        { title: 'TV', crearesAt: 2024-11-02T01:12:58.978Z, stock: 20 },
        {title: 'Shirt',crearesAt: 2024-11-02T01:12:58.978Z,stock: 20,size: 'S'}
    ]
```


