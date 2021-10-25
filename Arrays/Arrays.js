var array =[];
var array= document.getElementById("numEx").value;

//TODO: 1. Elements separats per "$"
function separats01(){
    for (var i = 0; i < array.length; i++) {
        var result = "$" + array[i];
        document.getElementById("sol").innerHTML=result;
    }
    
}

//TODO: 2. Concatenar un array
function concat02(){
    var concat= array.concat();
    document.getElementById("sol").innerHTML=concat;


}

//TODO: 3. Eliminar el 2on element
function splice03(){
    array.splice(2, 1);
    document.getElementById("sol").innerHTML=array;

}

//TODO: 4. Eliminar 2on element i afegir nous
function splice04(){

}
//TODO: 5. Ordenar alfabeticament
function strOrdenaMajor05(){

}

//TODO: 6. Ordenar de Menor a Major
function numOrdenaMajor06(){
     document.getElementById("sol").innerHTML= array.sort();;

}

//TODO: 7. Ordenar de Major a Menor
function numOrdenaMenor07(){
    var ordenar=  sort(array);
    var invertir = ordenar.reverse();
    document.getElementById("sol").innerHTML=invertir;

}

//TODO: 8. Ordenar els elements per la seva longitud
function strOrdenaPerLong08(){
   
}

//TODO: 9. Medir la longitud dels elements
function strArrayLongituds09(){
     var a = array.map(x => x.length);
     document.getElementById("sol").innerHTML=a;

}

//TODO: 10. Seperar els elements amb "-"
function strCreaFraseGuions10(){
    for (let i = 0; i < array.length; i++) {
        var result =  array[i]+"-";
        document.getElementById("sol").innerHTML=result;
    }
}
//TODO: 11. Fer un Acronim 
function strCreaAcronim11(){
    
    
        
    }



//TODO: 12. Eliminar inferiors a 5 length
function strFiltreLongitud12(){
    

}

 
 //TODO: 13. Fer una suma utilitzant un foreach   
    var suma = sumar_array(array);
function numSumaForeach13(array_array){
    
    var suma = 0;
        
    array_array.forEach (function(numero){
        suma += numero;
    });
    document.getElementById("sol").innerHTML=suma;
}

//TODO: 14. Contar la
function strOcurrencies14(){
    

} 

//TODO: 15. Suma utilitzant reduce()
function numSumaReduce15(){
    

}

//TODO: 16. Valor mes alt utilitzant forEach
function numMaxForeach16(){
    

}

//TODO: 17. Colocar el 1er i Darrer eleemnt
function restructuraArray17(){
    

}

//TODO: 18. Fer un array Capicua 3elements
function capCuaArray18(){
    

}