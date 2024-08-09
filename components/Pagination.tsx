import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface PaginationProps {
  items: any[];
  page: number;
  itemsPerPage: number;
  onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  page,
  itemsPerPage,
  onPageChange,
}) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = items.slice(startIndex, endIndex);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="flex gap-4 mt-4 justify-center items-center">
        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
        >
          Précédent
        </Button>
        <p className="text-l text-gray-800">
          Page {page} sur {totalPages}
        </p>
        <Button
          className="bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
          onClick={() => onPageChange(page + 1)}
          disabled={endIndex >= items.length}
        >
          Suivant
        </Button>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedItems.map((pokemon) => (
          <Link
            href={`/pokemon/${pokemon.name}`}
            key={pokemon.name}
            className="text-center border border-gray-300 p-6 rounded-lg bg-white shadow-md hover:bg-gray-100 transition capitalize"
          >
            <Image
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
              width={100}
              height={100}
            />
            {pokemon.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
