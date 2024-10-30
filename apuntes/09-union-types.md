# Union Types

se utiliza para definir que una variable pueda tener diferentes clases de tipos

* Para utilizar este no puedo dejarle el tipo inferido

    function greeting(name: string, age: number) {
        return `hola mi nombre es ${name}, y tengo ${age} años.`
    }

    puedo utilizar diferentes tipos o uno solo y puedo generar que si me genera un tipo el codigo haga una cosa y si es otro tipo genere otra.

* Utilizacion de codigo dependiendo el tipo de dato

    function type(typing: string | number) {
        if (typeof typing === "string") {
            return `soy un string ${typing.toUpperCase()}`
            /*solo me dejaria usar la spropiedades de un string */
        } else {
            return `soy un number ${typing.toExponential(2)}`
        }
    }

    console.log(type('yimi')) //yimi

    console.log(type(25)) //soy un number 2.50e+1
    