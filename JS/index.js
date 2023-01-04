 /* MULTIPLICAR 2 NUMEROS SIN UTILIZAR SIGNO DE (*)*/

const multiply = (a,b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for ( i = 0; i < Math.abs(b); i++) {
        resultado = positivo ? resultado + a : resultado - a  
    }
    return resultado
}

const a = multiply(50,-50)
console.log(a)


/*OBTENER EL NUMERO MAYOR DE ARREGLO, ITERANDO ARRELO SOLO UNA VEZ */


const getBiggest = (arr) => arr.reduce ((acc, el) => acc > el ? acc : el)
const b = getBiggest ([50, -1500, 1000, 0, 1, 54])
console.log(b)


/*ITERANDO EL ARREGLO SOLO UNA VEZ, ESCRIBE UNA FUNCION QUE ELIMINE LOS 0, UNDEFIEND , FALSE, NULL*/
 

    const clean = (arr) => arr.reduce ((acc, el) => {
        if (el){
            acc.push(el)
        }
        return acc 
    }, [])

 const c = clean([1, undefined, null, 0,2,3])
 console.log(c)

 /*ESCRIBE UNA FUNCION QUE  APLANE LOS ARREGLOS EN UN NIVEL */


 const arr = [[1, 2], [[3,4]], [1,[]]]
 const flatten = arr => arr.reduce ((acc, el) => acc.concat(el),[])
 const d = flatten(arr)
 console.log(d)

 /* ESCRIBIR UNA FUNCION QUE CUENTE LAS CANTIDADES DE VECES QUE  SE REPITA UNA PALABRA */
 

const repeated = str =>{
    const lowered = str.toLowerCase()
    const splitted = lowered.split(' ')
    const reduced = splitted.reduce((acc, el) => {
        if (acc[el]){
            acc[el]++
        } else {
            acc[el] = 1
        }
        return acc
    }, {})
    return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el )

}
const e = repeated(' this is a reapeted word test this is a a ')
console.log(e)


/*Pedir dos números y decir si son múltiplos o no*/
let numero1 = 24;
let numero2 = 12;

if( numero1 % numero2 === 0 || numero2 % numero1 === 0 ){
    console.log("Son múltiplos")
}else{
    console.log("No son múltiplos")
}

/*Pedir un número y decir si es un número negativo, si es positivo o cero*/

let numero = 20

if(numero > 0){
    console.log("Es un número positivo");
}else if(numero < 0){
    console.log("Es un número negativo");
}else{
    console.log("Es el número cero (0)")
}

/*Pedir una calificación  de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente*/
let calificacion = 11;

if( calificacion < 5 && calificacion >= 0 ){
    console.log("Calificación: Insuficiente");
}else if( calificacion === 5 ){
    console.log("Calificación: Suficiente");
}else if( calificacion > 5 && calificacion <= 8 ){
    console.log("Calificación: Bien");
}else if( calificacion > 8 && calificacion <= 10 ){
    console.log("Calificación: Excelente");
}else{
    console.log("Calificación no valida");
}

/*Pedir una hora, minuto y segundo y mostrar la hora en el segundo siguiente*/


let hora = 3;
let minuto = 59;
let segundo = 59;

//incrementamos el segundo en 1
segundo++

if(segundo >= 60){
    segundo = 0;
    minuto++;

    if(minuto >= 60){
        minuto = 0;
        hora++;

        //si la hora es mayor a 23 lo reiniciamos a 0;
        if(hora >= 24){
            hora = 0;
        }

    }
}
console.log(`La hora es: ${hora}: ${minuto}: ${segundo}`);


/*Juan tiene 47 dólares, David tiene la mitad de lo que posee Juan y José la mitad de lo que poseen 
Juan y David juntos. Mostrar el promedio de la cantidad de dinero que tienen entre los tres y redondearlo*/

let juan = 47;
let david = juan / 2; 
let jose = (juan + david) / 2;

//mostrando el promedio
let promedio = Math.round((juan + david + jose) / 3);

console.log(`El promedio de la suma de dólares de los tres juntos es de: ${promedio}`);

/* Pedir un String y mostrar true si tiene 5 caracteres o mas, caso contrario, 
mostrar false utilizar el operador ternario.*/

let palabra = "Hola Mundo";
let respuesta = palabra.length >= 5 ? true : false
console.log(respuesta)

