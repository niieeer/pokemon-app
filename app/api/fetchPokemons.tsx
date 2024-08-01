export async function fetchPokemons(limit: number) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokémons`);
  }
  const data = await response.json();
  return data.results;
}
