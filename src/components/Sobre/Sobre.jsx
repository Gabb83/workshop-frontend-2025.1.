export default function Sobre(){
  return(
    <main className="mt-[140px] pl-[15px] pr-[15px]">
      <h2 className="text-[30px] text-center font-[500]">Sobre o Anime</h2>
      <section className="flex flex-col justify-between items-center gap-[30px] mt-[20px] lg:flex-row">
        <img
          src=".\assets\image-ash-pikachu.png"
          alt=""
          className="w-[450px] rounded-[15px]"
        />
        <div className="text-[17px]">
          <p>Com o auge dos jogos Pokémon Red e Pokémon Green, lançados no ano de 1996 no Japão, não demorou muito para que sua versão animada fosse lançada e aumentada ainda mais a febre da franquia dos monstrinhos de bolso pelo mundo.</p><br></br>
          <p>Estreado em 1997, a série de anime Pocket Monsters (ou Pokémon: A Série, no ocidente) atualmente conta com mais de mil episódios divididos em 23 temporadas e 7 séries principais: Pokémon, Geração Avançada, Diamante e Pérola, Preto e Branco (Best Whishes, no Japão), XY, Sol e Lua, e Jornadas (chamada simplesmente de Pocket Monsters, no Japão). Durante todos esses anos a história segue o garoto de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se tornar um Mestre Pokémon.</p>
          <div className="flex flex-row justify-end">
            <a 
              href="https://www.poke-blast-news.net/2010/11/anime-bw-09-e-10-legendados.html"
              target="_blank"  
            >
              <button className="w-[120px] h-[40px] text-white bg-blue-700 rounded-[10px] mt-[30px] mr-[20px]">Continua...</button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}