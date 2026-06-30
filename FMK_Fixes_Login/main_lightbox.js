// Agregar a js/main.js
const lightbox=document.querySelector("[data-lightbox]");
const lightboxImg=document.querySelector("[data-lightbox-image]");
const closeBtn=document.querySelector("[data-lightbox-close]");
document.querySelectorAll(".gallery-item").forEach(item=>{
 item.onclick=()=>{
  const img=item.querySelector("img");
  lightboxImg.src=img.src; lightboxImg.alt=img.alt;
  lightbox.removeAttribute("hidden");
  document.body.style.overflow="hidden";
 };
});
closeBtn.onclick=()=>{lightbox.setAttribute("hidden","");lightboxImg.src="";document.body.style.overflow="auto";};
lightbox.onclick=e=>{if(e.target===lightbox){lightbox.setAttribute("hidden","");document.body.style.overflow="auto";}};
document.addEventListener("keydown",e=>{if(e.key==="Escape"){lightbox.setAttribute("hidden","");document.body.style.overflow="auto";}});
