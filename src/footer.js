export default function addfooter(content) {
    const footer = document.createElement("footer");
    footer.className = "text-center bg-blue-200 rounded-md";

    footer.innerHTML = 'Photo by <a href="https://unsplash.com/@jimmydean?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jimmy Dean</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'

    content.appendChild(footer);
}