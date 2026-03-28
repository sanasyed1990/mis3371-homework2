// Update slider value
function updateSlider(){
    document.getElementById("salaryValue").innerText =
    document.getElementById("salary").value;
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

// Convert checkbox to Y/N
function checkYN(value, list){
    return list.includes(value) ? "Y" : "N";
}

// Convert slider to level
function getHealthLevel(val){
    if(val <= 3) return "LOW";
    if(val <= 7) return "MEDIUM";
    return "SEVERE";
}

// ===== REVIEW FUNCTION =====
function reviewForm(){

    let f = document.getElementById("firstName").value;
    let l = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let zip = document.getElementById("zip").value;
    let user = document.getElementById("userId").value;

    let dob = document.querySelector('input[placeholder="MM/DD/YYYY"]').value;

    let gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    let vaccine = document.querySelector('input[name="vaccine"]:checked')?.value || "";

    let history = [];
    document.querySelectorAll('input[type="checkbox"]:checked')
    .forEach(cb => history.push(cb.value));

    let symptoms = document.getElementById("symptoms").value;
    let health = document.getElementById("salary").value;

    // ===== VALIDATION =====
    let dobCheck = "";
    if(dob){
        let inputDate = new Date(dob);
        let today = new Date();
        dobCheck = inputDate > today ? 
        "<span style='color:red'>ERROR: Cannot be in the future</span>" :
        "<span style='color:green'>pass</span>";
    }

    let zipCheck = zip ? 
    "<span style='color:green'>pass</span>" :
    "<span style='color:red'>ERROR: Missing Zip Code</span>";

    let emailCheck = email.includes("@") ?
    "<span style='color:green'>pass</span>" :
    "<span style='color:red'>ERROR: Invalid Email</span>";

    // ===== OUTPUT =====
    document.getElementById("reviewOutput").innerHTML =

`<h3>PLEASE REVIEW THIS INFORMATION</h3>

<table style="width:100%;">

<tr>
<td>First, MI, Last Name</td>
<td>${f} ${l}</td>
<td style="color:green">pass</td>
</tr>

<tr>
<td>Date of Birth</td>
<td>${dob}</td>
<td>${dobCheck}</td>
</tr>

<tr>
<td>Email</td>
<td>${email}</td>
<td>${emailCheck}</td>
</tr>

<tr>
<td>Zip Code</td>
<td>${zip}</td>
<td>${zipCheck}</td>
</tr>

<tr>
<td>User ID</td>
<td>${user}</td>
<td style="color:green">pass</td>
</tr>

</table>

<h3>REQUESTED INFO</h3>

<table style="width:100%;">

<tr>
<td>Chicken Pox</td><td>${checkYN("Chicken Pox", history)}</td>
<td>Vaccinated?</td><td>${vaccine === "Yes" ? "Y" : "N"}</td>
</tr>

<tr>
<td>Measles</td><td>${checkYN("Measles", history)}</td>
<td>Level of Pain</td><td>${getHealthLevel(parseInt(health))}</td>
</tr>

<tr>
<td>COVID-19</td><td>${checkYN("COVID-19", history)}</td>
<td></td><td></td>
</tr>

<tr>
<td>Tetanus</td><td>${checkYN("Tetanus", history)}</td>
<td></td><td></td>
</tr>

<tr>
<td>Smallpox</td><td>${checkYN("Smallpox", history)}</td>
<td></td><td></td>
</tr>

</table>

<p><b>Described Symptoms:</b> ${symptoms}</p>

<p><b>User ID:</b> ${user}</p>
<p><b>Password:</b> ********</p>
`;
}
