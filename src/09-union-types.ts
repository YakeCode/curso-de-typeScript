(() => {
    let info: string | number
    info = 1
    info = 'uno'

    function greeting(name: string, age: number) {
        return `hola mi nombre es ${name}, y tengo ${age} años.`
    }

    console.log(greeting('yimi', 25))

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
}
)()