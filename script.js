const cookie = document.getElementById("cookie");
const mainPage = document.getElementById("mainPage");
const secondPage = document.getElementById("secondPage");
const fortuneText = document.getElementById("fortuneText");
const newFortuneBtn = document.getElementById("newFortuneBtn");

const fortunes = [
    "A beautiful journey is ahead of you.",
    "Happiness will come your way soon.",
    "You will achieve your dreams.",
    "A delightful surprise awaits you.",
    "You will meet someone who changes your life.",
    "An unexpected blessing is on its way.",
    "Good news will find you soon.",
    "Your creativity will soon be rewarded.",
    "New friendships are on the horizon.",
    "A small act of kindness will make your day.",
    "A beautiful journey is ahead of you.",
    "Happiness will come your way soon.",
    "You will achieve your dreams.",
    "A delightful surprise awaits you.",
    "You will meet someone who changes your life.",
    "An unexpected blessing is on its way.",
    "Good news will find you soon.",
    "Your creativity will soon be rewarded.",
    "New friendships are on the horizon.",
    "A small act of kindness will make your day.",
    "Joyful moments are in your near future.",
    "Trust your intuition — it will guide you well.",
    "Today is the perfect day to start something new.",
    "An exciting opportunity is just around the corner.",
    "You will soon reconnect with an old friend.",
    "A positive attitude will bring positive outcomes.",
    "Take time to enjoy life’s simple pleasures.",
    "You are stronger than you think.",
    "Someone is thinking of you fondly.",
    "A dream you have will soon come true.",
    "You will inspire others with your kindness.",
    "An answer you seek will soon be clear.",
    "Patience will lead you to great rewards.",
    "You are on the path to success.",
    "Your heart will guide you to happiness."
];

cookie.addEventListener("click", () => {
    mainPage.style.display = "none";
    secondPage.style.display = "flex";

    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = randomFortune;

    // Reset opacity + re-trigger animation
    fortuneText.style.opacity = 0;
    fortuneText.style.animation = "none";
    fortuneText.offsetHeight; // trigger reflow
    fortuneText.style.animation = "fadeInBounce 1s forwards";
});

function showFortune() {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = randomFortune;

    // Reset opacity + re-trigger animation
    fortuneText.style.opacity = 0;
    fortuneText.style.animation = "none";
    fortuneText.offsetHeight; // trigger reflow
    fortuneText.style.animation = "fadeInBounce 1s forwards";
}

cookie.addEventListener("click", () => {
    mainPage.style.display = "none";
    secondPage.style.display = "flex";

    showFortune();
});

newFortuneBtn.addEventListener("click", () => {
    showFortune();
});

