const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    delay: 125
  });
typewriter.pauseFor(1000)
    .typeString("Code")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Challenges")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Fun")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Confusion")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Bugfixing")
    .pauseFor(2500)
    .deleteAll()
    .start()