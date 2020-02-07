const input = document.getElementsByTagName("input");
// const form_login = document.getElementById('form_login');
input[input.length - 1].style.display = "none";
input[
  input.length - 1
].previousElementSibling.previousElementSibling.style.display = "none";

////////////////////Login~sign-up//////////////////////
const form_signup = document.getElementById("form_signup"),
  form_login = document.getElementById("form_login");


const button_signup = document.getElementById("signup"),
  button_login = document.getElementById("login");

input.password1_signup.addEventListener("keypress", password_again);
form_signup.addEventListener("submit", signUp);
form_login.addEventListener("submit", login);
////////////////Functions///////////////////
function signUp() {
  event.preventDefault();
  if (input.password1_signup.value === input.password2_signup.value) {
    (async () => {
      try {
        const rawResponse = await fetch("http://localhost:5000/user/signup", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: input.email_signup.value.toString(),
            password: input.password1_signup.value.toString()
          })
        });

        const content = await rawResponse.json();
        console.log(content);
        alert("SInged up sucessfully! You can now login.");
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    })();
  }
}

function login() {
  event.preventDefault();
  (async () => {
    try {
      const rawResponse = await fetch("http://localhost:5000/user/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: input.login_email.value.toString(),
          password: input.login_password.value.toString()
        })
      });

      const content = await rawResponse.json();
      if(content.message){
        alert(content.message)
        return;
      }
      alert('Logged in successfully')
    } catch (err) {
      console.log(err);
    }
  })();
}

function password_again() {
  input[input.length - 1].style.display = "block";
  input[
    input.length - 1
  ].previousElementSibling.previousElementSibling.style.display = "inline";
  button_signup.style.display = 'block';
}
/////////////////////////////////////////////////////////////////////////////
