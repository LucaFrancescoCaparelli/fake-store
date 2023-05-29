const BASE_URL = "https://fakestoreapi.com";

export function fetchAllProducts() {
  return fetch(`${BASE_URL}/products`)
    .then((response) => response.json())
    .then((data) => data);
}
