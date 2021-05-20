export default class SearchApi {
  constructor() {
    this.searchQuery = ' ';
  }

  fetchCountries() {
    const URL = 'https://restcountries.eu/rest/v2/name';
    return fetch(`${URL}/${this.searchQuery}`).then(response => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
    });
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }
}
