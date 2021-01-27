import Head from "next/head";
import { useEffect, useState } from "react";
import { CharacterInfo, Container, NavBar, SearchBar } from "src/components";
import { Characters } from "src/types/Characters";

export default function Home() {
  const [characters, setCharacters] = useState<Characters[]>([]);
  const [error, setError] = useState<Error | false>(false);
  useEffect(() => {
    console.log("state", characters);
  }, []);
  return (
    <>
      <Head>
        <title>Breaking Bad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <SearchBar setCharacters={setCharacters} setError={setError} />
        {error && !characters.length ? (
          <ErrorCard error={error.message} />
        ) : null}
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
