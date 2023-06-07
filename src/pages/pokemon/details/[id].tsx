import Image from "next/image";
import { useRouter } from "next/router";

import { useGetPokemonByNameQuery } from "@/redux/services/pokemon";
import { getPokemonTypes } from "@/utils";

const DeatiledView: React.FC = () => {
  const router = useRouter();
  const id = router.query.id || "";
  const { data: pokemonData, isLoading } = useGetPokemonByNameQuery(`${id}`);

  if (isLoading)
    return (
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        Loading ...
      </div>
    );

  if (!pokemonData) return <div></div>;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 rounded-full overflow-hidden flex items-center bg-green-100">
        <Image
          src={pokemonData.sprites.front_default}
          alt="Pokemon Avatar"
          className="dark:invert"
          width={64}
          height={64}
          priority
        />
      </div>
      <div>{pokemonData.name}</div>
      <div className="flex">
        Type : {getPokemonTypes(pokemonData.types).join(", ")}
      </div>
      <div>
        <div>Height: {pokemonData.height}</div>
        <div>Weight: {pokemonData.weight}</div>
      </div>
    </div>
  );
};

export default DeatiledView;
