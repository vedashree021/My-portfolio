function showMessage() {
alert("Welcome to my portfolio!");
}

// smooth scroll for navigation
document.querySelectorAll("nav a").forEach(link => {
link.addEventListener("click", function(e) {

const target = this.getAttribute("href");

if(target.startsWith("#") && target !== "#"){
e.preventDefault();

const section = document.querySelector(target);

if(section){
section.scrollIntoView({
behavior: "smooth"
});
}
}

});
});