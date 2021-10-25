function ex1(){
    var string = document.getElementById("Elegir").value;
    if(string.length != 0){
        document.getElementById("solucion").innerHTML="No Esta Vacio";

    }else{
        document.getElementById("solucion").innerHTML="Esta Vacio";
    }
}

function ex2(){
    var inverso = document.getElementById("Elegir").value;
    var invertir= inverso.split('').reverse().join(''); 
    document.getElementById("solucion").innerHTML=invertir;
}

function ex3(){
    var palabra = document.getElementById("Elegir").value;
    for(var i=0; i<palabra.length; i++){ 
        if(palabra[i] = "a"){
            var  cont = cont + 1;
        }
    }
            document.getElementById("solucion").innerHTML=cont;
}

function ex4(){
    var palabra =document.getElementById("Elegir").value;
    var result =palabra.slice(0,"a"); 
    document.getElementById("solucion").innerHTML=result;

}

function ex5(){
    var palabra = document.getElementById("Elegir").value;
    var primera= palabra.indexOf("a"); 
    var ultima= palabra.reverse().indexOf("a");
    document.getElementById("solucion").innerHTML=primera;
    document.getElementById("solucion").innerHTML=ultima;

}

function ex6(){
    var palabra = document.getElementById("Elegir").value;
    var result= palabra.replace("la", ' '); 
    document.getElementById("solucion").innerHTML=result;
}

function ex7(){
    let text = document.getElementById("Elegir").value; 
    var result=  text.replace(/la/i,"*"); 
    document.getElementById("solucion").innerHTML=result;
}

function ex8(){
    var palabra = document.getElementById("Elegir").value;
    var inicio = palabra.substring(0,1) 
    palabra = (inicio).slice(0,palabra.length)
    document.getElementById("solucion").innerHTML=resultat;
}

function ex9(){
    var frase = document.getElementById("Elegir").value;
    var resultat =  frase.replace(/ /g, "")
    document.getElementById("solucion").innerHTML= resultat;
}

function ex10(){
    var palabra = document.getElementById("Elegir").value;
    var result = palabra.replace(/" "/,'-'); 
    document.getElementById("solucion").innerHTML=result;
}

function ex11(){
    var palabra = document.getElementById("Elegir").value;
    document.getElementById("solucion").innerHTML =resultat;

}

function ex12(){
    var correo =document.getElementById("Elegir").value;
    var validacion = (/^([a-zA-Z0-9])+\@(( [a-zA-Z0-9\-])+\.)+("net"||"com"||"org")$/);
    if(correo== validacion){
        document.getElementById("solucion").innerHTML="Correo Correcto";
    }else{
        document.getElementById("solucion").innerHTML="Correo Incorrecto";
    }
}

function ex13(){
    var numero = parseInt(document.getElementById("Elegir").value);
    if(numero >= 0){ 
        document.getElementById("solucion").innerHTML="Es Positiu";
    }else if(numero < 0){
        document.getElementById("solucion").innerHTML="Es Negatiu";
    }
    
}

function ex14(){
    var numero = document.getElementById("Elegir").value;
    var result= isNaN(numero); 
    if(result){
        document.getElementById("solucion").innerHTML=" No Es un numero";
    }else{
        document.getElementById("solucion").innerHTML="Es un numero";
    }

 
}

function ex15(){
    var num = document.getElementById("Elegir").value;
    var result = num.toFixed(0);3 
    document.getElementById("solucion").innerHTML=result;
}

function ex16(){
    var num=0;
    var palabra =document.getElementById("Elegir").value;
    num= (palabra + " ").split(".");
    document.getElementById("solucion").innerHTML=num;
}

function ex17(){
    var num= parseInt(document.getElementById("Elegir").value);
    var div = num/19; 
    var result= div.toFixed(3);
    document.getElementById("solucion").innerHTML=result;
    }
