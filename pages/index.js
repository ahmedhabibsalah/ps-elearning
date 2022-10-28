import Head from "next/head";
import About from "../components/Home/About/About";
import Contact from "../components/Home/Contact/Contact";
import Courses from "../components/Home/Courses/Courses";
import Hero from "../components/Home/Hero/Hero";
import Prices from "../components/Home/Price/Prices";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import NavBar from "../components/Layout/NavBar";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex flex-col">
        <NavBar />
        <Hero />
        <About />
        <Courses />
        <Prices />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
