function nav_coll(){
    document.getElementById("footer").style.position ="relative"
}

function navhide(){
    document.getElementById("navitem").style.display = "none"
}

// topbar 
function toplink(){
    document.getElementById("top").style.display = "block"
    document.getElementById("about").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("project").style.display = "none"
    document.getElementById("experience").style.display = "none"
    document.getElementById("study").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.backgroundColor ="transparent"
    document.getElementById("footer").style.position ="absolute"
    document.getElementById("footer").style.display = "block"
    // document.body.style.backgroundImage = "url('./images/Logo12.jpg')";
}

// about section 
function aboutlink() {
    document.getElementById("top").style.display = "none"
    document.getElementById("about").style.display = "block"
    document.getElementById("skills").style.display = "none"
    document.getElementById("project").style.display = "none"
    document.getElementById("experience").style.display = "none"
    document.getElementById("study").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("navbar").style.backgroundColor ="transparent"
    document.getElementById("footer").style.position ="relative"
    document.getElementById("footer").style.display = "block"
    // document.body.style.backgroundImage = "url('./images/logo12.jpg')";

}

// projects list with link 
function project() {
    document.getElementById("top").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("project").style.display = "block"
    document.getElementById("experience").style.display = "none"
    document.getElementById("study").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("navbar").style.backgroundColor ="#0000006b"
    document.getElementById("footer").style.position ="relative"
    document.getElementById("footer").style.display = "block"
}

// skills highlight 
function skills() {
    document.getElementById("top").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("skills").style.display = "block"
    document.getElementById("project").style.display = "none"
    document.getElementById("experience").style.display = "none"
    document.getElementById("study").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("navbar").style.backgroundColor ="transparent"
    document.getElementById("footer").style.display = "block"
    document.getElementById("footer").style.position ="relative"
    // document.body.style.backgroundImage = "url('./images/logo13.jpg')"
}

// experiences 
function exp() {
    document.getElementById("top").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("project").style.display = "none"
    document.getElementById("experience").style.display = "block"
    document.getElementById("study").style.display = "none"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("navbar").style.backgroundColor ="transparent"
    document.getElementById("footer").style.position ="relative"
    document.getElementById("footer").style.display = "none"
    // document.body.style.backgroundImage = "url('./images/logo13.jpg')"
}

// educational background 
function study() {
    document.getElementById("top").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("skills").style.display = "none"
    document.getElementById("project").style.display = "none"
    document.getElementById("experience").style.display = "none"
    document.getElementById("study").style.display = "block"
    document.getElementById("navitem").style.display = "none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
    document.getElementById("nav_coll").style.display ="none"
    document.getElementById("navbar").style.width ="100%"
    document.getElementById("navbar").style.backgroundColor ="transparent"
    document.getElementById("footer").style.display = "block"
    document.getElementById("footer").style.position ="relative"
    // document.body.style.backgroundImage= "url('./images/logo13.jpg')"
}

function navbar_show() {
    document.getElementById("navitem").style.display="flex"
    document.getElementById("navshow").style.display ="none"
    document.getElementById("navhide").style.display ="block"
}

function navbar_hide() {
    document.getElementById("navitem").style.display="none"
    document.getElementById("navshow").style.display ="block"
    document.getElementById("navhide").style.display ="none"
}

function navbar_show_res(){
    document.getElementById("navitem").style.display="flex"
    document.getElementById("navshow").style.display ="none"
    document.getElementById("navhide").style.display ="none"
}