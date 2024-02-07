const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    delay: 75
  });
typewriter.pauseFor(1000)
    .typeString("Twelve Months of Code")
    .pauseFor(2500)
    .deleteChars(4)
    .start()