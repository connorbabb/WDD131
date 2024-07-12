import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img id="recipeImage" src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption class="recipeDetails">
            <ul class="tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <span class="title" role="text" aria-label="${recipe.name}">
                <span aria-hidden="false" class="title">${recipe.name}</span>
            </span>
            <p>
                ${ratingTemplate(recipe.rating)}
            </p>
            <span class="description" role="text" aria-label="${recipe.name}">
                ${recipe.description}
            </span>
        </figcaption>
    </figure>`;
}

function tagsTemplate(tags) {
    const html = tags.map(tag => `<div class="tag">${tag}</div>`).join('');
    return html;
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const outputElement = document.getElementById('recipe');
    const recipeHTMLStrings = recipeList.map(recipe => recipeTemplate(recipe));
    outputElement.innerHTML = recipeHTMLStrings.join('');
}

function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(lowerCaseQuery);
        const descriptionMatch = recipe.description.toLowerCase().includes(lowerCaseQuery);
        const tagMatch = recipe.tags && recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery));
        const ingredientMatch = recipe.ingredients && recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery));

        return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
    });

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
    return filteredRecipes;
}


function searchHandler(e) {
    e.preventDefault();

    const searchInput = document.getElementById('searchBarPlaceholder').value;
    console.log(searchInput);
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
}

document.getElementById('searchIcon').addEventListener('click', searchHandler);

document.getElementById('searchBar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchHandler(e);
    }
});

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

init();
