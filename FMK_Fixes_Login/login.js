const modal=document.getElementById("loginModal");
document.getElementById("btnLogin").onclick=()=>modal.style.display="flex";
document.querySelector(".closeLogin").onclick=()=>modal.style.display="none";
window.onclick=e=>{if(e.target===modal)modal.style.display="none";}
document.getElementById("loginForm").onsubmit=e=>{e.preventDefault();alert("Login correcto");modal.style.display="none";};
