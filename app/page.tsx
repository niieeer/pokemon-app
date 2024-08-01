"use client";
import Pagination from "@/components/Pagination";
import SortPokemon from "@/components/SortPokemon";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";

export default function Home() {
  const [pokemon, setPokemon] = useState<any[]>([]);

  const [sortOrder, setSortOrder] = useState("asc");

  const [page, setPage] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  // récupère les données des Pokémons depuis l'API et les stocke dans le state
  useEffect(() => {
    async function getPokemon() {
      const data = await fetchPokemons(100);
      setPokemon(data);
    }
    getPokemon();
  }, []);

  // fonction pour la pagination
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // fonction pour l'input de recherche
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(1); // réinitialise à la première page lors d'une nouvelle recherche
  };

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-2xl scroll-m-20 text-4xl font-extrabold tracking-tight">
          Pokédex des 100 premiers Pokémons !
        </h1>
        <Input
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Rechercher un Pokémon"
          type="text"
        />
        <SortPokemon
          pokemons={pokemon}
          sortOrder={sortOrder}
          setPokemons={setPokemon}
          setSortOrder={setSortOrder}
        />
        {/* Affichage des Pokémons triés */}
        <Pagination
          items={filteredPokemon}
          page={page}
          itemsPerPage={20}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
