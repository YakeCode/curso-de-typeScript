# Any

Any = cualquier cosa

    let myDynamicVar: any;
    myDynamicVar=1;
    myDynamicVar=null;
    myDynamicVar=false;

Con ANY podemos definir que una variable pueda tener cualquier clase de asignacion

* Se aconseja que el Any no sea utilizado

* Si el proyecto a penas se esta migrando puede funcionar bien

* Hacer cambio de tipos 2 Formas

    myDynamicVar = 8

    const rta = (myDynamicVar as string).toLocaleLowerCase()
    const rta2 = (<number>myDynamicVar).toExponential()
