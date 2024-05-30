//Ejercicio 1
const getRandomPokemon = async () => {
    try {
        const random = Math.floor(Math.random() * 1025);
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
        if (resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}
// const getRandomPokemon = async () => {
//     await fetch (`https://pokeapi.co/api/v2/pokemon/`)
//         .then((resp) => { 
//             return resp.ok ? resp.json() : Promise.reject(resp) 
//         })
//         .then((data) => { 
//             let random = Math.floor(Math.random()*data.count);
//             return random;
//         })
//         .then(async(random)=>{
//             await fetch (`https://pokeapi.co/api/v2/pokemon/${random}`)
//                 .then((randomPoke) => {
//                     return randomPoke.ok ? randomPoke.json() : Promise.reject(randomPoke) 
//                 })
//                 .then((randomPokeJson) => {
//                     console.log(randomPokeJson.abilities.length);
//                     return randomPokeJson;
//                 })
//                 .catch((error) => { 
//                     console.log(error.status) 
//                 })
//         })
//         .catch((error) => { 
//             console.log(error.status) 
//         })
// }

//Ejercicio 2
const getImageAndName = async (pokemon) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (resp.ok) {
            const data = await resp.json();
            const name = data.name;
            const img = data.sprites.front_default;
            return { name, img };
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 3
const printImageAndName = async () => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
        if (resp.ok) {
            const data = await resp.json();
            //document.querySelector('body').innerHTML = `<section><img src="${data.sprites.front_default}" alt="${data.name}"><h1>${data.name}</h1></section>`;
            return `<section><img src="${data.sprites.front_default}" alt="${data.name}"><h1>${data.name}</h1></section>`;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 4
const getRandomDogImage = async () => {
    try {
        const resp = await fetch(`https://dog.ceo/api/breeds/image/random`);
        if (resp.ok) {
            const data = await resp.json();
            return data.message;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 5
const getRandomPokemonImage = async () => {
    try {
        const random = Math.floor(Math.random() * 1025)
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
        if (resp.ok) {
            const data = await resp.json();
            return data.sprites.front_default;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 6
const printPugVsPikachu = async () => {
    try {
        const random = Math.floor(Math.random() * 1025);
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
        if (resp.ok) {
            const data = await resp.json();
            return data.sprites.front_default;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 7
const getRandomCharacter = async () => {
    try {
        const random = Math.floor(Math.random() * 826);
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
        if (resp.ok) {
            const data = await resp.json();
            return data;
        } else {
            throw resp;
        }
    } catch (error) {
        console.error(error);
    }
}

//Ejercicio 8
const getRandomCharacterInfo = async () => {
    try {
        const respAllChars = await fetch(`https://rickandmortyapi.com/api/character/asdasds`);
        if (respAllChars.ok) {
            const data = await respAllChars.json();
            maxChars = data.info.count;
            try {
                const random = Math.floor(Math.random() * maxChars + 1);
                const respChar = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
                if (respChar.ok) {
                    const data2 = await respChar.json();
                    const img = data2.image;
                    const name = data2.name;
                    const episodes = data2.episode;
                    const firstEpisode = data2.episode[0];
                    try {
                        const respEpisode = await fetch(firstEpisode);
                        if (respEpisode.ok) {
                            const data3 = await respEpisode.json();
                            const dateEpisode = data3.air_date;
                            console.log({ img, name, episodes, firstEpisode, dateEpisode });
                            return { img, name, episodes, firstEpisode, dateEpisode };
                        } else {
                            throw respEpisode;
                        }
                    } catch (error) {
                        throw error;
                    }
                } else {
                    throw respChar;
                }
            } catch (error) {
                throw error;
            }
        } else {
            throw respAllChars;
        }
    } catch (error) {
        throw error;
    }
}

// const getRandomCharacterInfo = async () => {
//     try {
//         const random = Math.floor(Math.random() * 826);
//         const resp = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
//         if (resp.ok) {
//             const data = await resp.json();
//             const img = data.image;
//             const name = data.name;
//             const episodes = data.episode;
//             let firstEpisode;
//             let dateEpisode;
//             const url = data.url;

//             try {
//                 const resp = await fetch(`https://rickandmortyapi.com/api/episode`);
//                 if (resp.ok) {
//                     const data = await resp.json();
//                     const maxPages = data.info.pages;

//                     try {
//                         for (let page = 1; page < maxPages; page++) {
//                             const extra = await fetch(`https://rickandmortyapi.com/api/episode/?page=${page}`);
//                             if (extra.ok) {
//                                 const data2 = await extra.json();
//                                 let arrEpisodes = data2.results;
//                                 let arrCharacters;
//                                 let found;

//                                 for (let i = 0; i < arrEpisodes.length; i++) {
//                                     arrCharacters = arrEpisodes[i].characters;
//                                     found = arrCharacters.find((char) => char.toString() === url);

//                                     if (found) {
//                                         firstEpisode = arrEpisodes[i].name;
//                                         dateEpisode = arrEpisodes[i].air_date;
//                                         break;
//                                     } else {
//                                         // console.log("Personaje incompleto");
//                                         firstEpisode = "NO INFO";
//                                         dateEpisode = "NO INFO";
//                                         continue;
//                                     }
//                                 }
//                                 console.log({ img, name, episodes, firstEpisode, dateEpisode });
//                                 return { img, name, episodes, firstEpisode, dateEpisode };

//                             } else {
//                                 throw extra;
//                             }
//                         }
//                     } catch (error) {
//                         console.error(error);
//                     }
//                 } else {
//                     throw resp;
//                 }
//             } catch (error) {
//                 console.error(error);
//             }
//         } else {
//             throw resp;
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }