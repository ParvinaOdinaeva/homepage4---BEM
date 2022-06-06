console.log("Dzień dobry wszystkim!")

let tlo = document.querySelector(".tlo");
let body = document.querySelector(".body");
let theme = document.querySelector(".theme");

tlo.addEventListener("click", () => {
    body.classList.toggle("dark");
    theme.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
});


let button = document.querySelector(".button");
let note = document.querySelector(".note");
let word = document.querySelector(".word");

button.addEventListener("click", () => {
    note.classList.toggle("hide");
    if (note.classList.contains("hide")) {
        word.innerText = "Pokaż:";
    } else {
        word.innerText = "Ukryj:";
    }
});

