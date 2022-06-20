{
    const welcome = () => {
        console.log("Dzień dobry wszystkim!");
    }
    welcome();

    const toggleBackground = () => {
        let body = document.querySelector(".body");
        let theme = document.querySelector(".theme");
        body.classList.toggle("dark");
        theme.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }

    const init = () => {
        let tlo = document.querySelector(".tlo");
        tlo.addEventListener("click", toggleBackground);
    }
    init();
}

{
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
}