// Funktion zur Berechnung der Hintergrundfarbe basierend auf dem Scrollfortschritt

function calculateBackgroundColor(scrollProgress) {
    let bgColor;
    let infoBlockColor;
    let navColor;

    if (scrollProgress <= 2 / 5) {
        bgColor = 'rgb(252, 252, 252)';
        infoBlockColor = 'rgb(238, 108, 77)';
        navColor = 'rgb(107, 176, 179)';

    } else if (scrollProgress <= 4 / 5) {
        const sunsetProgress = (scrollProgress - 2 / 5) / (2 / 5);

        const startColors = [
            { r: 252, g: 252, b: 252 }, // Weiß
            { r: 237, g: 161, b: 197 }, // Gelb
            { r: 255, g: 135, b: 91 }, // Rot
            { r: 99, g: 91, b: 158 }, // Lila
        ];
        const endColor = { r: 2, g: 17, b: 27 }; // #292F36

        const numSegments = startColors.length;
        const segmentProgress = sunsetProgress * numSegments;
        const segmentIndex = Math.min(Math.floor(segmentProgress), numSegments - 1);
        const segmentStartColor = startColors[segmentIndex];
        const segmentEndColor = segmentIndex === numSegments - 1 ? endColor : startColors[segmentIndex + 1];
        const segmentFraction = segmentProgress - segmentIndex;

        const r = Math.round(segmentStartColor.r + (segmentEndColor.r - segmentStartColor.r) * segmentFraction);
        const g = Math.round(segmentStartColor.g + (segmentEndColor.g - segmentStartColor.g) * segmentFraction);
        const b = Math.round(segmentStartColor.b + (segmentEndColor.b - segmentStartColor.b) * segmentFraction);

        bgColor = `rgb(${r}, ${g}, ${b})`;

        //Block

        const startColorBlock = { r: 238, g: 108, b: 77 }; // #EE6C4D
        const endColorBlock = { r: 119, g: 67, b: 56 };   // #EE6C4D

        const rBlock = Math.round(startColorBlock.r + (endColorBlock.r - startColorBlock.r) * scrollProgress);
        const gBlock = Math.round(startColorBlock.g + (endColorBlock.g - startColorBlock.g) * scrollProgress);
        const bBlock = Math.round(startColorBlock.b + (endColorBlock.b - startColorBlock.b) * scrollProgress);

        infoBlockColor = `rgb(${rBlock}, ${gBlock}, ${bBlock})`;

        //Navigation

        const startColorNav = { r: 107, g: 176, b: 179 };
        const endColorNav = { r: 53, g: 88, b: 89 };

        const rNav = Math.round(startColorNav.r + (endColorNav.r - startColorNav.r) * scrollProgress);
        const gNav = Math.round(startColorNav.g + (endColorNav.g - startColorNav.g) * scrollProgress);
        const bNav = Math.round(startColorNav.b + (endColorNav.b - startColorNav.b) * scrollProgress);

        navColor = `rgb(${rNav}, ${gNav}, ${bNav})`;

    } else {
        bgColor = 'rgb(2, 17, 27)';
        infoBlockColor = 'rgb(119, 67, 56)';
        navColor = 'rgb(53, 88, 89)';
    }

    return { bgColor: bgColor, infoBlockColor: infoBlockColor, navColor: navColor };
}

// Event-Listener für das Scrollen
document.addEventListener('scroll', function () {
    const section3 = document.getElementById('section4');
    const section3Rect = section3.getBoundingClientRect();
    const section3Height = section3Rect.height;
    const scrollY = window.scrollY + window.innerHeight;
    const section3Top = section3Rect.top + window.scrollY;
    const section3Bottom = section3Top + section3Height;

    let scrollProgress;

    if (scrollY >= section3Top && scrollY <= section3Bottom) {
        scrollProgress = (scrollY - section3Top) / section3Height;
    } else if (scrollY > section3Bottom) {
        scrollProgress = 1;
    } else {
        scrollProgress = 0;
    }

    const bgColor = calculateBackgroundColor(scrollProgress).bgColor;
    const infoBlockColor = calculateBackgroundColor(scrollProgress).infoBlockColor;
    const navColor = calculateBackgroundColor(scrollProgress).navColor

    document.body.style.backgroundColor = bgColor;
    document.getElementById('navBar').style.backgroundColor = navColor;
    const infoBlocks = document.getElementsByClassName('info-block');
    Array.from(infoBlocks).forEach(block => {
        block.style.backgroundColor = infoBlockColor; // Setze Hintergrundfarbe des Info-Blocks
    });
});
