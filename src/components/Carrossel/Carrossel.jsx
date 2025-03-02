export default function Carrossel(){
  return(
    <>
      <main className="flex flex-col items-center justify-center mt-[80px] mb-[80px] pl-[15px] pr-[15px]">
        <h2 className="text-[30px] font-[500] mb-[20px]">Destaques</h2>
        <section>
          <img
            src=".\assets\image-pokemon-journeys.jpg"
            alt="" 
            className="w-[500px] rounded-[20px]"
          />
        </section>
      </main>
    </>
  );
}