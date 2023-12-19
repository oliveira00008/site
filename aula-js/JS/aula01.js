//selecionando um elementos atraves do js essa sao as as 4 forma

//document.getElementById('texto')
//.innerHTML = 'ola mundo meu primeiro texto <b>JS</b>';

//segundo metodo  

//document.write('esse e o segundo metodo document.write');

// 3 metodo  com alerte

// alert(10 + 5);

// 4 modo e o console.log

//console.log("oi isso e um console.log");


//declaraçoes de javascript tudo que ta acima e uma declaraçaes semple usar ; para separar

/*let a,b,c;
a=5;
b=6;
c=7;
*/

/* Como escrever no js a nossa sintax*/

//console.log(5 + 5)//numero
//console.log("5 + 5")//texto string


// AULA 6 DE JAVA SCRIPT

//vamos emteder sobre as variavel 

//No javascript temos 3 tipo de variavel a (var , let, const.).


//var pote = "bombom"
//alert("pote")

/*var a = 3;
var b = 5; 
var c = 6;
alert(a + (c * b ));
*/

//poderia fazer assim 

//DECLARAÇAO DE VARIAVEL

//var a,b,c ;

//ATRIBUIÇAO DAS VARIAVEL POSSO REATRIBUIR VALORES 
/*a = 3 ;
b = 5;
c = a + b;*/

/*exemplo  var a = 7;*/
//alert(a);

//outro exemplo sobre a variavel (VAR)
//comcatenizaçao de palavras

/*var nome, sobreNome, nomeCompleto;

nome = "Gabriel";
sobreNome = "Alves";
nomeCompleto = nome + " "+ sobreNome;

document.getElementById("texto")
.innerHTML = nomeCompleto;
*/

//oque siginifica (var)
/*
 (var) -> pode ser redeclarado a qual quer momento 
 (let )--> vai pegar o valor uma ves e nao pode ser reatribuido  mas pode ter mudança em bloco {...}
 (const )---> Nao tem como mudar o valoer e aquele e jaera
 */

 //Aula 07 operadores 

 //vamos entender sobre operadores 
 //atribuir valore coparar valore e executar valores aritimetico e muito mas

 /*Sao parado em 6 categoria 
 1) operador aritimetico +-/* >= <= == === || && != ++ --

 2) Operador de atribuiçao =<--- atribuir

 3) Operador de sequencia + sequencia

 4) operador de comparaçao == ou === !=

 5) Operador logico && || !

 6)operador condicional o ternario  exemplo >=idade

 */
 
 //ex 1 aritimetico

 /*var valor1 , valor2 ,total ;
 valor1 = 10;
 valor2 = 5;
 total = ++valor1 + valor2;
 console.log(total) 
 */

 //Ex 2 atribuiçao
 
 /*var valor1 , valor2 ,total ;
 valor1 = 10;
 valor2 = 5;

 total = valor1 += valor2
 console.log(total)*/

 //temos de concatenisaçao 

 /*var valor1 , valor2 ,total ;
 valor1 = "gabriel ";
 valor2 = "alves";
             //esse cinal nao e mas aritimetico agora e sequencia +     
 total = valor1 + valor2
console.log(total)*/

//operadores de comparaçao

/*var valor1 , valor2 ,total ;
 valor1 = 8 ;
 valor2 = 8 ;
 total = (valor1 == === != !== <= >= > < valor2);
 console.log(total)
*/
 //O perador ternario 

 /*var idade, eleitor;
 idade= 125;  // operador ternario ou condicional
 eleitor = idade
if(idade  >=  16 ){
    console.log(`voce vota tem  ${idade} ano`)
} else if(idade <= 16){
    console.log(`voce e menor de idade, voce tem ${idade} anos`)
}
*/

 



