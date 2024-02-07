const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    loop: true,
    delay: 75
  });
typewriter.typeString("Twelve Months of Code")
    .start();