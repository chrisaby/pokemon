export const getPokemonTypes = (types: []) => {
  return types.map((pokemonType: any) => pokemonType.type.name);
};
