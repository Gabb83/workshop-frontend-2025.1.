'use client'

import Header from "@/components/Header/Header"
import Sobre from "@/components/Sobre/Sobre";
import Carrossel from "@/components/Carrossel/Carrossel";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-row justify-center gap-[80px] mt-[80px]">
          <div>
            <img
              src=".\assets\image-pokemon-journeys.jpg"
              alt="logo pokemon"
              className="w-[350px] rounded-[20px] mt-[90px] shadow-lg hover:translate-y-[-20px] duration-700 lg:block hidden"
            />
            </div>
            <div>
            <img
              src=".\assets\image-logo-pokemon.png"
              alt="logo pokemon"
              className="w-[350px] rounded-[20px] shadow-lg hover:translate-y-[-20px] duration-700 lg:w-[400]"
            />
          </div>
          <div>
            <img
              src=".\assets\image-pokemon-25-anos.png"
              alt="logo pokemon"
              className="w-[350px] rounded-[20px] mt-[90px] shadow-lg hover:translate-y-[-20px] duration-700 lg:block hidden"
            />
          </div>
      </section>
      <Sobre />
      <Carrossel />
      <Footer />
    </>
  );
}