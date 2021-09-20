export default function welcome(info) {
    const homecontent = document.createElement("div");
    homecontent.className = "mt-14 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    homecontent.innerText = "Weclome to Steve's Deli & Takeout! We offer a wide variety of deli sandwiches and stir-fry meals for takeout. Family business since the 1850's!"
    info.appendChild(homecontent);
}