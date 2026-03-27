function updateSlider(){
let v=document.getElementById("salary").value;
document.getElementById("salaryValue").innerText="$"+v;
}

function validatePassword(){
let p=document.getElementById("password").value;
let c=document.getElementById("confirmPassword").value;

if(p!==c){
alert("Passwords do not match");
return false;
}
return true;
}

function reviewForm(){
let f=document.getElementById("firstName").value;
let l=document.getElementById("lastName").value;
let e=document.getElementById("email").value;
let ph=document.getElementById("phone").value;

document.getElementById("reviewOutput").innerHTML=
`<table border="1" style="width:100%">
<tr><th colspan="2">Review</th></tr>
<tr><td>Name</td><td>${f} ${l}</td></tr>
<tr><td>Email</td><td>${e}</td></tr>
<tr><td>Phone</td><td>${ph}</td></tr>
</table>`;
}
