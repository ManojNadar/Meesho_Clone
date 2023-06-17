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
    window.location.href = "../html/login.html";
  }

  //dynamically added products
  let productDiv = document.getElementById("main-right-inside");
  let productStorage = JSON.parse(localStorage.getItem("productList"));

  let productDisplayString = "";

  for (let i = 0; i < productStorage.length; i++) {
    productDisplayString += `<div
     class="main-right-images">
    <div class="single-image">
      <img
        src="${productStorage[i].productImage}"
        alt=""
      />
    </div>

    <div class="image-details">
      <p class="image-detail-1">${productStorage[i].productName}</p>
      <h4>₹ ${productStorage[i].productPrice} <span class="image-detail-2">onwards</span></h4>
      <small
        >Delivery ₹61 <span class="word-line">₹70</span>
      </small>

      <div class="ratings">
        <p class="star">
          4.0 <i class="fa-regular fa-star fa-xs"></i>
        </p>
        <span class="reviews"> ${productStorage[i].productReview} Reveiws </span>
      </div>
    </div>
  </div>`;
  }

  productDiv.innerHTML = productDisplayString;
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
