export default function Footer(){
	return(
		<>
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