const canvas = document.getElementById('kangarooCanvas');
const ctx = canvas.getContext('2d');

const kangarooSprite = new Image();
kangarooSprite.src = '../assets/kangaroo.png';

const background = new Image();
background.src = '../assets/seemless_background.jpg';

const kangaroo = {
    x: canvas.width / 2 - 32,
    y: canvas.height / 2 + 32,
    width: 64,
    height: 64,
    dy: 2,
    jumping: true
};

let backgroundX = 0;
const backgroundSpeed = 1;

let imagesLoaded = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Hintergrund zeichnen
    ctx.drawImage(background, backgroundX, 0, canvas.width, canvas.height);
    ctx.drawImage(background, backgroundX + canvas.width, 0, canvas.width, canvas.height);

    // Hintergrundposition aktualisieren
    backgroundX -= backgroundSpeed;
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }

    // Känguru zeichnen
    ctx.drawImage(kangarooSprite, kangaroo.x, kangaroo.y, kangaroo.width, kangaroo.height);

    // Känguru-Position aktualisieren
    if (kangaroo.jumping) {
        kangaroo.y -= kangaroo.dy;
        if (kangaroo.y <= canvas.height / 4 + 60) {
            kangaroo.jumping = false;
        }
    } else {
        kangaroo.y += kangaroo.dy;
        if (kangaroo.y >= canvas.height / 2 - kangaroo.height / 2 + 60) {
            kangaroo.jumping = true;
        }
    }

    requestAnimationFrame(draw);
}

function checkImagesLoaded() {
    imagesLoaded++;
    if (imagesLoaded === 2) {
        console.log("Bilder geladen, Animation startet");
        draw();
    }
}

background.onload = checkImagesLoaded;
kangarooSprite.onload = checkImagesLoaded;

background.onerror = function () {
    console.error("Fehler beim Laden des Hintergrundbilds");
};

kangarooSprite.onerror = function () {
    console.error("Fehler beim Laden des Känguru-Bilds");
};
