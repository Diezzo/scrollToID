const links = document.querySelectorAll('.scrollTo');
for(let i of links){
    const elem = i.getAttribute("data-target");
    if (elem !== '') {
        i.addEventListener("click", handleButtonClick);
    }
}
function handleButtonClick(e) {
    const id = e.target.getAttribute("data-target");
	console.log(id)
    if(id){
        document.getElementById(id).scrollIntoView({ block: "center", behavior: "smooth" });
    }
}
