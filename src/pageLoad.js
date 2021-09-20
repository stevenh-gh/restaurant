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

    const title = document.createElement("div");
    title.className = "grid grid-cols-12 gap-x-5";

    const h1 = document.createElement("h1");
    h1.innerText = "steve's deli & takeout";
    h1.className = "mt-5 col-start-3 col-span-8 text-center text-8xl capitalize font-serif border-double border-4 border-black";

    title.appendChild(h1);

    main.appendChild(title);
    content.appendChild(main);

    // tabbed content
    const info = document.createElement("div");
    info.className = "grid grid-cols-12 gap-x-5";
    info.id = "info";

    //home content
    const homecontent = document.createElement("div");
    homecontent.className = "mt-14 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    homecontent.innerText = "Weclome to Steve's Deli & Takeout! We offer a wide variety of deli sandwiches and stir-fry meals for takeout. Family business since the 1850's!"

    const hours = document.createElement("div");
    hours.className = "mt-5 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    hours.innerHTML = ' <p class="capitalize text-3xl">hours open</p> <table class="mt-2 text-left capitalize mx-auto"> <tr> <td>sunday:</td> <td>closed</td> </tr> <tr> <td>monday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>tuesday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>wednesday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>thursday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>friday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>saturday:</td> <td class=" uppercase">9am-7pm</td> </tr> </table>'

    const location = document.createElement("div");
    location.className = "mt-5 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    location.innerHTML = ' <p class=" text-3xl">Location</p> <p>Somewhere in a food show that takes place on some country...</p>';

    info.appendChild(homecontent);
    info.appendChild(hours);
    info.appendChild(location);
    main.appendChild(info);

}