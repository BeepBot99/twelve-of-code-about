// Typewriter Effect on Heading
const typewriterElement = document.getElementById("typewriterDescription");
const typewriter = new Typewriter(typewriterElement, {
    delay: 125,
    loop: true
});
typewriter
    .pauseFor(1000)
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
    .typeString("Waiting")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Happiness")
    .pauseFor(2500)
    .deleteAll()
    .start();

// Countdown Timer until Twelve of Code is Released
const countdownTimer = setInterval(() => {
    const countDownTime = new Date("Mar 1 2024 0:0:00").getTime();
    const currentTime = new Date().getTime();
    const timeLeft = countDownTime - currentTime;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementsByClassName("countdown")[0].innerHTML = "Released!";
    } else {
        document.getElementsByClassName(
            "countdown"
        )[0].innerText = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
    }
}, 1000);
