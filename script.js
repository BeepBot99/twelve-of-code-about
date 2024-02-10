// Typewriter Effect on Heading
const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    strings: [
        "Code",
        "Challenges",
        "Fun",
        "Confusion",
        "Bugfixing",
        "Waiting",
        "Patience",
        "Debugging",
        "Programming",
        "Happiness",
        "Excitement"
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
    followCursor: true
});
