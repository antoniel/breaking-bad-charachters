import { Input } from "./style";

export const SearchBar = () => {
  return (
    <form
      className="relative w-full mx-auto max-w-screen-md"
      onSubmit={console.log}
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
        <img src="/Search.svg" alt="Logo" className="" />
      </button>
    </form>
  );
};
