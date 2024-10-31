# Alias - Tipos Literales - Tipos Personalizados

Esto se utiliza para no tener que estar re-escribiendo codigo, especialmente si nos referimos al mismo.

## Crear Alias

Utilizamos la palabra RESERVADA de TS "type" + alias que vamos a tipar escrita el PascarlCase + tipos que contiene o que puede contener

* Declaracion ->  type UserId = string | number | boolean
* Asignacion -> let userId: UserId

## Tipos Literales

Declaramos la variable "let" y al agregarle el tipodo indicamos que es lo unico que puede contener

* Syntaxys -> let variable: tipos-literales

* Declaracion -> let camisa: S | M | L | XL 

* Asignacion -> 
    let camisa = S;
    let camisa = S;
    let camisa = S;
    let camisa = S;

    let camisa = s -> error

    
    







