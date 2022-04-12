const contactForm = document.getElementById("contact-form")
var regName = /^[a-zA-Z]+ [a-zA-Z]+$/

contactForm.onsubmit = function(event) {
    event.preventDefault()
    const name = event.target.name.value
    const email = event.target.email.value
    const phone = event.target.phone.value
    const message = event.target.message.value
    if (name != "" && email != "" && message != "") {
        console.log("All it's right")
        event.target.submit()
        i1.value = ""
        i2.value = ""
        i3.value = ""
        errorDiv.innerHTML = ""
        if (!regName.test(name)) {
            alert('Invalid name given.');
        } else {
            alert('Valid name given.');
        }
    } else {
        errorDiv.innerHTML = ""
        const p = document.createElement("p")
        p.innerText = "The fields can't be empty! Please write them"
        errorDiv.appendChild(p)
    }



}