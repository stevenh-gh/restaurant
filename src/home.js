export default function home(info) {
    const hours = document.createElement("div");
    hours.className = "mt-5 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    hours.innerHTML = ' <p class="capitalize text-3xl">hours open</p> <table class="mt-2 text-left capitalize mx-auto"> <tr> <td>sunday:</td> <td>closed</td> </tr> <tr> <td>monday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>tuesday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>wednesday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>thursday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>friday:</td> <td class=" uppercase">9am-7pm</td> </tr> <tr> <td>saturday:</td> <td class=" uppercase">9am-7pm</td> </tr> </table>'

    const location = document.createElement("div");
    location.className = "mt-5 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    location.innerHTML = ' <p class=" text-3xl">Location</p> <p>Somewhere in a food show that takes place on some country...</p>';

    info.appendChild(hours);
    info.appendChild(location);
}