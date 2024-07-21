    import games from './games.mjs';

    function gameTemplate(game) {
        return `<figure class="game">
                <figcaption class="gameDetails">
                    <img id="gameImage" src="${game.image}" alt="image of ${game.name} cover art" />
                    <figcaption id="gameDetails2"> 
                        <span id="title" role="text" aria-label="${game.name}">
                            <span aria-hidden="false" class="title">${game.name}</span>
                        </span>
                        <span class="year" role="text" aria-label="${game.year}">
                            <span aria-hidden="false" class="year">${game.year}</span>
                        </span>
                        <ul class="genre-tags">
                            ${tagsTemplate(game.tags)}
                        </ul>
                        <p>
                            ${(game.rating)}⭐
                        </p>
                    </figcaption>
                </figcaption>
                <span class="description" role="text" aria-label="description">
                    ${game.description}
                </span>
            </figure>`;
    }

    function tagsTemplate(tags) {
        const html = tags.map(tag => `<div class="tag">${tag}</div>`).join('');
        return html;
    }

    function renderGames(gameList) {
        const outputElement = document.getElementById('game');
        const gameHTMLStrings = gameList.map(game => gameTemplate(game));
        outputElement.innerHTML = gameHTMLStrings.join('');
    }

    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.submitForm');
        const phrase = document.getElementById('phrase01');
        
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            phrase.innerHTML += 'Thank you! Your game request has been submitted!';
            form.style.display = 'none';
        });
    });

    function init() {
        renderGames(games);
    }

    init();
