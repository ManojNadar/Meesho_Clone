window.onload = () => {
  let profile = document.getElementById("profile");
  let profile_dropDown = document.getElementById("profile-dropDown");

  profile.addEventListener("mouseover", function () {
    profile.style.borderBottom = "2px solid red";
    profile_dropDown.style.display = "block";
  });
  profile.addEventListener("mouseleave", function () {
    profile.style.borderBottom = "none";
    profile_dropDown.style.display = "none";
  });
  profile_dropDown.addEventListener("mouseover", function () {
    profile.style.borderBottom = "2px solid red";
    profile_dropDown.style.display = "block";
  });
  profile_dropDown.addEventListener("mouseleave", function () {
    profile.style.borderBottom = "none";
    profile_dropDown.style.display = "none";
  });

  let current_user = document.getElementById("current_user");

  let logsBtn = document.getElementById("logs");

  let current_meesho = JSON.parse(localStorage.getItem("Current_meesho_user"));

  if (current_meesho) {
    current_user.innerHTML = current_meesho.username.toUpperCase();

    let logOutStructure = `
    <Button id="logout" onclick="logout()">Logout</Button>`;

    logsBtn.innerHTML = logOutStructure;
  } else {
    let logInStructure = `<Button id="logIn" onclick="logIn()">LogIn</Button>`;
    logsBtn.innerHTML = logInStructure;
    // window.location.href = "../html/login.html";
  }
};

function logout() {
  window.location.reload();
  localStorage.removeItem("Current_meesho_user");
  window.location.href = "../html/login.html";
}

function logIn() {
  window.location.href = "../html/login.html";
}

// localStorage
