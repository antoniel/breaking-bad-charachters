import Head from "next/head";
import { useEffect, useState } from "react";
import { CharacterInfo, Container, NavBar, SearchBar } from "src/components";
import { Characters } from "src/types/Characters";

export default function Home() {
  const [characters, setCharacters] = useState<Characters[]>([]);
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
        <SearchBar setCharacters={setCharacters} />
        {Boolean(characters.length) && <CharacterInfo />}
      </Container>
    </>
  );
}
