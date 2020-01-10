import { elements } from "./base";
export const clearInput = () => {
  elements.searchInput.value = "";
}
export const getInput = () => elements.searchInput.value;
export const clearResults = () => {
    elements.searchResList.innerHTML = ""
}
function renderRecipe(recipe) {
  elements.searchResList.innerHTML += 
    `
        <li>
        <a class="results__link" href=${recipe.source_url}>
            <figure class="results__fig">
                <img src=${recipe.image_url} alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${recipe.title}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
        `
  
}

export const renderResults = recipes => {
  recipes.forEach(renderRecipe);
};
