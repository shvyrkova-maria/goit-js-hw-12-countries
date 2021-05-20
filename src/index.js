import './sass/main.scss';
import countryCardTmpl from './templates/country-card-tmpl.hbs';
import countryListTmpl from './templates/country-list-tmpl.hbs';
import SearchApi from './js/fetch-countries.js';
import getRefs from './js/refs.js';
import { searchError, fetchError } from './js/error-notice.js';

const debounce = require('lodash.debounce');
const refs = getRefs();
const countrySearch = new SearchApi();

refs.search.addEventListener('input', debounce(onInputChange, 1500));

function onInputChange(e) {
  countrySearch.query = e.target.value;
  if (countrySearch.query) {
    countrySearch.fetchCountries().then(createSearchResult).catch(onFetchError);
  } else {
    refs.searchResult.innerHTML = '';
  }
}

function createSearchResultMarkup(markup) {
  refs.searchResult.innerHTML = '';
  refs.searchResult.insertAdjacentHTML('beforeend', markup);
}

function createSearchResult(country) {
  const cardMarkup = countryCardTmpl(...country);
  const listMarkup = countryListTmpl(country);

  if (country.length === 1) {
    createSearchResultMarkup(cardMarkup);
  } else if (country.length >= 2 && country.length <= 10) {
    createSearchResultMarkup(listMarkup);
  } else {
    onSearchError();
  }
}

function onSearchError() {
  refs.searchResult.innerHTML = '';
  return searchError.open();
}

function onFetchError() {
  return fetchError.open();
}
