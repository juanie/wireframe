function myProjects() {
    closeAllBoxes();
    var x = document.getElementById("myProjects");
    x.style.display = "block";
}

function myAbout() {
    closeAllBoxes();
    var x = document.getElementById("myAbout");
    x.style.display = "block";

}

function myContact() {
    closeAllBoxes();
    var x = document.getElementById("myContact");
    x.style.display = "block";

}

function closeAllBoxes() {
    document.getElementById("myContact").style.display = "none"
    document.getElementById("myAbout").style.display = "none"
    document.getElementById("myProjects").style.display = "none"
}
