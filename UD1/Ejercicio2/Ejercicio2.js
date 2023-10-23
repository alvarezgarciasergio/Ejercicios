const hora =15

/*if (hora>=7 && hora <12){
    console.log ("Buenos días")
}else if (hora>=12 && hora <20){
    console.log ("Buenas tardes")
}else if ((hora>=20 && hora<=23) || (hora >=0 && hora<2)){
    console.log ("Buenas noches")
}else{
console.log("¿Que haces despierto a estas horas?")
}*/

switch (true) {
    case hora >= 7 && hora < 12:
        console.log("Buenos días");
        break;
    case hora >= 12 && hora < 20:
        console.log("Buenas tardes");
        break;
    case (hora >= 20 && hora <= 23) || (hora >= 0 && hora < 2):
        console.log("Buenas noches");
        break;       
    default:
        console.log("¿Qué haces despierto a estas horas?");

}
