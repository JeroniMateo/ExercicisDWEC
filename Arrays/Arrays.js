var array =[];
function separats01(){
    
     array= document.getElementById("numEx").value;
    for (let i = 0; i < array.length; i++) {
        var result = "$" + array[i];
        document.getElementById("sol").innerHTML=result;
    }
    
}

function concat02(){
     array= document.getElementById("numEx").value;
    var concat= array.concat();
    document.getElementById("sol").innerHTML=concat;


}

function splice03(){
     array= document.getElementById("numEx").value;
    array.splice(2, 1);
    document.getElementById("sol").innerHTML=array;


}
function splice04(){
     array= document.getElementById("numEx").value;

}
function strOrdenaMajor05(){
     array= document.getElementById("numEx").value;

}
function numOrdenaMajor06(){
     array= document.getElementById("numEx").value;
     
    document.getElementById("sol").innerHTML= array.sort();;

}
function numOrdenaMenor07(){
    array= document.getElementById("numEx").value;
    var ordenar=  sort(array);
    var invertir = ordenar.reverse();
    document.getElementById("sol").innerHTML=invertir;

}
function strOrdenaPerLong08(){
     array= document.getElementById("numEx").value;

}
function strArrayLongituds09(){
     array= document.getElementById("numEx").value;


}
function strCreaFraseGuions10(){
    var array= document.getElementById("numEx").value;

}
function strCreaAcronim11(){
    var array= document.getElementById("numEx").value;
  
        
    }

}
function strFiltreLongitud12(){
    var array= document.getElementById("numEx").value;

}
function numSumaForeach13(){
    var array= document.getElementById("numEx").value;

}
function strOcurrencies14(){
    var array= document.getElementById("numEx").value;

} 
function numSumaReduce15(){
    var array= document.getElementById("numEx").value;

}
function numMaxForeach16(){
    var array= document.getElementById("numEx").value;

}
function restructuraArray17(){
    var array= document.getElementById("numEx").value;

}
function capCuaArray18(){
    var array= document.getElementById("numEx").value;

}