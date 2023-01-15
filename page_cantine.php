<?php 
/*

Template Name: Page Cantine

*/
?>
<?php get_header(); ?>
	<main class="accueil">
		<a href="http://localhost/WPLN/"><img src="<?= get_template_directory_uri() ?>/img/SVG/logo.svg" alt="img logo" class="logo"></a>
		<img src="<?= get_template_directory_uri() ?>/img/PNG/cantine_jour.png" alt="img background" class="bg">
		
		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img bouton" class="btnLeft">
		<a href="enclos">
			<div class="iconLeft">
				<div class="arrow"></div>
			</div>
		</a>

		<img src="<?= get_template_directory_uri() ?>/img/SVG/bouton.svg" alt="img bouton" class="btnRight">
		<a href="usine">
		<div class="iconRight">
			<div class="arrow"></div>
		</div>
		</a>

		<section>
			<?php
			// WP_Query arguments
				$args = array(
					'post_type'                   => 'cpt_recette',
					'post_per_pages'         => -1,
					'post_status'			=> 'publish'
				);

				// The Query
				$query = new WP_Query( $args );

				if ( $query->have_posts() ) {
					while ($query -> have_posts()) {
						$query -> the_post();
				
						$recette = get_field( 'nom_de_la_recette' );
						$ingredient = get_field('ingredients');
						$preparation = get_field('preparation');
						$cuisson = get_field('temps_de_cuisson');
						$tempsprepa = get_field('temps_preparation');
						$jour = get_field('jour');
						

						// echo $recette;
						// echo $ingredient;
						// echo $preparation;
						// echo $cuisson;
						// echo $tempsprepa;
						// echo $jour;

						echo '<div id="sectionAimprimer">';

						if ( $_SESSION['jour'] == 3 && $jour==3){
							echo "<div class='BgRecette'>";
							echo "<h1 class='TitreRecette'>" .$recette ."</h1>";
							echo "<div class='TempsRecette'>";
							echo "<p class='TimeCuissonRecette'>" . $cuisson . "min" ."</p>" ;
							echo "<p class='TimePrepaRecette'>" .  $tempsprepa . "min" ."</p>"  ;
							echo "</div>";
							
							echo "<div class='IngredientRecette'>";
							echo "<p class='TitreIngredientRecette'>Ingrédients :</p>";
							echo $ingredient;
							echo "</div>";
		
							echo "<div class='PrepaRecette'>";
							echo "<p class='TitrePrepaRecette'>Préparation :</p>";
							echo $preparation;
							echo "</div>";
		
							echo "</div>";
						}

						echo '</div>';
						
					
					} 

					
					?> <button class="button" id="boutonImprimer">Imprimer</button> <?php
				}
				
				

			?>
		</section>

		<?php 
		if ( $_SESSION['jour'] == 1){
			echo '
			<img src="'.get_template_directory_uri().'/img/PNG/flocon.png" alt="flocon" id="lutin">


		<div id="fond">
			<div id="box">
			<img src="'.get_template_directory_uri().'/img/SVG/guirlande-16.svg" alt="guirlande" id="guirlande">
			<img src="'.get_template_directory_uri().'/img/PNG/flocon.png" alt="flocon.png" id="lutinPop">

				<div id="content">
					<p id="Presentation">Salut salut ! Mon ptit nom à moi, c’est Floconou-Matibou-Rababou, mais tu peux m appeler Floconou ! La cuisine et moi, on fait qu un ! Donc je fais de bons petits plats à tous mes camarades ! </p>
					
				</div>
				<button id="PresentationFin">Finito</button>

			</div>
		</div>';
		}
		?>

	</main>
	

<?php get_footer(); ?>