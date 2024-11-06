# Programacion Modular

*Notas Referente a la carpeta '16-modulo' en la carpeta 'src'*

creamos una carpeta que representa el modulo

En el archivo model -> en este va toda la definicion de tipos con la palabra reservada export antes de la declaracion y definicion de estos

```Typescript

export type Size = 'S' | 'M' | 'L' | 'XL' // Type Alias

export type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Size
}
```


En el archivo service -> Van todos los metodos que usamos para invocar y utilizar esos datos o tipos que vienen del model. debemos importar todos los tipos y datos que vamos a utilizar y exportar los datos o metodos que tambien necesitaremos en otros archivos.

```Typescript

    import { Product } from "./product.model";

    export const products: Product[] = []

    export const addProduct = (data: Product) => {
        products.push(data)
    }
```

En el archivo Main ya generariamos la utilizazcion del modulo completo

```Typescript
import { addProduct } from "./product.servicce";
import { Size } from "./product.model";

addProduct({
    title: 'Tv',
    createAt: new Date(),
    stock: 20,
    size:'S'
})
```
    