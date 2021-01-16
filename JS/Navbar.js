//sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "fit-content";
    document.getElementById("mySidebar").style.padding = "2%";
    document.getElementById("main").style.display = "none";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.padding = "0";
    document.getElementById("main").style.display = "block";
  }