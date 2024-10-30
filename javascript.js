$(document).ready(function(){
    $(".hamburg-icon").click(function(){
      $("#otherNav,ul" ).toggleClass("hamopen");
    });
  });

  
  function showMenu() {
    document.getElementById("top-menu").style.display = "block";
    // document.getElementById("top-menu").style.display = "none";
    document.getElementById("menu-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
    document.getElementById("close-icon").style.right = "0vw";
  }
  function closeMenu() {
    document.getElementById("top-menu").style.display = "none";
    document.getElementById("close-icon").style.display = "none";
    document.getElementById("menu-icon").style.display = "block";
  }


