export default function contact(info) {
    const contact = document.createElement("div");
    contact.className = "mt-14 text-center text-2xl border-black border-double border-4 col-start-4 col-span-6 bg-blue-300 bg-opacity-40";
    contact.innerHTML = ' <p class=" text-3xl">Contact</p> <p>We are available during open hours, so call or email to make an order for pickup!</p> <p>Phone: 202-555-0719</p> <p>Email: steve@delitakeout.com</p>';
    info.appendChild(contact);
}