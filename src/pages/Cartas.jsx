'use client'

import './cartas.css';
import { useEffect, useState } from "react";
import Link from 'next/link';
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
      <header>
        <figure>
          <img
            src=".\assets\image-pokebola.png"
            alt="pokebola icon"
            width="50px"
            height="50px"
          />
          <h1>Desafio Pokémon</h1>
        </figure>
        <nav>
          <ul>
            <li><Link href="/">Início</Link></li>
            <li>|</li>
            <li><Link href="/Cartas">Cartas</Link></li>
          </ul>
        </nav>
      </header>
      <CartaPokemon />
      <h2 class="t2">Cartas Pokémon TCG</h2>
      {data ? (
        <section class="container">
          {data.slice(0, 30).map((card) => (
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
      <footer>
				<img 
					src=".\assets\logo-pokemon-fundo-removido-removebg-preview.png" 
					alt="logo pokémon"
				/>
				<nav>
					<a href="https://www.instagram.com/pokemon/" target="_blank">
						<img
							src=".\assets\icon-instagram.png"
							alt="ícone instagram"
						/>
					</a>
					<a href="https://www.youtube.com/@pokemon" target="_blank">
						<img 
							src=".\assets\icon-youtube.png" 
							alt="ícone youtube"
						/>
					</a>
					<a href="https://www.facebook.com/Pokemon/" target="_blank">
						<img 
							src=".\assets\icon-facebook.png" 
							alt="ícone facebook" 
						/>
					</a>
					<a href="https://x.com/Pokemon" target="_blank">
						<img 
							src=".\assets\icon-twitter.png" 
							alt="ícone x"
						/>
					</a>
				</nav>
			</footer>
    </>
  );
}