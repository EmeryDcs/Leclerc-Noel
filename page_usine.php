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

	</main>
	

<?php get_footer(); ?>