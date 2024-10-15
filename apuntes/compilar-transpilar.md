# Compilador

transpila TS y genera JS

ni node nativamente ni el navegador corren TS por lo cual se necesita la transpilacion

# pasar por el transpilador

- npx tsc [ruta-del-archivo]

npx tsc src/01-hello.ts -> esto nos creara un archivo convertido en js, nos lo creara dentrop del mismo repositorio

### pasar por un transpilador de version especifico

- npx tsc [ruta-del-archivo] --target [version de ecma]

npx tsc src/01-hello.ts --target es6

### traspilar dentro de otro directoprio diferente

- npx tsc [ruta-del-archivo] --target[ecma] --outDir[ruta-a -donde-lo-envio]

-npx tsc src/01-hello.ts --target es6 --outDir dist

### nota:

expresion regular de directorios

tsc/\*.ts
