let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //Alamacenar cada numero que fue sorteado
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto){ //La funcion puede recibir parametros para poder reutilizarla N veces
    let elementoHTML = document.querySelector(elemento); //crea una variable de nombre titulo donde almacena el espacio de H1 como encabezado o titulo
    elementoHTML.innerHTML= texto; //Ponemos el texto del titulo como tal texto(es una variable)
    return; //En este caso la fucnion no retorna nada pero es una BUENA practica HACERLO
}

function verificarIntento(){
    //Funcion para un evento de BTN, Aquí se encapsula toda la accion de la función 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    /*console.log(typeof(numeroDeUsuario));// Nos dice con que tipo de dato esta recibiendo el del usuario
    console.log(numeroDeUsuario);
    console.log(typeof(numeroSecreto)); //Nos dice con que tipo de dato esta poniendo el nunero secreto 
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto); //comprarcion y consola TRUE or FALSE triple === es para validar peras con peras, manzanas with apples
    */
    //console.log(intentos);
    if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Felicidades ACERTASTE en ${intentos} ${(intentos == 1) ? 'asalto' : 'asaltos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled'); //Para Habilitar el boton de Intentar Nuevo Jeugo, lo buscamos ID y despues removemos sus atributos de disable para que este disponible
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero es MENOR');
        }else{
            asignarTextoElemento('p','El numero es MAYOR');
            }
            intentos++;
            limpiarCaja();
   }
    return;
}


function limpiarCaja(){
    /*let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';*/
    //Simplicando nuevamente codigo, eliminamos como tal la variable 
    valorCaja = document.querySelector('#valorUsuario').value = '';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //return numeroSecreto; //Retornamos el numero secreto (juando ejecutemos la funcion nos va adevolver 1 numero secreto)
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon TODOS los Numeros posibles');

    }else{//SINO seguimos jugando
        //Si el numero ya existe en la lista 
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio(); //Volvemos a llmar a la funcion para que haga otro DIFERENTE del que existe
        
        }else{//Si no esta en la lista
            listaNumerosSorteados.push(numeroGenerado);//Coloca al final del Array el numero sorteado
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO DEL NUMERO SECRETO'); //Lo que va adentro son los valores que queremos que la funcion ponga( elemento, texto   )
    asignarTextoElemento('p',`Indica un numero del 1-${numeroMaximo}`); //Reutilziamos la funcion asignarTextoElemento para que rellene el parrafo 
    numeroSecreto =  generarNumeroAleatorio();//Generar 1 nuevo numero Aleatorio
    intentos = 1; //Inicializamos el contador de inetos = a 1
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    //console.log(numeroSecreto);
}

function reinicarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Inidicar mensaje de inicio (instrucciones)
    condicionesIniciales();
    //Generar un nuevo numero aleatorio
    //Inicializar el numero de intentos
    //Necesito desabilitar el boton de nuevo jeugo 
}

condicionesIniciales();


//Desafíos:
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, 
//que se recibirán como parámetros.

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
/*function calculaFactorial(numero){
    if(numero ===0 || numero ===1 ){
        return 1;
    }else{
        return numero * calculaFactorial(numero - 1);
    }
}
let numero = 5;
let resultado = calculaFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);*/

//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.


/*function convierteDinero(dolares){
    let reales = dolares*4.93;
    return reales;
}
let dolares = 1000;
let reales = convierteDinero(dolares);
console.log(`$${dolares} DOLARES es = R$${reales} REALES`);*/

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.
/*
function areaPerimetro(altura,anchura){
    let area = altura*anchura;
    let perimetro = (altura+anchura)*2;
    return console.log(`El area es = ${area}, el perimetro es = ${perimetro}`);
}
let altura = 10;
let anchura = 5;
areaPerimetro(altura,anchura);*/

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio 
//que se proporcionará como parámetro. Considera Pi = 3,14.
/*function areaPerimetroCirculo(radio){
    let area = (radio*radio)*3.14;
    let perimetro = (2*radio*3.14);
    return console.log(`El area = ${area} y el perimetro = ${perimetro}`);
}
let radio = 20;
areaPerimetroCirculo(radio);*/

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
/*function tablaMultiplicar(numero){
    for(var i =1 ; i<=10; i++){
        var resultado = numero *i;
        console.log(resultado);
    }
}
let numero = 10;
tablaMultiplicar(numero);*/

//Desafíos
//Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramación = ['JavaScript','C','C++','Kotlin','Python'];

//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramación.push('Java','Ruby','GoLang');

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function muestraLenguajesSeparado(){
    for(let i = 0; i<lenguajesDeProgramación.length; i++){
        console.log(lenguajesDeProgramación[i]);
    }
}
muestraLenguajesSeparado();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function muestraLenguajesSeparadoInverso(){
    for(let i = lenguajesDeProgramación.length -1 ; i >= 0; i--){
        console.log(lenguajesDeProgramación[i]);
    }
}
muestraLenguajesSeparadoInverso();
//Crea una función que calcule el promedio de los elementos en una lista de números.
let listaNumeros = [1,2,3,4,5];
function promedioNumeros(listaNumeros){
    let suma = 0;
    for( let i = 0; i<listaNumeros.length; i++){
        suma += listaNumeros[i];
    }
    return suma/listaNumeros.length;
}
promedioNumeros(listaNumeros);


//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function numeroMayorMenor(listaNumeros2){
    let minimo = listaNumeros2[0];
    let maximo = listaNumeros2[0];
    //Para minimos
    for(let i = 1; i < listaNumeros2.length; i++ ){
        if(listaNumeros2[i]>maximo){
            maximo = listaNumeros2[i];
        }if(listaNumeros2[i]<minimo){
            minimo = listaNumeros2[i];
        }
    }
    console.log(`El minimo es: ${minimo} y el Maximo es: ${maximo}`);

}
let listaNumeros2 = [10,2,30,45,50,-1];
numeroMayorMenor(listaNumeros2);

//Crea una función que devuelva la suma de todos los elementos en una lista.
function sumaElementos(listaNumeros3){
    suma = 0;
    for(let i = 0; i < listaNumeros3.length; i++){
        suma = suma + listaNumeros3[i];
    }
    return console.log(suma);
}
let listaNumeros3 = [10,20,30,40];
sumaElementos(listaNumeros3);

//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
//o -1 si no existe en la lista.
function encuentraIndice(listaNombre, elemento){
    for(let i = 0; i < listaNombre.length ; i++){
        if(listaNombre[i] == elemento){
            return i; //Retorna el indeice del elemento encontrado
        }
    }
    return -1;
}
let listaNombre = ['Alan','David','Edgar','Mauricio','Carlos'];
encuentraIndice(listaNombre,);



//Crea una función que reciba dos listas de números del mismo tamaño y 
//devuelva una nueva lista con la suma de los elementos uno a uno.
function sumaDosListas(lista1,lista2){
    let sumaDeDosLista = [];
    for( i = 0; i<lista1.length; i++){
        sumaDeDosLista[i]= lista1[i]+lista2[i];
    }
    return console.log(sumaDeDosLista);
}
lista1 = [5,2,3];
lista2 = [3,8,9];
sumaDosListas(lista1,lista2);


//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoCadaNumero(listaNueva){
    let resultadoCuadrado = [];

    for(i = 0; i < listaNueva.length; i++){
        resultadoCuadrado[i]= Math.pow(listaNueva[i],2);
    }
    return console.log(resultadoCuadrado);
}

listaNueva = [2,5,10,20];
cuadradoCadaNumero(listaNueva); 

