<?php

	session_start();

?>
<!doctype html>
<html lang="<?php bloginfo('language'); ?>" dir="ltr">
<head>

	<meta charset="<?php bloginfo('charset'); ?>">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	

	<title><?php bloginfo('name'); ?> - <?php bloginfo('description'); ?></title>


	<!-- <link rel="icon" href="<?= get_template_directory_uri(); ?>/favicon.ico">
	<link rel="icon" href="<?= get_template_directory_uri(); ?>/icon.svg" type="image/svg+xml">
	<link rel="apple-touch-icon" href="<?= get_template_directory_uri(); ?>/apple-touch-icon.png">
	<link rel="manifest" href="<?= get_template_directory_uri(); ?>/manifest.webmanifest"> -->
	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/sass/main.scss">

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<header>
		<?php 
			if ( is_user_logged_in() ) { ?>
				<div id='infoConnexion'>
					Bienvenue, <?php echo wp_get_current_user()->display_name; ?>!
					<a href="<?php echo wp_logout_url(get_permalink()); ?>">Déconnexion</a>
				</div>
		<?php 
			} else {
				$url = wp_login_url();
		?>
				<!-- <meta http-equiv="refresh" content="0;url='<?= $url ?>'"> -->
		<?php 
			} 
		?>


		<!-- Choix du jour -->
		<form method="post" action="" id="formSelectJour">
			<select name="Jour" id="selectJour">
				<?php 
					for ($iJour=1; $iJour<25; $iJour++){
						echo "<option value='".$iJour."'>".$iJour."</option>";
					}
				?>
			</select>
			<button type='submit' name='subSelectJour'>Choisir</button>
		</form>
	</header>


<?php
	if (isset($_POST['subSelectJour'])){
		$_SESSION['jour']=$_POST['Jour'];
		echo '<meta http-equiv="Refresh" content="0; url='.get_permalink().'">';
	}
?>	