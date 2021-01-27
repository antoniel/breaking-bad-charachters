import { Dispatch, SetStateAction, SyntheticEvent, useCallback } from "react";
import { Characters } from "src/types/Characters";
import { Input } from "./style";

interface SearchBarProps {
  setCharacters: Dispatch<SetStateAction<Characters[]>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<Error | false>>;
}
export const SearchBar: React.FC<SearchBarProps> = ({
  setCharacters,
  setLoading,
  setError,
}) => {
  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.target[0].value;
    const charachtersData = await fetchCharacters(inputValue);
    setCharacters(charachtersData);
  };

  const fetchCharacters = async (
    charactersName: string
  ): Promise<Characters[]> => {
    setLoading(true);
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/?name=${charactersName}`
    );
    const data = await response.json();

    const appearsInBetterCallSaul = data[0]?.category.includes(
      "Better Call Saul"
    );

    if (!response.ok) setError(new Error("Request charachters fail"));
    if (!data.length) setError(new Error("Character not founded"));
    if (appearsInBetterCallSaul) {
      setError(new Error("Character appears also in Better Call Saul Serie"));
      return [];
    }

    return data;
  };

  return (
    <form
      className="relative w-full mx-auto max-w-screen-md"
      onSubmit={handleSubmit}
    >
      <Input
        autoComplete="off"
        className="w-full h-20 px-8 text-2xl rounded-lg outline-none card-gradient"
        name="search"
        placeholder="Pesquise por um personagem "
        title="search"
      />
      <button
        type="submit"
        className="absolute h-8 cursor-pointer top-1/2 right-8 transform -translate-y-1/2"
      >
        <img src="/Search.svg" alt="Logo" />
      </button>
    </form>
  );
};
