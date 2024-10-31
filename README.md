# TypeScript

Curso de TypeScript Basico

- activar analizador de codigo estatico en javascript

    //@ts-check -> incorpora tipado en JS


- npx tsc --watch -> corre el transpilador automaticamente

- (()=>{})() -> funcion autoejecutable

________________________________________________________________

#### En consola

node / directorio de salida de ts para correr el codigo y ver su salida

node dist/04-numbers.js

________________________________________________________________

## Hacer cambio de tipos con AS : 2 Formas

    myDynamicVar = 8

    - const rta = (myDynamicVar as string)
    - const rta2 = (<string>myDynamicVar)

__________________________________________________________________

# CREAR TIPOS

## Tipos Personalizados

* Sintaxys -> type Alias = tipos
* Declaracion ->  type UserId = string | number | boolean
* Asignacion -> let userId: UserId
_________________________________________________________________

## Tipos Literales

* Declaracion -> let camisa: S | M | L | XL 
* Asignacion -> 
    let camisa = S;
    let camisa = S;
    let camisa = S;
    let camisa = S;
    let camisa = s -> error
________________________________________________________________

- *Nota* : im`prtante saber como funciona el null en los frameworks y bases de datos 

# Optional Chaining Operator

```javascript
hello += name?.toLocaleLowerCase() || 'no body'; 


 Este operador permite acceder a propiedades de un objeto que podrían ser null o undefined sin lanzar un error. Si el valor es null o undefined, simplemente devuelve undefined en lugar de intentar acceder a la propiedad, lo que puede evitar errores en tiempo de ejecución.
