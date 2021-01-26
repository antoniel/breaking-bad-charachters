import Head from "next/head";
import { Container, NavBar, SearchBar } from "src/components";

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
      </Container>
    </>
  );
}
