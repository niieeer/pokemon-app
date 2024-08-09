import { Pokemon } from "@/lib/type";

type FetchPokemonsResponse = { name: string; url: string }[];

export async function fetchPokemonsWithDetails(
  limit: number
): Promise<Pokemon[]> {
  // récupère les pokémons avec leurs détails
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  // vérifie si la réponse de l'API est ok sinon on lève une erreur
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon list: ${response.statusText}`);
  }

  const data = await response.json();

  const pokemons = data.results as FetchPokemonsResponse;

  const pokemonDetailsPromises = pokemons.map(async (pokemon) => {
    const pokemonResponse = await fetch(pokemon.url);
    if (!pokemonResponse.ok) {
      throw new Error(
        `Failed to fetch Pokémon details for ${pokemon.name}: ${pokemonResponse.statusText}`
      );
    }
    const pokemonDetails = (await pokemonResponse.json()) as Pokemon;
    return {
      name: pokemon.name,
      sprites: pokemonDetails.sprites,
      types: pokemonDetails.types,
      height: pokemonDetails.height,
      weight: pokemonDetails.weight,
      stats: pokemonDetails.stats,
    } as Pokemon;
  });

  const pokemonDetails = await Promise.all(pokemonDetailsPromises);

  return pokemonDetails;
}

export async function fetchPokemonById(id: string): Promise<Pokemon> {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémon by ID`);
  }
  const data = (await response.json()) as Pokemon;

  return data;
}
