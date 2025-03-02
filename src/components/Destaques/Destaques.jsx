export default function Destaques(){
  return(
    <>
      <main className="flex flex-col items-center justify-center mt-[80px] mb-[80px] pl-[15px] pr-[15px]">
        <h2 className="text-[30px] font-[500] mb-[20px]">Destaques</h2>
        <section className="flex flex-col items-center gap-[20px]">
          <img
            src=".\assets\image-pokemon-journeys.jpg"
            alt="" 
            className="w-[500px] rounded-[20px]"
          />
          <a href="https://www.pokemon.com/br" target="_blank">
            <button className="bg-slate-400 rounded-[5px] p-[5px] w-[120px] font-[600]">Site Oficial</button>
          </a>
        </section>
      </main>
    </>
  );
}