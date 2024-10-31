# Function's

En una funcion a demas de tiparla, al momento de ejecutarla, debemos enviarle todos los parametros tal cual se los declaramos, si no comenzara a generar error

```typescript

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

```

## Arrow Function's

```typescript

    const createProductToJson2 = (
        title: string, createdAt: Date, stock: number, size?: string 
    )=> ({ title, createdAt, stock, size }); 

    /*al agregrle el Chaining Operator le estoy indicando que la talla es opcional*/
    /* los parentesis generan el return*/

    const producto2 = createProductToJson2('tv', new Date(), 12, 'XL');

```

    