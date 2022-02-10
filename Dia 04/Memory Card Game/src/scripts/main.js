// Grab a couple of things
const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data
const getData = () => [
    { imgSrc: "./src/assets/img/beatles.jpeg", id: 1, name: "beatles" },
    { imgSrc: "./src/assets/img/blink182.jpeg", id: 2, name: "blink 182" },
    { imgSrc: "./src/assets/img/fkatwigs.jpeg", id: 3, name: "fka twigs" },
    { imgSrc: "./src/assets/img/fleetwood.jpeg", id: 4, name: "fleetwood" },
    { imgSrc: "./src/assets/img/joy-division.jpeg", id: 5, name: "joy division" },
    { imgSrc: "./src/assets/img/ledzep.jpeg", id: 6, name: "lep zeppelin" },
    { imgSrc: "./src/assets/img/metallica.jpeg", id: 7, name: "metallica" },
    { imgSrc: "./src/assets/img/pinkfloyd.jpeg", id: 8, name: "pink floyd" },
    { imgSrc: "./src/assets/img/beatles.jpeg", id: 9, name: "beatles" },
    { imgSrc: "./src/assets/img/blink182.jpeg", id: 10, name: "blink 182" },
    { imgSrc: "./src/assets/img/fkatwigs.jpeg", id: 11, name: "fka twigs" },
    { imgSrc: "./src/assets/img/fleetwood.jpeg", id: 12, name: "fleetwood" },
    { imgSrc: "./src/assets/img/joy-division.jpeg", id: 13, name: "joy division" },
    { imgSrc: "./src/assets/img/ledzep.jpeg", id: 14, name: "led zeppelin" },
    { imgSrc: "./src/assets/img/metallica.jpeg", id: 15, name: "metallica" },
    { imgSrc: "./src/assets/img/pinkfloyd.jpeg", id: 16, name: "pink floyd" },
];

// Randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    
    return cardData;
}

const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";
        // Attach the info to the cards
        face.src = item.imgSrc;
        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
        })
    });
}

cardGenerator();