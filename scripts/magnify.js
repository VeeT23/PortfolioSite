const figures = document.querySelectorAll(".image-zoom-container");

figures.forEach(container => {
    const img = container.querySelector("img");

    container.addEventListener("mousemove", e => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        img.style.transformOrigin = `${percentX * 100}% ${percentY * 100}%`;
        img.style.transform = "scale(2)";
    });

    container.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
        img.style.transformOrigin = "center center";
    });
});
