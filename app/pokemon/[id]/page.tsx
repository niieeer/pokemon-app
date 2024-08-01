import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";

// Recherche un pokémon en fonction de son id récuperer en parametre
export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}/`
  );
  const pokemon = await response.json();

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6 space-y-4 flex flex-col h-full">
        <Link
          href={"/"}
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
            Type:{" "}
            <span className="ml-1 relative rounded bg-muted px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold capitalize cursor-pointer">
              {pokemon.types[0].type.name}
            </span>
          </p>
          <div className="flex gap-3">
            <p className="text-lg">
              Taille:
              <span className="ml-1 relative rounded bg-muted px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold capitalize cursor-pointer">
                {pokemon.height / 10} m
              </span>{" "}
            </p>
            <p className="text-lg">
              Poids:
              <span className="ml-1 relative rounded bg-muted px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold capitalize cursor-pointer">
                {pokemon.weight / 10} kg
              </span>{" "}
            </p>
          </div>

          <p className="text-lg">Statistiques :</p>
          {pokemon.stats.map((stat: any) => (
            <div className="text-lg capitalize" key={stat.stat.name}>
              {stat.stat.name} : {stat.base_stat}
              <Progress value={stat.base_stat} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
