var equip_ciclista = {
    team: "alfa-lum-1984",
    ciclistes: [{
        nom: "Juan Alonso",
        born: "8/01/1958",
        height: 1.92,
        tours: 0,
        wins: 12,
      },
      {
        nom: "Josh Pantano",
        born: "25/10/2000",
        height: 1.84,
        tours: 3,
        wins: 12,
      },
      {
        nom: "Bid Seville",
        born: "12/07/1993",
        height: 1.88,
        tours: 3,
        wins: 3
      },
      {
        nom: "Zolz Brucker",
        born: "08/09/1984",
        height: 1.72,
        tours: 0,
        wins: 1,
      },
      {
        nom: "Otto Verdes",
        born: "19/2/1979",
        height: 1.92,
        tours: 0,
        wins: 12,
      },
      {
        nom: "Bert Poel",
        born: "03/06/1995",
        height: 1.99,
        tours: 1,
        wins: 2,
      },
    ],
  }

//TODO: Imprimir noms
  function ImprimirNom01(){
        let txt = "";
        for(let i in equip_ciclista.ciclistes){
          txt += "Nombre:" + equip_ciclista.ciclistes[i].nom + " "+ "<br>";
          txt += "Nacimiento: " + equip_ciclista.ciclistes[i].born + " "+ "<br>";
          txt += "Altura: "+ equip_ciclista.ciclistes[i].height+ " "+ "<br>";
          txt += "Tours Ganados: "+ equip_ciclista.ciclistes[i].tours+ " " + "<br>"; 
          txt += "Victorias: "+ equip_ciclista.ciclistes[i].wins + "<br>" + "<br>";
        }
        document.getElementById("resultatP").innerHTML = txt;
  }

//TODO: 2. Ordenar noms alfabeticament .DONE
  function NomsAlfabeticament02(){
    function SortArray(x, y){
      if (x.nom < y.nom) {return -1;}
      if (x.nom > y.nom) {return 1;}
      return 0;
  }
  var s = equip_ciclista.ciclistes.sort(SortArray);
    

    let txt = "";
    for(let i in equip_ciclista.ciclistes){
      txt += "Nombre:" + equip_ciclista.ciclistes[i].nom + " "+ "<br>";
      txt += "Nacimiento: " + equip_ciclista.ciclistes[i].born + " "+ "<br>";
      txt += "Altura: "+ equip_ciclista.ciclistes[i].height+ " "+ "<br>";
      txt += "Tours Ganados: "+ equip_ciclista.ciclistes[i].tours+ " " + "<br>"; 
      txt += "Victorias: "+ equip_ciclista.ciclistes[i].wins + "<br>" + "<br>";
    }
    document.getElementById("resultatP").innerHTML = txt;
  }

  //TODO: 3. Ordentats per altura
  function NomsAltura03(){
    function SortArray(x, y){
      if (x.height < y.height) {return -1;}
      if (x.height > y.height) {return 1;}
      return 0;
  }
  var s = equip_ciclista.ciclistes.sort(SortArray);
    

    let txt = "";
    for(let i in equip_ciclista.ciclistes){
      txt += "Nombre:" + equip_ciclista.ciclistes[i].nom + " "+ "<br>";
      txt += "Nacimiento: " + equip_ciclista.ciclistes[i].born + " "+ "<br>";
      txt += "Altura: "+ equip_ciclista.ciclistes[i].height+ " "+ "<br>";
      txt += "Tours Ganados: "+ equip_ciclista.ciclistes[i].tours+ " " + "<br>"; 
      txt += "Victorias: "+ equip_ciclista.ciclistes[i].wins + "<br>" + "<br>";
    }
    document.getElementById("resultatP").innerHTML = txt;
  }
  

  //TODO: 4. Ordenats de Millor a Pitjor DONE
  function MillorPitjor04(){
    function SortArray(x, y){
      if (x.tours > y.tours) {return -1;}
      if (x.tours < y.tours) {return 1;}
      if(x.tours == y.tours){
        if (x.wins > y.wins) {return -1;}
        if (x.wins < y.wins) {return 1;}
      }
      return 0;
  }
  var s = equip_ciclista.ciclistes.sort(SortArray);
    

    let txt = "";
    for(let i in equip_ciclista.ciclistes){
      txt += "Nombre:" + equip_ciclista.ciclistes[i].nom + " "+ "<br>";
      txt += "Nacimiento: " + equip_ciclista.ciclistes[i].born + " "+ "<br>";
      txt += "Altura: "+ equip_ciclista.ciclistes[i].height+ " "+ "<br>";
      txt += "Tours Ganados: "+ equip_ciclista.ciclistes[i].tours+ " " + "<br>"; 
      txt += "Victorias: "+ equip_ciclista.ciclistes[i].wins + "<br>" + "<br>";
    }
    document.getElementById("resultatP").innerHTML = txt;
  }
  
  //TODO: 5.Afagir un tour
  function MapTour05(){



  }
    
 
  

  //TODO: Eliminar ciclistes menors de 30
  function FilterMenors06(){
  equip_ciclista.ciclistes.filter((item) => item.id !== 1);
  }

  //TODO: Trobar el 1er ciclista major de 30
  function FindMajors07(){

  }
  //TODO: Afegir un ciclista a la posició 2
  function AfegirCiclista08(){

    equip_ciclista.ciclistes.push(
      {
      nom: "Josh Pantano",       
    born: "30/11/1995",       
    height: 1.88,     
    tours: 2,    
     wins: 9})

     let txt = "";
    for(let i in equip_ciclista.ciclistes){
      txt += "Nombre:" + equip_ciclista.ciclistes[i].nom + " "+ "<br>";
      txt += "Nacimiento: " + equip_ciclista.ciclistes[i].born + " "+ "<br>";
      txt += "Altura: "+ equip_ciclista.ciclistes[i].height+ " "+ "<br>";
      txt += "Tours Ganados: "+ equip_ciclista.ciclistes[i].tours+ " " + "<br>"; 
      txt += "Victorias: "+ equip_ciclista.ciclistes[i].wins + "<br>" + "<br>";
    }
    document.getElementById("resultatP").innerHTML = txt;

  }
  //TODO: Imprimir noms ordenats per edat
  function NomsEdat09(){
    function compareEvents(a, b) {
      if (a.born < b.born) {
        return -1;
      }
      if (a.born > b.born) {
        return 1;
      }
      return 0;
    }
      
    equip_ciclista.ciclistes.sort(compareEvents);


  }
