import Head from "next/head";
import { About } from "../src/components/About";
import { ContactMe } from "../src/components/ContactMe";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { Projects } from "../src/components/Projects";
import { Qualification } from "../src/components/Qualification";
import { ScrollUp } from "../src/components/ScrollUp";
import { Skills } from "../src/components/Skills";

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Fatih Kayan</title>
        <meta name="description" content="Fatih Kayan Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <ContactMe />

      <Footer />

      <ScrollUp />
    </div>
  );
}
