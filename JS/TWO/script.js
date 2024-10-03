let rand = Math.random();
let first , second , third;

if(rand>0.33){
    first = "Crazy";

}

else if(rand>0.33 && rand<=0.66){
    first = "Amazing";

}
else{
    first=  "Fire";

}

//

let rand1 = Math.random();


if(rand1>0.33){
    second = "Engine";

}

else if(rand1>0.33 && rand1<=0.66){
    second = "Food";

}
else{
    second=  "Garments";

}

let rand2 = Math.random();


if(rand2>0.33){
    third = "Pvt";

}


else if(rand2>0.33 && rand2<=0.66){
    third = "Limited";

}
else{
    third=  "Hub";

}


console.log(`${first} ${second} ${third}`);







