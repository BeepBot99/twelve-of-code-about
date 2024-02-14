// Typewriter Effect on Heading
const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    strings: [
        "Code",
        "Happiness",
        "Confusion",
        "Pride",
        "Challenges",
        "Debugging",
        "Fun",
        "Programming",
        "Excitement",
        "Development",
        "the Year",
    ],
    autoStart: true,
});

new FlipDown(1709294400, { theme: "light" }).start();
AOS.init();
tippy("[data-tippy-content]", {
    theme: "light",
    animation: "scale-subtle",
    followCursor: "horizontal",
});
document.getElementById("scrollDownButton").addEventListener("click", () => {
    document.getElementById("aboutBlocks").scrollIntoView();
});
Array.from(document.getElementsByClassName("hide-without-javascript")).forEach((element) => {
    element.style.display = "block";
});
