
const welcome = () => {
    console.log("Dzień dobry wszystkim!");
}
welcome();

{
    const toggleBackground = () => {
        let body = document.querySelector(".js-body");
        let theme = document.querySelector(".theme");
        body.classList.toggle("dark");
        theme.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    }


    const init = () => {
        let background = document.querySelector(".background");
        background.addEventListener("click", toggleBackground);
    }
    init();
}


{
    const hideButton = () => {
        let note = document.querySelector(".note");
        let word = document.querySelector(".word");
        note.classList.toggle("hide");
        word.innerText = note.classList.contains("hide") ? "Pokaż:" : "Ukryj:";
    }

    const init = () => {
        let button = document.querySelector(".button");
        button.addEventListener("click", hideButton);
    }
    init();

}