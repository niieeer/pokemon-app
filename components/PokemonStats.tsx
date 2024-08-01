import { Progress } from "@/components/ui/progress";
import { Pokemon } from "@/lib/type";
import React from "react";

interface PokemonStatsProps {
  stats: Pokemon["stats"];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => (
  <div className="flex gap-2 flex-col">
    <p className="text-lg">Statistiques :</p>
    {stats.map((pokemon) => (
      <div className="text-lg capitalize" key={pokemon.stat.name}>
        {pokemon.stat.name} : {pokemon.base_stat}
        <Progress value={pokemon.base_stat} />
      </div>
    ))}
  </div>
);

export default PokemonStats;
