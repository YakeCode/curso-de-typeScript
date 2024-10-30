(() => {
    let myDynamicVar: any;
    myDynamicVar = 1;
    myDynamicVar = null;
    myDynamicVar = false;

    myDynamicVar = 8

    const rta = (myDynamicVar as string).toLocaleLowerCase()
    const rta2 = (<number>myDynamicVar).toExponential()
})() 