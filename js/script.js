{ //blok
    const welcome = () => { //funkcja która zajmuje się przewitaniem
        console.log("Dzień dobry wszystkim!");
    }
    welcome();

    const toggleBackground = () => { // funkcja która zajmuje się przełączeniem
        let body = document.querySelector(".js-body");
        let theme = document.querySelector(".theme");
        body.classList.toggle("dark");
        theme.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }

    const init = () => { // główna funkcja która odpala się na samym początku
        let background = document.querySelector(".background");
        background.addEventListener("click", toggleBackground);
    }
    init(); // wywołanie głównej funkcji
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