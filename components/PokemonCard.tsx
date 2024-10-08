import { Pokemon } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import InfoBadge from "./InfoBadge";
import PokemonStats from "./PokemonStats";
import TypeBadge from "./TypeBadge";
import { Button } from "./ui/button";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-4 flex flex-col h-full">
      <Link
        href="/"
        className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
      >
        <Button className="bg-blue-500 hover:bg-blue-700">Retour</Button>
      </Link>
      <h1 className="text-3xl text-center font-bold capitalize text-gray-800">
        {pokemon.name}
      </h1>
      <div className="flex justify-center items-center gap-4">
        <Image
          width={200}
          height={200}
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="mt-4 text-gray-600 flex flex-col gap-4 overflow-auto flex-1">
        <p className="text-lg">
          Type:
          {pokemon.types.map((typeInfo) => (
            <TypeBadge key={typeInfo.type.name} typeName={typeInfo.type.name} />
          ))}
        </p>
        <div className="flex gap-3">
          <InfoBadge label="Taille" value={`${pokemon.height / 10} m`} />
          <InfoBadge label="Poids" value={`${pokemon.weight / 10} kg`} />
        </div>
        <PokemonStats stats={pokemon.stats} />
      </div>
    </div>
  );
};

export default PokemonCard;
