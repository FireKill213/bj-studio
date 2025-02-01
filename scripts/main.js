window.onload = createProjectCards()

function createProjectCards() {
  const cards = [
    {
      headline: "City Builder",
      text: 'A small City Builder Game developed as Part of the "Softwareprojekt" in 2021 where you can build your own town.',
      link: "/projects/CityBuilder",
      linkText: "Play",
      backgroundImageStyle: "background-image: url('/projects/CityBuilder/misc/ui/backgrounds/Skyline.png')",
    },
    {
      headline: "Sydney Guide",
      text: 'A Sydney Travel Guide website created in 2024 as part of the lecture "web-design and standards".',
      link: "/projects/SydneyGuide",
      linkText: "Visit",
      backgroundImageStyle: "background-image: url('/projects/SydneyGuide/assets/sydney_wallpaper.jpg')",
    },
    {
      headline: "Roomie HUB",
      text: 'Roomie HUB is an android app developed to manage expenses, tasks, and events within a shared apartment.',
      link: "https://roomiehub.de",
      linkText: "Visit",
      backgroundImageStyle: "background-image: url('/src/img/RoomieHub_Logo_white_1024.png'); background-size: contain",
      backgroundColor: "linear-gradient(to bottom right, #FFBA49, #EF5B5B);"
    }
  ]


  const container = document.getElementById('card-container');
  cards.forEach((card, index) => {
    // content-1, content-2, content-3 ... zum Beispiel rotiert:
    const contentClass = 'content-' + ((index % 3) + 1);

    // Neues Div für eine Karte erstellen
    const cardElement = document.createElement('div');
    cardElement.classList.add('content', contentClass);

    // HTML der Karte
    cardElement.innerHTML = `
            <div class="background-wrapper" style="background:${card?.backgroundColor}">
    <div class="background" style="${card.backgroundImageStyle}"></div>
  </div>
  <div class="card-content">
    <h2>${card.headline}</h2>
    <p>${card.text}</p>
  </div>
  <div class="button-container">
    <a href="${card.link}" target="_blank">${card.linkText}</a>
  </div>
          `;

    // Karte ins Container-Div einfügen
    container.appendChild(cardElement);
  });
}
