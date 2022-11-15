// déclaration des variables
let myNumber = 12;
let myString = "12";
let min = 10;
let max = 20;

console.log("myNumber = 12 ?:" , myNumber);
console.log(myNumber == undefined);

if (myNumber >=10 && myNumber <=20){
    console.log("true")
}

if(myNumber >=min && myNumber <= max){
    console.log("true")
}

console.log(myNumber==myString);
console.log(myNumber===myString);


// if...else
let myHour = prompt("Quelle heure est-il (à 1 heure près) ?");


if(myHour<12){
    console.log("On est le matin");
} else if (myHour >= 12 && myHour<19) {
    console.log("On est l'après-midi");
} else if (myHour >=19 && myHour<=23) {
  console.log("C'est le soir");
} else if (myHour==24){
    console.log("Il est minuit");
} else {
    console.log("Un nouveau jour commence");
}


//switch...case

let am = "Matin";
let ap = "Après-midi";
let soir = "Soir";

switch (ap) {
    case "Matin" :
    console.log("C'est l'heure du café");
        break;

    case  "Après-midi" :
        console.log(" C'est l'heure du thé");
    break;

    case "Soir" :
    console.log("C'est le moment de l'infusion");
    break; 

    default:"Buvons de l'Eau"
        break;
}

let heure = soir;

if (heure == am){
    console.log("C'est l'heure du café");
} else if (heure == ap){
    console.log("C'est l'heure du thé");
} else if (heure == soir){
    console.log("C'est le moment de l'infusion");
} else{
    console.log("Buvons de l'eau");
}