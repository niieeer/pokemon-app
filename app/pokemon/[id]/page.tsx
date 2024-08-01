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
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 space-y-4">
        <Link
          href={"/"}
          className="text-blue-500 hover:text-blue-700 font-semibold text-sm"
        >
          Retour
        </Link>
        <h1 className="text-3xl text-center font-bold capitalize text-gray-800">
          {pokemon.name}
        </h1>
        <div className="flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            className="rounded-lg shadow-md"
          />
          <div className="mt-4 text-gray-600">
            <p className="text-lg">
              Type:{" "}
              <span className="border p-1">{pokemon.types[0].type.name}</span>
            </p>
            <p className="text-lg">Taille: {pokemon.height / 10} m</p>
            <p className="text-lg">Poids: {pokemon.weight / 10} kg</p>
            {/* son du pokemon
            <audio controls src={pokemon.cries.latest}>
              Your browser does not support the
              <code>audio</code> element.
            </audio> */}
          </div>
        </div>
      </div>
    </div>
  );
}
