document.querySelector(".logo").addEventListener("click", function () {
  // document.querySelector(".Home-one").scrollIntoView({ behavior: "smooth" });
  document.querySelector(".Home-one").style.display = "";
  document.querySelector(".Home-two").style.display = "";

  document.querySelector(".Home-three").style.display = "none";
  document.querySelector(".Home-four").style.display = "none";
  document.querySelector(".Home-five").style.display = "none";
  document.querySelector(".Home-six").style.display = "none";
  document.querySelector(".Home-seven").style.display = "none";
  document.querySelector(".Home-eight").style.display = "none";
});
document.querySelector(".mobile-logo").addEventListener("click", function () {
  // document.querySelector(".Home-one").scrollIntoView({ behavior: "smooth" });
  document.querySelector(".Home-one").style.display = "";
  document.querySelector(".Home-two").style.display = "";

  document.querySelector(".Home-three").style.display = "none";
  document.querySelector(".Home-four").style.display = "none";
  document.querySelector(".Home-five").style.display = "none";
  document.querySelector(".Home-six").style.display = "none";
  document.querySelector(".Home-seven").style.display = "none";
  document.querySelector(".Home-eight").style.display = "none";
});

document.querySelector(".DashBoard").addEventListener("click", function () {
    document.querySelector(".Home-one").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-one").style.display = "";
    document.querySelector(".Home-two").style.display = "";

    document.querySelector(".Home-three").style.display = "none";
    document.querySelector(".Home-four").style.display = "none";
    document.querySelector(".Home-five").style.display = "none";
    document.querySelector(".Home-six").style.display = "none";
    document.querySelector(".Home-seven").style.display = "none";
    document.querySelector(".Home-eight").style.display = "none";
  });
document.querySelector(".Document").addEventListener("click", function () {
    // document.querySelector(".Home-four").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-four").style.display = "";
    document.querySelector(".Home-three").style.display = "";

    document.querySelector(".Home-one").style.display = "none";
    document.querySelector(".Home-two").style.display = "none";
    document.querySelector(".Home-five").style.display = "none";
    document.querySelector(".Home-six").style.display = "none";
    document.querySelector(".Home-seven").style.display = "none";
    document.querySelector(".Home-eight").style.display = "none";
  });
document.querySelector(".Saved").addEventListener("click", function () {
    // document.querySelector(".Home-five").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-five").style.display = "";

    document.querySelector(".Home-three").style.display = "none";
    document.querySelector(".Home-one").style.display = "none";
    document.querySelector(".Home-two").style.display = "none";
    document.querySelector(".Home-four").style.display = "none";
    document.querySelector(".Home-six").style.display = "none";
    document.querySelector(".Home-seven").style.display = "none";
    document.querySelector(".Home-eight").style.display = "none";
  });
document.querySelector(".Collection").addEventListener("click", function () {
    // document.querySelector(".Home-six").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-six").style.display = "";

    document.querySelector(".Home-three").style.display = "none";
    document.querySelector(".Home-one").style.display = "none";
    document.querySelector(".Home-two").style.display = "none";
    document.querySelector(".Home-four").style.display = "none";
    document.querySelector(".Home-five").style.display = "none";
    document.querySelector(".Home-seven").style.display = "none";
    document.querySelector(".Home-eight").style.display = "none";
  });
document.querySelector(".Profile").addEventListener("click", function () {
    // document.querySelector(".Home-seven").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-seven").style.display = "";

    document.querySelector(".Home-three").style.display = "none";
    document.querySelector(".Home-one").style.display = "none";
    document.querySelector(".Home-two").style.display = "none";
    document.querySelector(".Home-four").style.display = "none";
    document.querySelector(".Home-five").style.display = "none";
    document.querySelector(".Home-six").style.display = "none";
    document.querySelector(".Home-eight").style.display = "none";
  });
document.querySelector(".Setting").addEventListener("click", function () {
    // document.querySelector(".Home-eight").scrollIntoView({ behavior: "smooth" });
    document.querySelector(".Home-eight").style.display = "";

    document.querySelector(".Home-three").style.display = "none";
    document.querySelector(".Home-one").style.display = "none";
    document.querySelector(".Home-two").style.display = "none";
    document.querySelector(".Home-four").style.display = "none";
    document.querySelector(".Home-five").style.display = "none";
    document.querySelector(".Home-six").style.display = "none";
    document.querySelector(".Home-seven").style.display = "none";
  });



  //////////// Dark Mode /////////////

const DTheme = document.querySelector("#DTheme");

DTheme.onclick = function(){
  document.body.classList.toggle("Dark-Theme")

  ///////  to change icon  ////////
  if(document.body.classList.contains("Dark-Theme")){
    DTheme.src = "Assets/dark_mode.svg";
  }
  else{
    DTheme.src="Assets/moon-stars.svg";
  }
}


document.querySelector(".Home-three").style.display = "none";
document.querySelector(".Home-four").style.display = "none";
document.querySelector(".Home-five").style.display = "none";
document.querySelector(".Home-six").style.display = "none";
document.querySelector(".Home-seven").style.display = "none";
document.querySelector(".Home-eight").style.display = "none";


// document.querySelector(".Home-one").style.display = "none";
// document.querySelector(".Home-two").style.display = "none";