emailjs.init("YOUR_PUBLIC_KEY");

const form = document.getElementById("contact-form");

const statusText = document.getElementById("form-status");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )

    .then(() => {

        statusText.innerHTML = "Message sent successfully ✅";

        form.reset();

    })

    .catch(() => {

        statusText.innerHTML = "Failed to send message ❌";

    });

});