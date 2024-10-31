# Null - Undefined

Null y Undefined son diferentes

* number o estring no entran dentro des estos (null - undefined)

    let myNull= null;
    let myUndefined= undefined;

    Aunque les asignemos como valor "null" o "undefined" estos tomaran el tipo de 'any' a menos que le adignemos el tipo directamente
* Si necesito inicializar un valor como null y opero el proposito es que cambie mas adelante utilizaria 'union-type'

    let myNumber: number | null = null;
    myNumber = 2;
    let myString: string | undefined = undefined;
    myString = 'inicio'

    - la inicializacion en null se utiliza mas que todo para Frameworks

    type SN = string | null

    function hi2(name: SN) {
        let hello = "Hola "
        hello += name?.toLocaleLowerCase() || 'no body'/*mientras este vacio me rergresara un null por lo tanto regresaria 'no body', */
        return hello
    }

    - name? valida si ya existe un valor en name, en este caso un string, si esta vacio o null regresa el mensaje despues del " || "
    

