import axios from "axios";

export const GetPokemons = async (callback) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const { data } = response;
    callback(data.results);
  } catch (error) {
    console.log(error);
  }
};

export const GetPokemon = async (callback, url) => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    callback(data);
  } catch (error) {
    console.log(error);
  }
};
