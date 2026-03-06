const img1 = document.createElement("img");
const img2 = document.createElement("img");
console.log("TEST");

img1.src = "Forest_Day.jpg";
img2.src = "Forest_Night.jpg";

img1.className = "fixed-img img1";
img2.className = "fixed-img img2";

document.body.appendChild(img1);
document.body.appendChild(img2);

// Fade logic
const fadeDistance = window.innerHeight;

window.addEventListener("scroll", () => {
    const fadeArea = document.querySelector(".fade-area");
    const rect = fadeArea.getBoundingClientRect();

    const progress = 1 - (rect.top / fadeDistance);
    const clamped = Math.max(0, Math.min(1, progress));

    img1.style.opacity = 1 - clamped;
    img2.style.opacity = clamped;
});