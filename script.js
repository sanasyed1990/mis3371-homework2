function updateSlider(){
    document.getElementById("salaryValue").innerText =
    document.getElementById("salary").value;
}

function validatePassword(){
    let p = document.getElementById("password").value;
    let c = document.getElementById("confirmPassword").value;

    if(p !== c){
        alert("Passwords do not match");
        return false;
    }
    return true;
}

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

    // VALIDATION
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

    document.getElementById("reviewOutput").innerHTML =
    `<table style="width:100%;">

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

    <tr>
    <td>Gender</td>
    <td>${gender}</td>
    <td style="color:green">pass</td>
    </tr>

    <tr>
    <td>Vaccinated</td>
    <td>${vaccine}</td>
    <td style="color:green">pass</td>
    </tr>

    <tr>
    <td>Medical History</td>
    <td>${history.join(", ")}</td>
    <td style="color:green">pass</td>
    </tr>

    <tr>
    <td>Symptoms</td>
    <td>${symptoms}</td>
    <td style="color:green">pass</td>
    </tr>

    <tr>
    <td>Health Scale</td>
    <td>${health}</td>
    <td style="color:green">pass</td>
    </tr>

    </table>`;
} 
