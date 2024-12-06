document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault();
    const name  = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log('form woking')
    console.log(name + " " + phone + " " + email + " " + message)
})