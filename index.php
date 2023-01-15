<?php get_header(); ?>

	<main>

		<!-- <nav>
		<a href="http://localhost/WPLN/chambre/">La chambre du Père Noel</a>
		<a href="http://localhost/WPLN/salon/">Le salon </a>
			<a href="http://localhost/WPLN/bureau/">Le bureau</a>
			<a href="http://localhost/WPLN/usine/">L'usine</a>
			<a href="http://localhost/WPLN/cantine/">La cantine des Lutins</a>
			<a href="http://localhost/WPLN/enclos/">L'enclos</a>
		</nav> -->

		<section class="accueil">
			<img src="<?= get_template_directory_uri() ?>/img/JPG/HomePage.jpg" alt="img fond" class="bg">

			<!-- <img src="<?= get_template_directory_uri() ?>/img/PNG/fond_exterieur_nuit_tempete.png" alt="img fond" class="bg"> -->

			<!-- <img src="<?= get_template_directory_uri() ?>/img/SVG/logo.svg" alt="img pancarte" class="logo"> -->

			<a href="salon"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_salon.svg" alt="img pancarte" class="salon"></a>
			<a href="chambre"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_chambre.svg" alt="img pancarte" class="chambre"></a>
			<a href="cantine"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_cantine.svg" alt="img pancarte" class="cantine"></a>
			<a href="bureau"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_bureau.svg" alt="img pancarte" class="bureau"></a>
			<a href="enclos"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_enclos.svg" alt="img pancarte" class="enclos"></a>
			<a href="usine"><img src="<?= get_template_directory_uri() ?>/img/SVG/pancarte_usine.svg" alt="img pancarte" class="usine"></a>
		</section>
	</main>

	<?php 
	if ( $_SESSION['jour'] == 1){
		echo '<img src="'.get_template_directory_uri().'/img/PNG/fifou.png" alt="img fifou" id="lutinIndex">';

		echo '<div id="fondIndex">
				<div id="boxIndex">
					<img src="'.get_template_directory_uri().'/img/SVG/guirlande-16.svg" alt="guirlande" id="guirlande">
					<img src="'.get_template_directory_uri().'/img/PNG/fifou.png" alt="lutin" id="lutinPopIndex">

				<div id="content">
					<p id="first"></p>
					<button id="FinPopIndex">Close</button>
				</div>
				
				</div>
			</div>';
	};
	?>
	
	
<?php get_footer(); ?>
