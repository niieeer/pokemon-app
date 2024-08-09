import { fetchPokemonById } from "@/app/api/fetchPokemons";
import PokemonCard from "@/components/PokemonCard";

// Recherche un pokémon en fonction de son id récuperer en parametre
export default async function Page({ params }: { params: { id: string } }) {
  const pokemon = await fetchPokemonById(params.id);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
