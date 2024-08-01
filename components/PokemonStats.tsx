import { Progress } from "@/components/ui/progress";
import { Pokemon } from "@/lib/type";
import React from "react";

interface PokemonStatsProps {
  stats: Pokemon["stats"];
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => (
  <div className="flex gap-2 flex-col">
    <p className="text-lg">Statistiques :</p>
    {stats.map((stat) => (
      <div className="text-lg capitalize" key={stat.stat.name}>
        {stat.stat.name} : {stat.base_stat}
        <Progress value={stat.base_stat} />
      </div>
    ))}
  </div>
);

export default PokemonStats;
