var typed=new Typed(".typing", {
    strings:["UX/UI Designer","Graphic Designer","Front-end Developer"],
    typeSpeed:80,
    backSpeed:60,
    loop:true
}

)
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});



var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();