<?php

	session_start();


	for ($i = 0; $i<24; $i++){
		if (isset($_SESSION['jouet'.$i])){
			setcookie('jour'.$i, $_SESSION['jour'.$i], time()+3600);
			setcookie('jouet'.$i, $_SESSION['jouet'.$i], time()+3600);
		}
	}

	if (!isset($_COOKIE['connectedOnce'])){
		require_once(get_template_directory() . '/inc/instantGagnant.php');
		setcookie('connectedOnce', true, time()+14400);
	}

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
				<a href="<?= $url ?>">Se connecter</a>
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

		<button id='voirProfil'>Voir Mon Profil</button>

		<div id='profilUser'>
			<img src="<?= get_template_directory_uri(); ?>/images/png/croix.png" alt="croix" id='fermerProfil'>
			<?php 
				$userId = wp_get_current_user()->ID;
				$userName = wp_get_current_user()->display_name;
				$size = 250;

				echo get_avatar($userId, $size);
			?>

			<h2><?php echo $userName ; ?></h2>

			<div id="imagesJouetPromo">
				<?php 
					for ($i = 0; $i<25; $i++){
						if (isset($_COOKIE['jouet'.$i])){
							?>
							<img src='<?= $_COOKIE['jouet'.$i] ?>' alt = "Jouet en promo">
							<?php
						}
					}
				?>
			</div>
		</div>
	</header>


<?php
	if (isset($_POST['subSelectJour'])){
		$_SESSION['jour']=$_POST['Jour'];
		echo '<meta http-equiv="Refresh" content="0; url='.get_permalink().'">';
	}
?>	