

const header = document.querySelector("header");
const nav = document.getElementsByClassName("nav")[0];

document.getElementById("btn").addEventListener("click", function(){
    nav.classList.toggle("activeNav");
    header.classList.toggle("activeHeader");
});

const navList = document.querySelectorAll(".nav li");
for (var i = 0; i < navList.length; i++) {
    navList[i].addEventListener("click", hideNav);
}
function hideNav(){
	nav.className = "nav activeNav";
	header.className="";	
}
