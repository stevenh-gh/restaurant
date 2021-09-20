export default function menu(info) {
    const menu = document.createElement("div");
    menu.className = "mt-14 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    menu.innerHTML = '<p class=" text-3xl">Menu</p> <div class="flex"> <div class=" flex-1 text-center"> Deli sandwiches <ul class=" underline "> <li>ham sandwich</li> <li>turkey sandwich</li> <li>beef sandwich</li> </ul> </div> <div class="flex-1 text-center"> Stir-fry <ul class=" underline"> <li>fried rice</li> <li>stir fry noodles</li> <li>stir fry broccoli with sauce</li> </ul> </div> </div>'

    info.appendChild(menu);
}