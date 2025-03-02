export default function Footer(){
  return(
    <>
      <footer className="flex flex-row justify-between items-end bg-white text-black mt-[50px] pb-[10px] pl-[15px] pr-[15px]">
        <img 
          src=".\assets\logo-pokemon-fundo-removido-removebg-preview.png" 
          alt="logo pokémon"
          className="sm:w-[200px] w-[150px] mr-[30px]"
        />
        <nav className="flex flex-row justify-end items-end gap-[20px]">
          <a href="https://www.instagram.com/pokemon/" target="_blank">
            <img
              src=".\assets\icon-instagram.png"
              alt="ícone instagram"
              className="w-[30px]"
            />
          </a>
          <a href="https://www.youtube.com/@pokemon" target="_blank">
            <img 
              src=".\assets\icon-youtube.png" 
              alt="ícone youtube"
              className="w-[30px]"
            />
          </a>
          <a href="https://www.facebook.com/Pokemon/" target="_blank">
            <img 
              src=".\assets\icon-facebook.png" 
              alt="ícone facebook" 
              className="w-[30px]"
            />
          </a>
          <a href="https://x.com/Pokemon" target="_blank">
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