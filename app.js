const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
    mobileMenu.classList.toggle("open");
};

const fades = document.querySelectorAll(".fade");
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
}, { threshold: 0.2 });
fades.forEach(el => obs.observe(el));

let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let current = 0;

function updateSlider(i){
    slides.forEach(s=>s.classList.remove("active"))
    dots.forEach(d=>d.classList.remove("active"))
    slides[i].classList.add("active")
    dots[i].classList.add("active")
}

dots.forEach((dot,i)=>{
    dot.addEventListener("click",()=>{ current=i; updateSlider(i); })
})

setInterval(()=>{
    current = (current+1) % slides.length
    updateSlider(current)
},4000)

let startX=0;
document.getElementById("testimonialSlider").addEventListener("touchstart",(e)=>{ startX=e.touches[0].clientX })
document.getElementById("testimonialSlider").addEventListener("touchend",(e)=>{
    let endX=e.changedTouches[0].clientX;
    if(endX < startX-50) current=(current+1)%slides.length;
    if(endX > startX+50) current=(current-1+slides.length)%slides.length;
    updateSlider(current);
})


setInterval(() => {
    current = (current + 1) % slides.length;
    updateSlider(current);
}, 5000);


document.getElementById("appointmentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    Swal.fire({
        title: "Request Sent!",
        text: "Thank you we will contact you soon.",
        icon: "success",
        confirmButtonColor: "#be123c"
    });
    e.target.reset();
});
