(() => {

    //let myNumber:number = null | undefined; generaria error
    //let myString:string = null | undefined; generaria error

    //let myNull= null; //Tomara el valor de any
    //let myUndefined= undefined; //Tomara el valor de any

    let myNull: null = null;
    let myUndefined: undefined = undefined;

    let myNumber: number | null = null;
    myNumber = 2;
    let myString: string | undefined = undefined;
    myString = 'inicio'

    type SN = string | null

    function hi(name: SN) {

        let hello = 'Hola ';
        if (name) {
            hello += name
        } else {
            hello += ' noBody'
        }
        return hello
    }

    // console.log(hi(null)) // Hola noBody
    //console.log(hi('yake')) //Hola yake

    // Mas corto

    function hi2(name: SN) {
        let hello = "Hola "
        hello += name?.toLocaleLowerCase() || 'no body'/*mientras este vacio me rergresara un null por lo tanto regresaria 'no body' 'optional chaining operator' */
        return hello
    }

    //console.log(hi2()) // no body
    //console.log(hi2(null)) // no body
    //console.log(hi2('yake')) //Hola yake

})()