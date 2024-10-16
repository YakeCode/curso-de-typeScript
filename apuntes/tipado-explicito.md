# Tipado Explicito

Como regla general si tenemos una variable que declaramos pero no deseamos asignarle un valor aun, nos va a pedir que obligatoriamente indiquemos el tipo, ya que no yiene como inferir el tipo

- siempre se debe tipar con nuber en minuscuyla, no en mayuscula (Number)

let numero: number;

numero = 5

let discount:number = parseInt ('123') -> esto imprimiria NaN

# Nota

si intentamos imprimir una variable sin declarar, ts nos dara una alerta en el codigo poruqe seria undefined
