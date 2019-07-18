function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomElemArray(arr) {

    //let posicion = Math.floor(Math.random() * (arr.length)) + 0;
    let posicion = getRandomNumber(arr.length, 0);

    return arr[posicion];

}




const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]
const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]




function nombreAlAzar(personaNombre) {

    let buttonChico = document.querySelectorAll("body > div > div > div > div > div > a")
    let buttonChica = document.querySelectorAll("body > div > div > div > div > div > div > a")
    let inputNombreAlAzar = document.querySelectorAll("body > div > div > div > div > div > input")[0]

    let chicoNombre = getRandomElemArray(titulos_masculino);
    let chicaNombre = getRandomElemArray(titulos_femenino);
    let segundoNombre = getRandomElemArray(adjetivos);
    let tercerNombre = getRandomElemArray(sustantivos);
    
    
    if (personaNombre== "chico") {
        
        inputNombreAlAzar.value = chicoNombre+" "+ segundoNombre+ " " + tercerNombre;

    }
    if (personaNombre == "chica") {
        
        inputNombreAlAzar.value = chicaNombre+" "+segundoNombre+" "+tercerNombre;
    }
    
    
    

    return;

}