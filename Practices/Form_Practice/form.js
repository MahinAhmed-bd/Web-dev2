const form = document.querySelector("form");
const email = document.querySelector("#loginEmail");
const password = document.querySelector("#loginPassword");
const errorEmail = document.querySelector("#emailError");
const errorPassword = document.querySelector("#passwordError");

form.addEventListener("submit", (details)=>{
    details.preventDefault();

    errorEmail.textContent = "";
    errorPassword.textContent = "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if(!emailans){
        errorEmail.textContent = "Please input a valid email";
        errorEmail.style.display = "block";
    }

    if(!passwordans){
        errorPassword.textContent = "Please input a valid password";
        errorPassword.style.display = "block";
    }
});