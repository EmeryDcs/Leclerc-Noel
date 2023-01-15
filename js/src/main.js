// ---------- /FONCTIONS COMMUNES

document.addEventListener('DOMContentLoaded', () => {

	//Utilisateur téléphone retourné ou non
	let telDroit = document.getElementById('telDroit');
	let telRetourne = document.getElementById('telRetourne');

	window.addEventListener("orientationchange", function() {
		if (screen.orientation.angle === 90) {
		  	telDroit.style.display = 'none';
			telRetourne.style.display = 'block';
		} else {
			telDroit.style.display = 'block';
			telRetourne.style.display = 'none';
		}
	  });
	  

	//Affichage du profil en lightbox
	let voirProfil = document.getElementById('voirProfil');
	let profil = document.getElementById('profilUser');
	let fermerProfil = document.getElementById('fermerProfil')

	voirProfil.addEventListener('click', (e) => {
		profil.style.display = "flex";
	})

	fermerProfil.addEventListener('click', (e) => {
		profil.style.display = "none";
	})

	//Affichage du Jeu en lightbox
	let afficherJeu = document.getElementById('voirJeu');
	let afficherCanva = document.getElementById('divCanva');
	let cacherCanva = document.getElementById('fermerCanva');

	afficherJeu.addEventListener('click', (e) => {
		afficherCanva.style.display = 'flex';
	})
	cacherCanva.addEventListener('click', (e) => {
		afficherCanva.style.display = 'none';
	})


	//Imprimer page

	let boutonImprimer = document.getElementById('boutonImprimer');//imprimer('sectionAimprimer')

	boutonImprimer.addEventListener('click', (e) => {
		var printContents = document.getElementById('sectionAimprimer').innerHTML;    
		var originalContents = document.body.innerHTML;      
		document.body.innerHTML = printContents;     
		window.print();     
		document.body.innerHTML = originalContents;
	});

	
	// function imprimer(divName) {
		
	// }
})