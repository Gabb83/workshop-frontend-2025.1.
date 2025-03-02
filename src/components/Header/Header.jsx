import Link from 'next/link';

export default function Header(){
  return(
    <>
      <header className="flex flex-row justify-between items-center bg-red-800 text-white p-[15px]">
        <figure className="flex flex-row items-center gap-[10px]">
          <img
            src=".\assets\image-pokebola.png"
            alt="pokebola icon"
            width="50px"
            height="50px"
          />
          <h1>Desafio Pokémon</h1>
        </figure>
        <nav>
          <ul className="flex flex-row items-center justify-around gap-[15px] disc-none">
            <li><Link href="/">Início</Link></li>
            <li>|</li>
            <li><Link href="/Cartas">Cartas</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
}