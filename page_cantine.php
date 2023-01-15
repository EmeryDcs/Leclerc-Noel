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

						if ($jour == 3){
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

	</main>
	

<?php get_footer(); ?>