import './CartaPokemon.css';
import { useState } from 'react';

export default function CartaPokemon() {
  const [searchCarta, setSearchCarta] = useState("");
  const [cartaData, setCartaData] = useState(null);
  const [error, setError] = useState(null);

  const ProcuraCarta = () => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchCarta}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.data && json.data.length > 0) {
          setCartaData(json.data[0]);
          setError(null);
        } else {
          setCartaData(null);
          setError("Pokémon não encontrado");
        }
      });
  };

  return (
    <>
      <section class="procura-pokemon">
        <h2>Quem é esse pokémon??</h2>
        <div className="container">
          <div class="entrada">
            <img
              src="./assets/image-pokebola.png"
              alt=""
            />
            <div>
              <input
                className="input-procurador"
                type="text"
                placeholder="Digite o nome do pokémon"
                value={searchCarta}
                onChange={(e) => setSearchCarta(e.target.value)}
              />
              <button onClick={ProcuraCarta}>Buscar</button>
            </div>  
          </div>
          <div>
            {cartaData && (
              <div className="card">
                <img
                  src={cartaData.images.large}
                  alt={cartaData.name}
                />
                <p>Nome: {cartaData.name}</p>
                <p>Tipo: {cartaData.types}</p>
                <p>Raridade: {cartaData.rarity}</p>
              </div>
            )}
            {error && <p>{error}</p>}
          </div>
        </div>
      </section>
    </>
  );
}