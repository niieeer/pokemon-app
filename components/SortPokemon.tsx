import { Button } from "./ui/button";

interface SortPokemonProps {
  pokemons: any[];
  sortOrder: string;
  setPokemons: (pokemons: any[]) => void;
  setSortOrder: (order: string) => void;
}

const SortPokemon: React.FC<SortPokemonProps> = ({
  pokemons,
  sortOrder,
  setPokemons,
  setSortOrder,
}) => {
  const sortPokemons = () => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);

    const sortedPokemons = [...pokemons].sort((a, b) => {
      if (newOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setPokemons(sortedPokemons);
  };

  return (
    <Button onClick={sortPokemons}>
      Trier par {sortOrder === "asc" ? "descendant" : "ascendant"}
    </Button>
  );
};

export default SortPokemon;
