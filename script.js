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
        "the Year"
    ],
    autoStart: true
});

new FlipDown(1709290800, {theme: "light"}).start();
window.onload = () => {
    Array.from(document.getElementsByClassName("center-vertically-with-margin")).forEach(
        element => {
            const height = element.clientHeight;
            element.style.marginTop = height + "px";
        }
    );
};
tippy("[data-tippy-content]", {
    theme: "light",
    animation: "scale-subtle",
    followCursor: "horizontal"
});
