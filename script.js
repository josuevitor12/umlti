
window.addEventListener("load", () => {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");
    setTimeout(() => {
        loading.style.display = "none";
        content.classList.remove("hidden");
    }, 2000);
});
