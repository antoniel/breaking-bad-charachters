import Head from "next/head";
import { CharacterInfo, Container, NavBar, SearchBar } from "src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Breaking Bad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Container>
        <SearchBar />
        <CharacterInfo />
      </Container>
    </>
  );
}
