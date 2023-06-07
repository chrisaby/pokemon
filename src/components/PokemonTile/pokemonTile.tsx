import Image from "next/image";

type TileProps = {
  id: number;
};

const PokemonTile: React.FC<TileProps> = ({ id }) => {
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="w-16 h-16 rounded-full overflow-hidden flex items-center bg-green-100 cursor-pointer hover:scale-125 transition-all">
      <Image
        src={url}
        alt="Pokemon Avatar"
        className="dark:invert"
        width={64}
        height={64}
        priority
      />
    </div>
  );
};

export default PokemonTile;
