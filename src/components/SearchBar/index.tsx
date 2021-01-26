import { Dispatch, SetStateAction, SyntheticEvent, useCallback } from "react";
import { Characters } from "src/types/Characters";
import { Input } from "./style";

interface SearchBarProps {
  setCharacters: Dispatch<SetStateAction<Characters[]>>;
}
export const SearchBar: React.FC<SearchBarProps> = ({ setCharacters }) => {
  const fetchCharacters = async (
    charactersName: string
  ): Promise<Characters[]> => {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/?name=${charactersName}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Request charachters fail");
    }
    return response.json();
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue: string = e.target[0].value;
    const charachtersData = await fetchCharacters(inputValue);
    setCharacters(charachtersData);
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
