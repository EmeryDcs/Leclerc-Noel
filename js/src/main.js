// ---------- /FONCTIONS COMMUNES

document.addEventListener('DOMContentLoaded', () => {

	let voirProfil = document.getElementById('voirProfil');
	let profil = document.getElementById('profilUser');
	let fermerProfil = document.getElementById('fermerProfil')

	voirProfil.addEventListener('click', (e) => {
		profil.style.display = "flex";
	})

	fermerProfil.addEventListener('click', (e) => {
		profil.style.display = "none";
	})

	let afficherJeu = document.getElementById('voirJeu');
	let afficherCanva = document.getElementById('divCanva');
	let cacherCanva = document.getElementById('fermerCanva');

	afficherJeu.addEventListener('click', (e) => {
		afficherCanva.style.display = 'flex';
	})
	cacherCanva.addEventListener('click', (e) => {
		afficherCanva.style.display = 'none';
	})

})