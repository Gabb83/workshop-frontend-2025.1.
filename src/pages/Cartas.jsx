'use client'

import './cartas.css';
import { useEffect, useState } from "react";
import Header from "@/components/Header/Header"
import CartaPokemon from "@/components/CartaPokemon/CartaPokemon";

export default function Cartas(){
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards")
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <>
      <CartaPokemon />
      <h2 class="t2">Cartas Pokémon TCG</h2>
      {data ? (
        <section class="container">
          {data.slice(0, 10).map((card) => (
            <div class="card" key={card.id}>
              <img src={card.images.large} alt={card.name} width="150" />
              <p>Nome: {card.name}</p>
              <p>Tipo: {card.types}</p>
              <p>Raridade: {card.rarity}</p>
            </div>
          ))}
        </section>
      ) : (
        <p>Carregando...</p>
      )}
      <footer className="flex flex-row justify-between items-end bg-red-900 text-white mt-[50px] pb-[10px] pl-[15px] pr-[15px]">
				<img 
					src=".\assets\logo-pokemon-fundo-removido-removebg-preview.png" 
					alt="logo pokémon"
					className="w-[200px]"
				/>
				<nav className="flex flex-row justify-end items-end gap-[20px]">
					<a href="https://www.instagram.com/pokemon/">
						<img
							src=".\assets\icon-instagram.png"
							alt="ícone instagram"
							className="w-[30px]"
						/>
					</a>
					<a href="https://www.youtube.com/@pokemon">
						<img 
							src=".\assets\icon-youtube.png" 
							alt="ícone youtube"
							className="w-[30px]"
						/>
					</a>
					<a href="https://www.facebook.com/Pokemon/">
						<img 
							src=".\assets\icon-facebook.png" 
							alt="ícone facebook" 
							className="w-[30px]"
						/>
					</a>
					<a href="https://x.com/Pokemon">
						<img 
							src=".\assets\icon-twitter.png" 
							alt="ícone x"
							className="w-[30px]"
						/>
					</a>
				</nav>
			</footer>
    </>
  );
}
