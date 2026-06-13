function updateClock(){

    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("time")
    .innerHTML = time;

}

setInterval(updateClock,1000);

updateClock();



const hour = new Date().getHours();

let greeting = "";

if(hour < 12){
    greeting = "Good Morning, Sena";
}
else if(hour < 18){
    greeting = "Good Afternoon, Sena";
}
else{
    greeting = "Good Evening, Sena";
}

document.getElementById("greeting")
.innerHTML = greeting;
