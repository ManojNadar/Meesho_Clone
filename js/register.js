function registerForm(event) {
  event.preventDefault();
  let meesho_reg_name = document.getElementById("userName").value;
  let meesho_reg_email = document.getElementById("userEmail").value;
  let meesho_reg_password = document.getElementById("userPassword").value;
  let meesho_reg_confirmPassword = document.getElementById(
    "userConfirmPassword"
  ).value;

  //   console.log(
  //     `username :${meesho_reg_name}, userEmail : ${meesho_reg_email}, userPassword : ${meesho_reg_password}, confirmPassword : ${meesho_reg_confirmPassword}`
  //   );

  //   alert("working");

  if (
    meesho_reg_name &&
    meesho_reg_email &&
    meesho_reg_password &&
    meesho_reg_confirmPassword
  ) {
    if (
      meesho_reg_password.length >= 8 &&
      meesho_reg_confirmPassword.length >= 8
    ) {
      if (meesho_reg_password === meesho_reg_confirmPassword) {
        let meesho_user =
          JSON.parse(localStorage.getItem("meesho_userDetails")) || [];

        let flag = false;

        for (let i = 0; i < meesho_user.length; i++) {
          if (meesho_reg_email === meesho_user[i].userEmail) {
            flag = true;
          }
        }

        if (!flag) {
          let meesho_user_obj = {
            username: meesho_reg_name,
            userEmail: meesho_reg_email,
            userPassword: meesho_reg_password,
            confirmPassword: meesho_reg_confirmPassword,
          };
          meesho_user.push(meesho_user_obj);
          localStorage.setItem(
            "meesho_userDetails",
            JSON.stringify(meesho_user)
          );
          alert("Registered Successfully");
          window.location.href = "../html/login.html";
          document.getElementById("userName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("userPassword").value = "";
          document.getElementById("userConfirmPassword").value = "";
        } else {
          alert("UserEmail Already registered");
          window.location.href = "../html/login.html";
        }
      } else {
        alert("Password Doesnot Match");
      }
    } else {
      alert("Password should be atleast 8 or more Characters");
    }
  } else {
    alert("Please Fill all the Fields");
  }
}
