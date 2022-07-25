import clearMessage from "./clear.js";
const form = document.querySelector("form");
const thanks = document.querySelector("#thanks");

console.dir(thanks);

console.log(clearMessage);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = event.target.name.value;
    let message = event.target.message.value;

    fetch("/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            message,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            thanks.innerText = `Thanks ${data.name} for your message.`;
            event.target.message.value = "";
            clearMessage(thanks, 3000);
        });
});
