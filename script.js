function updateSlider() {
    let value = document.getElementById("salary").value;
    document.getElementById("salaryValue").innerText = value;
}

function validatePassword() {
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
        alert("Passwords do not match");
        return false;
    }
    return true;
}

function reviewForm() {
    let first = document.getElementById("firstName").value;
    let last = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let output = `
    <table border="1">
        <tr><td>Name</td><td>${first} ${last}</td></tr>
        <tr><td>Email</td><td>${email}</td></tr>
        <tr><td>Phone</td><td>${phone}</td></tr>
    </table>
    `;

    document.getElementById("reviewOutput").innerHTML = output;
}
