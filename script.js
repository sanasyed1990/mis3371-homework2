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

document.getElementById("reviewOutput").innerHTML=
`<table border="1">
<tr><td>Name</td><td>${f} ${l}</td></tr>
<tr><td>Email</td><td>${e}</td></tr>
</table>`;
}
