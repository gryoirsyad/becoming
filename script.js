function updateClock(){

    const now = new Date();

    const time =
        now.toLocaleTimeString("id-ID");

    const date =
        now.toLocaleDateString(
            "id-ID",
            {
                weekday:"long",
                year:"numeric",
                month:"long",
                day:"numeric"
            }
        );

    document.getElementById(
        "clock"
    ).innerText = time;

    document.getElementById(
        "date"
    ).innerText = date;

    const hour = now.getHours();

    let greeting = "";

    if(hour < 12){
        greeting = "Selamat pagi ☀";
    }
    else if(hour < 18){
        greeting = "Selamat sore 🌤";
    }
    else{
        greeting = "Selamat malam 🌙";
    }

    document.getElementById(
        "greeting"
    ).innerText = greeting;
}

updateClock();

setInterval(updateClock,1000);
