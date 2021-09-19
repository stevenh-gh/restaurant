export default function pageLoad() {
    const content = document.getElementById("content");
    content.classList.add("container", "m-auto");

    // navbar
    const nav = document.createElement("nav");
    nav.className = "capitalize flex justify-around bg-blue-200 rounded-md";

    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");
    const classes = "p-4 text-xl hover:bg-blue-300 transform hover:scale-110";

    home.innerText = "home";
    menu.innerText = "menu";
    contact.innerText = "contact";
    home.classList = classes;
    menu.classList = classes;
    contact.classList = classes;

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    content.appendChild(nav);

    // main
    const main = document.createElement("main");
    main.className = "bg-food h-full bg-no-repeat bg-cover";

}