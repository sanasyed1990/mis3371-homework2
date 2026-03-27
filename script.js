// Update slider value
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

// Review form (FINAL VERSION)
function reviewForm(){

    let f = document.getElementById("firstName").value;
    let l = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip").value;
    let user = document.getElementById("userId").value;

    let gender = document.querySelector('input[name="gender"]:checked')?.value || "Not selected";
    let vaccine = document.querySelector('input[name="vaccine"]:checked')?.value || "Not selected";
    let insurance = document.querySelector('input[name="insurance"]:checked')?.value || "Not selected";

    let history = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(cb=>{
        history.push(cb.value);
    });

    if(history.length === 0){
        history.push("None");
    }

    let symptoms = document.getElementById("symptoms").value || "None";
    let health = document.getElementById("salary").value;

    document.getElementById("reviewOutput").innerHTML =
    `<table class="review-table">

    <tr>
    <th colspan="2">Review Information</th>
    </tr>

    <tr><td>Name</td><td>${f} ${l}</td></tr>
    <tr><td>Email</td><td>${email}</td></tr>
    <tr><td>Zip Code</td><td>${zip}</td></tr>
    <tr><td>User ID</td><td>${user}</td></tr>

    <tr><td>Gender</td><td>${gender}</td></tr>
    <tr><td>Vaccinated</td><td>${vaccine}</td></tr>
    <tr><td>Insurance</td><td>${insurance}</td></tr>

    <tr><td>Medical History</td><td>${history.join(", ")}</td></tr>
    <tr><td>Symptoms</td><td>${symptoms}</td></tr>

    <tr><td>Health Scale</td><td>${health}</td></tr>

    </table>`;
}
