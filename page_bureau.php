<?php 
/*

Template Name: Page Bureau

*/
?>
<?php get_header(); ?>

	<main class="accueil">
		<a href="http://localhost/WPLN/"><img src="<?= get_template_directory_uri() ?>/img/SVG/logo2.svg" alt="img logo" class="logo2"></a>
		<img src="<?= get_template_directory_uri() ?>/img/PNG/bureau_jour.png" alt="img fond" class="bg">
		
		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img boutton" class="btnLeft">
		<a href="salon">
			<div class="iconLeft">
				<div class="arrow"></div>
			</div>
		</a>

		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img boutton" class="btnRight">
		<a href="chambre">
		<div class="iconRight">
			<div class="arrow"></div>
		</div>
		</a>

		<?php 
		if ( $_SESSION['jour'] == 1){
			echo '
			<img src="'.get_template_directory_uri().'/img/PNG/lutin.png" alt="lutin" id="lutin">


		<div id="fond">
			<div id="box">
			<img src="'.get_template_directory_uri().'/img/SVG/guirlande-16.svg" alt="guirlande" id="guirlande">
			<img src="'.get_template_directory_uri().'/img/PNG/lutin.png" alt="lutin" id="lutinPop">

				<div id="content">
					<p id="Presentation">Bonjour moi c est Rusé</p>
					
				</div>
				<button id="PresentationFin">Finito</button>

			</div>
		</div>';
		}
		?>

		<!-- <section id="day1">

				<img src="<?= get_template_directory_uri() ?>/img/PNG/lutin.png" alt="lutin" id="lutin">
				<img src="<?= get_template_directory_uri() ?>/img/PNG/fifou.png" alt="lutin" id="lutin2">

			<div id="fond">
				<div id="box">
					<img src="<?= get_template_directory_uri() ?>/img/SVG/guirlande-16.svg" alt="guirlande" class="guirlande">
					<img src="<?= get_template_directory_uri() ?>/img/PNG/lutin.png" alt="lutin" id="lutinPop">
					<img src="<?= get_template_directory_uri() ?>/img/PNG/fifou.png" alt="lutin" id="lutinPop2">
					<div id="content">
						<p id="first"></p>
						<p id="second"></p>
						
					</div>
					<button id="next">Next</button>
					<button id="nextPerso">Next perso</button>
					<button id="fin">Finito</button>

				</div>
			</div>
		</section> -->

	</main>

<?php get_footer(); ?>