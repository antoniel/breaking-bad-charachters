import Head from "next/head";
import { useEffect, useState } from "react";
import { CharacterInfo, Container, NavBar, SearchBar } from "src/components";
import { Characters } from "src/types/Characters";

export default function Home() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [error, setError] = useState<Error | false>(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [error, characters]);

  return (
    <>
      <Head>
        <title>Breaking Bad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <SearchBar
          setCharacters={setCharacters}
          setError={setError}
          setLoading={setLoading}
        />
        {isLoading && <LoadingPlaceholder />}
        {error && !characters.length && <ErrorCard error={error.message} />}
        {Boolean(characters.length) && <CharacterInfo data={characters[0]} />}
      </Container>
    </>
  );
}

const ErrorCard = ({ error = "" }) => {
  return (
    <div className="max-w-screen-md card-gradient w-8/12 py-4 rounded-lg">
      <p className="text-xl font-extrabold text-center text-red-900">{error}</p>
    </div>
  );
};

const LoadingPlaceholder = () => {
  return (
    <div className="w-full h-16 rounded-lg card-gradient animate-pulse max-w-screen-md">
      <span className="flex items-center justify-center h-16 text-xl font-extrabold text-center text-gray-300 align-center">
        Loading...
      </span>
    </div>
  );
};
