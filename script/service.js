import { sortMovies } from "./helpers.js";

export function getMovies() {
    return fetch('https://run.mocky.io/v3/6f61987f-ca16-437b-89c7-dd0224737056')
		.then((response) => response.json())
		.then(sortMovies);
}