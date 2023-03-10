import axios from 'axios'
/**
 * Fetches first 150 Pokemon and returns an array of obejcts,
 * where each object represents a Pokemon.
 *
 */

export async function getPokemonList() {
    const data = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150`
    );
    const response = await data.json();
    return response.results;
}

// Fetch data from JSON api / users => should retrieve data for 10 random users 

// axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         console.log("de laaxios", response)
//     })

export async function getNames() {
    const namesData = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    const response = await namesData.json();
    return response;
}



/**
 * @returns {string} Short description of Pokemon
 */
export async function getPokemonDescription(url) {
    const pokemon = await fetch(url)
    const response = await pokemon.json();
    return response.flavor_text_entries[0].flavor_text.replace(/[\n\f]/g, " ");
}

/**
 * Returns URL of a Pokemon sprite image
 */
export function getPokemonSpriteUrl() {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png`;
}

export async function getPokemonDescriptionUrl(url) {
    const pokemon = await fetch(url)
    const response = await pokemon.json();
    return response
}



export async function getActivity() {
    return axios.get('http://www.boredapi.com/api/activity/')
        .then((response) => {
            return response.data.activity
        })
}