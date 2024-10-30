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
