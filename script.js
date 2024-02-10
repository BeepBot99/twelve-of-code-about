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
tippy("[data-tippy-content]", {
    theme: "light",
    animation: "scale-subtle",
    followCursor: "horizontal"
});
