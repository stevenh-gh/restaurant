export default function addEventListener() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");
    const info = document.querySelector("#info");

    home.addEventListener("click", () => {
        info.innerHTML = "";

    });

    menu.addEventListener("click", () => {
        info.innerHTML = "";
    });

    contact.addEventListener("click", () => {
        info.innerHTML = "";
    });
}