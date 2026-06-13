// QUOTES
const quotes = [
  "Hidup bukan perlombaan, tetapi perjalanan.",
  "Menjadi diri sendiri adalah keberanian.",
  "Kamu tidak harus hebat untuk memulai.",
  "Setiap hari adalah kesempatan baru.",
  "Bandingkan dirimu dengan dirimu kemarin."
];

document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];


// MOOD
function setMood(mood){
    document.getElementById("mood-result").innerText =
        "Mood hari ini: " + mood;
}


// REFLECTION
const reflection = document.getElementById("reflection");

if(localStorage.getItem("reflection")){
    reflection.value =
        localStorage.getItem("reflection");
}

function saveReflection(){
    localStorage.setItem(
        "reflection",
        reflection.value
    );

    alert("Refleksi tersimpan!");
}


// TODO LIST
loadTasks();

function addTask(){

    const input =
        document.getElementById("taskInput");

    if(input.value === "") return;

    let tasks =
        JSON.parse(localStorage.getItem("tasks"))
        || [];

    tasks.push(input.value);

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    input.value = "";

    loadTasks();
}

function loadTasks(){

    const list =
        document.getElementById("taskList");

    list.innerHTML = "";

    let tasks =
        JSON.parse(localStorage.getItem("tasks"))
        || [];

    tasks.forEach(task => {

        const li =
            document.createElement("li");

        li.textContent = task;

        list.appendChild(li);
    });
}
