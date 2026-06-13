function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("id-ID");

    const date = now.toLocaleDateString(
        "id-ID",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;

    const hour = now.getHours();

    let greeting = "";

    if (hour < 12) {
        greeting = "Selamat pagi ☀";
    } else if (hour < 18) {
        greeting = "Selamat sore 🌤";
    } else {
        greeting = "Selamat malam 🌙";
    }

    const greetingEl = document.getElementById("greeting");

if(greetingEl){
    greetingEl.textContent = greeting;
}
}

updateClock();
setInterval(updateClock, 1000);

const themeBtn =
    document.getElementById("themeToggle");

themeBtn.onclick = () => {

    document.body.classList.toggle(
        "light-mode"
    );

};
