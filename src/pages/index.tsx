import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

import PokemonTile from "@/components/PokemonTile/pokemonTile";

const PokeTiles: any = [];

for (let i = 1; i < 152; i++) {
  PokeTiles.push(
    <Link href={`/pokemon/details/${i}`}>
      <PokemonTile id={i} key={i} />
    </Link>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Pokemon</title>
      </Head>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="py-16 flex justify-center">
          <Image
            src="/images/PokemonLogoNew.png"
            alt="Pokemon Avatar"
            className="dark:invert"
            width={600}
            height={400}
            priority
          />
        </div>
        <div className="px-24 py-8 flex gap-4 flex-wrap justify-evenly border border-black">
          {...PokeTiles}
        </div>
      </div>
    </main>
  );
}
