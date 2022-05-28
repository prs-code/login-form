const loginBtn = document.querySelector(".firstbnt");
const loginForm = document.querySelector(".loginform");
const closeBtn = document.querySelector(".fa-times");
const password = document.querySelector(".password");
const eye = document.querySelector(".fa-eye");
const eyeSlash = document.querySelector(".fa-eye-slash");

loginBtn.addEventListener("click", openForm);
 function openForm () {
     loginBtn.style.display= "none";
     loginForm.style.display= "block";
 };

 closeBtn.addEventListener("click", () => {
    loginBtn.style.display= "block";
    loginForm.style.display= "none";
 })

 eye.onclick = showPass;
 eyeSlash.onclick = showPass;

function showPass () {
    if (password.type === "password") {
        password.type = "text";
        eye.style.display="none";
        eyeSlash.style.display="block";
    } else {
        password.type = "password";
        eye.style.display="block";
        eyeSlash.style.display="none";
    }
}