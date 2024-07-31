export async function fetchPokemon(limit: number) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  const data = await response.json();
  return data.results;
}
