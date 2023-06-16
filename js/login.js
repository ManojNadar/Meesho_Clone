function loginForm(event) {
  event.preventDefault();

  let login_email = document.getElementById("login_email").value;
  let login_password = document.getElementById("login_password").value;

  // alert("clicked");

  if (login_email && login_password) {
    let meesho_reg_users = JSON.parse(
      localStorage.getItem("meesho_userDetails")
    );
    let flag = false;
    let current_meesho_user;
    for (let i = 0; i < meesho_reg_users.length; i++) {
      if (
        login_email === meesho_reg_users[i].userEmail &&
        login_password === meesho_reg_users[i].userPassword
      ) {
        flag = true;
        current_meesho_user = meesho_reg_users[i];
      }
    }

    if (flag) {
      localStorage.setItem(
        "Current_meesho_user",
        JSON.stringify(current_meesho_user)
      );
      alert("Logged in success");
      window.location.href = "../html/home.html";
    } else {
      alert("invalid Credentials");
      document.getElementById("login_email").value = "";
      document.getElementById("login_password").value = "";
    }
  } else {
    alert("All Fields are mandatory");
  }
}
