const links = Array.from(document.getElementsByClassName("link"));
const homeSection = document.getElementById("home-section");
const submit = document.querySelector("input[type=submit]");

submit.addEventListener("click", function (e) {
  e.preventDefault();
});

function activeLink(id) {
  links.forEach((link) => {
    if (link.id === id) {
      link.classList.toggle("active-link", true);
    } else {
      link.classList.toggle("active-link", false);
    }
  });
  if (id === "home") {
    homeSection.style.marginTop = "0";
    document.body.style.backgroundImage =
      "linear-gradient(160deg, #0093e9 0%, #80d0c7 100%)";
  } else if (id === "projects") {
    homeSection.style.marginTop = "-80vh";
    document.body.style.backgroundImage =
      "linear-gradient(to bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)";
  } else if (id === "contact") {
    homeSection.style.marginTop = "-160vh";
    document.body.style.backgroundImage =
      "linear-gradient(45deg,  #3F5EFB,#FC466B)";
  } else {
    homeSection.style.marginTop = "-250vh";
    document.body.style.backgroundImage =
      "linear-gradient(147deg, #000000 0%, #2c3e50 74%)";
  }
}
