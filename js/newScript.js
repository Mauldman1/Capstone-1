let form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'email',
        document.querySelector('input[name="email"]').value
    )

    fetch("https://getform.io/f/7d646bce-2c35-438a-abcd-34600b7219a5", {
            method: "POST",
            body: formData,
    })
    .then(response => console.log(response))
    .catch(error => console.log(error))
}