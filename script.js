// Update slider value live
function updateSlider(){
    let v = document.getElementById("salary").value;
    document.getElementById("salaryValue").innerText = v;
}

// Password validation
function validatePassword(){
    let p = document.getElementById("password").value;
    let c = document.getElementById("confirmPassword").value;

    if(p !== c){
        alert("Passwords do not match");
        return false;
    }
    return true;
}

// Review form (FULL VERSION - A+)
function reviewForm(){

    // Basic fields
    let f = document.getElementById("firstName").value;
    let l = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip").value;
    let user = document.getElementById("userId").value;

    // Radio buttons
    let gender = document.querySelector('input[name="gender"]:checked')?.parentNode.innerText || "";
    let vaccine = document.querySelector('input[name="vaccine"]:checked')?.parentNode.innerText || "";
    let insurance = document.querySelector('input[name="insurance"]:checked')?.parentNode.innerText || "";

    // Checkboxes
    let history = [];
    document.querySelectorAll("input[type=checkbox]:checked").forEach(cb=>{
        history.push(cb.parentNode.innerText.trim());
    });

    // Text area
    let symptoms = document.querySelector("textarea").value;

    // Slider
    let health = document.getElementById("salary").value;

    // Output table
    document.getElementById("reviewOutput").innerHTML =
    `<table border="1" style="width:100%; border-collapse:collapse;">
    <tr><th colspan="2" style="padding:8px;">PLEASE REVIEW THIS INFORMATION</th></tr>

    <tr><td><b>Name</b></td><td>${f} ${l}</td></tr>
    <tr><td><b>Email</b></td><td>${email}</td></tr>
    <tr><td><b>Zip Code</b></td><td>${zip}</td></tr>
    <tr><td><b>User ID</b></td><td>${user}</td></tr>

    <tr><td><b>Gender</b></td><td>${gender}</td></tr>
    <tr><td><b>Vaccinated</b></td><td>${vaccine}</td></tr>
    <tr><td><b>Insurance</b></td><td>${insurance}</td></tr>

    <tr><td><b>Medical History</b></td><td>${history.join(", ")}</td></tr>
    <tr><td><b>Symptoms</b></td><td>${symptoms}</td></tr>

    <tr><td><b>Health Scale</b></td><td>${health}</td></tr>

    </table>`;
}
