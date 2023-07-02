const API_KEY ='live_iPIUW0zpVsIEX95EFe0oJS2DLHG6XxcUKhYew6OUlKQnmsxeFRE6hEaxxh18WPTv';

function fetchApi(url) {

  return fetch(url, {
    headers: {
      'x-api-key': API_KEY,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.log('Error:', error);
      throw error;
    });
}
export function fetchBreeds() {
  const url = 'https://api.thecatapi.com/v1/breeds';
  return fetchApi(url);
}

export function fetchCatByBreed(breedId) {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  return fetchApi(url);
}