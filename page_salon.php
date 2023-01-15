<?php 
/*

Template Name: Page Salon

*/
?>
<?php get_header(); ?>

	<main class="accueil">
		<a href="http://localhost/WPLN/"><img src="<?= get_template_directory_uri() ?>/img/SVG/logo.svg" alt="img logo" class="logo"></a>
		<img src="<?= get_template_directory_uri() ?>/img/PNG/salon_jour.png" alt="img fond" class="bg">
		
		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img bouton" class="btnLeft">
		<a href="chambre">
			<div class="iconLeft">
				<div class="arrow"></div>
			</div>
		</a>

		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img bouton" class="btnRight">
		<a href="bureau">
		<div class="iconRight">
			<div class="arrow"></div>
		</div>
		</a>

		
		</section>

	</main>

	

<?php get_footer(); ?>