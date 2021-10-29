

//TODO: 1.DONE Elements separats per "$"
function separats01(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var retorno="";
    array.map(valor=> retorno +=valor +"$");
    document.getElementById("solucion").innerHTML=retorno
}

//TODO: 2.DONE Concatenar un array
function concat02(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
     var concat=array.join('');
    document.getElementById("solucion").innerHTML=concat;

    }


//TODO: 3.DONE Eliminar el 2on element.
function splice03(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    array.splice(1,1);
    document.getElementById("solucion").innerHTML=array;

}

//TODO: 4.DONE Eliminar 2on element i afegir nous

function splice04(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
     array.splice(1,1,"Doe",  3.1415)
    document.getElementById("solucion").innerHTML=array;


}

//TODO: 5.DONE Ordenar alfabeticament
function strOrdenaMajor05(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var orden=array.sort();
    document.getElementById("solucion").innerHTML=orden;
}

//TODO: 6.DONE Ordenar de Menor a Major
function numOrdenaMajor06(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var orden= array.sort()
       document.getElementById("solucion").innerHTML= orden;

}

//TODO: 7.DONE Ordenar de Major a Menor
function numOrdenaMenor07(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
       document.getElementById("solucion").innerHTML= array.sort();
       document.getElementById("solucion").innerHTML= array.reverse();

}

//TODO: 8. DONE Ordenar els elements per la seva longitud
function strOrdenaPerLong08(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    array.sort(function(a, b){
        // ASC  -> a.length - b.length
        // DESC -> b.length - a.length
        return b.length - a.length;
      });
      document.getElementById("solucion").innerHTML=array;
}

//TODO: 9. DONE Medir la longitud dels elements
function strArrayLongituds09(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    for (let i = 0; i < array.length; i++) {
    var longiud= array.map(x => x.length);

    document.getElementById("solucion").innerHTML=longiud;
    }

}

//TODO: 10.DONE Seperar els elements amb "-"
function strCreaFraseGuions10(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var retorno="";
    array.map(valor=> retorno +=valor +"-");
    document.getElementById("solucion").innerHTML=retorno
      
    }
    

//TODO: 11. Fer un Acronim 
function strCreaAcronim11(){
    var str= document.getElementById("num").value;
    let array = str.split(',');     
    if (array.length > 1) {
        initials += array[array.length - 1].substring(0, 1).toUpperCase();
        document.getElementById("solucion").innerHTML=initials;
    }
    


}
//TODO: 12.DONE Eliminar inferiors a 5 length
function strFiltreLongitud12(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    for (let i = 0; i < array.length; i++) {
    if(array.length <5){
        array.splice(i,i);
        document.getElementById("solucion").innerHTML=array;
    }
    }
}

 
 //TODO: 13. DONE Fer una suma utilitzant un foreach   
 
function numSumaForeach13(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    
    var total=0;
        array.forEach(function(value){
            total+= parseInt(value);
            }
        
    );
    
    
    
    document.getElementById("solucion").innerHTML=total;
}
    
    /* Ejecutamos */
    
    //La función de suma
    
     //Resultado


//TODO: 14. Contar la
function strOcurrencies14(){
    var indices= [];    
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var element = 'la';
    var idx = array.indexOf(element);    
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
      }
    document.getElementById("solucion").innerHTML=  indices;
        
    }
    




//TODO: 15. DONE Suma utilitzant reduce()
function numSumaReduce15(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    const reducer = (accumulator, curr) => parseInt( accumulator) + parseInt(curr);
    document.getElementById("solucion").innerHTML=array.reduce(reducer);

}

//TODO: 16.DONE str mes alt utilitzant forEach
function numMaxForeach16(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 
    var maximum = Number.MIN_SAFE_INTEGER;


array.forEach(function(value){
  if(value > maximum) {
    maximum = parseInt(value);
  }
});
document.getElementById("solucion").innerHTML=  maximum;

}

//TODO: 17. Colocar el 1er i Darrer eleemnt
function restructuraArray17(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 

}

//TODO: 18. Fer un array Capicua 3elements
function capCuaArray18(){
    var str= document.getElementById("num").value;
    let array = str.split(','); 

}