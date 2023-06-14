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
};
