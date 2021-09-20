import welcome from "./welcome.js";
import homecontent from "./home.js";

export default function addEventListener() {
    const home = document.querySelector("#home");
    const menu = document.querySelector("#menu");
    const contact = document.querySelector("#contact");
    const info = document.querySelector("#info");

    home.addEventListener("click", () => {
        info.innerHTML = "";

        welcome(info);
        homecontent(info);
    });

    menu.addEventListener("click", () => {
        info.innerHTML = "";
        welcome(info);
    });

    contact.addEventListener("click", () => {
        info.innerHTML = "";
        welcome(info);
    });
}