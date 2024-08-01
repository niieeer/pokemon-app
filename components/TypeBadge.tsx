import { cn } from "@/lib/utils";

interface TypeBadgeProps {
  typeName: string;
}

const typeClasses: { [key: string]: string } = {
  grass: "bg-green-500",
  fire: "bg-red-500",
  water: "bg-blue-500",
  bug: "bg-green-700",
  normal: "bg-gray-400",
  poison: "bg-purple-500",
  electric: "bg-yellow-500",
  ground: "bg-yellow-800",
  fairy: "bg-pink-400",
  fighting: "bg-red-700",
  psychic: "bg-pink-700",
  rock: "bg-gray-700",
  ghost: "bg-purple-700",
  ice: "bg-blue-200",
  dragon: "bg-indigo-700",
  dark: "bg-gray-800",
  steel: "bg-gray-500",
  flying: "bg-blue-300",
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ typeName }) => {
  // si le type est inconnu, on affiche du gris..
  const typeClass = typeClasses[typeName] || "bg-gray-200";
  return (
    <span
      className={cn(
        "ml-1 mt-1 relative rounded px-[0.4rem] py-[0.4rem] font-mono text-lg font-semibold uppercase cursor-pointer text-white",
        typeClass
      )}
    >
      {typeName}
    </span>
  );
};

export default TypeBadge;
