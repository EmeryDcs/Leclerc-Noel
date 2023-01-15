<?php 
/*

Template Name: Page Usine

*/
?>
<?php get_header(); ?>
	<main class="accueil">
		<a href="http://localhost/WPLN/"><img src="<?= get_template_directory_uri() ?>/img/SVG/logo.svg" alt="img logo" class="logo"></a>
		<img src="<?= get_template_directory_uri() ?>/img/PNG/usine_jour.png" alt="img fond" class="bg">
		
		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img boutton" class="btnLeft">
		<a href="cantine">
			<div class="iconLeft">
				<div class="arrow"></div>
			</div>
		</a>

		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img boutton" class="btnRight">
		<a href="enclos">
		<div class="iconRight">
			<div class="arrow"></div>
		</div>
		</a>
		<?php 
		if ( $_SESSION['jour'] == 1){
			echo '
			<img src="'.get_template_directory_uri().'/img/PNG/malicette.png" alt="flocon" id="lutin">


		<div id="fond">
			<div id="box">
			<img src="'.get_template_directory_uri().'/img/SVG/guirlande-16.svg" alt="guirlande" id="guirlande">
			<img src="'.get_template_directory_uri().'/img/PNG/malicette.png" alt="malicette.png id="lutinPop">

				<div id="content">
					<p id="Presentation">Bonjour ! Moi c’est Malicette, enchantée, hihi ! Je travaille principalement dans l’usine de cadeaux, c’est moi qui m’occupe de la machine pour les fabriquer, hihi !  </p>
					
				</div>
				<button id="PresentationFin">Finito</button>

			</div>
		</div>';
		}
		?>
		
	</main>
	
	

<?php get_footer(); ?>