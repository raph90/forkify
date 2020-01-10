import x from "./test";
import Search from "./models/Search";
import { elements } from "./views/base";
import * as searchView from './views/searchView';
// Global state
/*
    - Search object
    - Current recipe
    - Shopping list
    - Liked recipes

*/

// event listeners go in the controller

const controlSearch = async () => {
  // you READ the data from the view. That's not handled in the controller
  const query = searchView.getInput();
  

  if (query) {
    state.search = new Search(query);

    // prepare ui
    searchView.clearInput();
    searchView.clearResults();
    // search for recipes
    await state.search.getResults();

    // render results on UI
    searchView.renderResults(state.search.result)
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
const state = {};


