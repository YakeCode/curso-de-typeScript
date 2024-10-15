# TsConfig.json

Se crea al ejecutar el comanto npx tsc --init

target: es2016
module: commonjs
strict: true
esModuleInterop: true
skipLibCheck: true
forceConsistentCasingInFileNames: true

Estas seran las configuraciones por defecto

Podemos modificar el archivo ts dependiendo lo que necesitemos

    "outDir": "./dist", -> carpeta hacia donde vamos hacer la transpilacion
    "rootDir": "./src", -> carpeta donde se van a guardadr los archivos ts

luego de esto ejecutamos en la consola npx tsc para ejecurtar el transpilador

Si queremos que haga la transpilacion de forma automatica y que la haga siemre corremos en terminal
npx tsc --watch
