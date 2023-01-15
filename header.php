<?php

	session_start();

	$pageId = get_the_ID();
	$_SESSION['permalink'] = get_the_permalink($pageId);

	if (get_current_user_id()==0 && !isset($_SESSION['coPremiereFois'])){
		$_SESSION['coPremiereFois']=true;
		$_SESSION['jour']=1; //ici session vaudra la valeur du jour réel.
		echo '<meta http-equiv="Refresh" content="0; url='.wp_login_url().'">';
		exit();
	}

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

	if (!isset($_COOKIE['motionVu']) && !$_SESSION['permalink'] && isset($_SESSION['coPremiereFois']) && ($_SESSION['jour'] == 1 || $_SESSION['jour'] == 12 || $_SESSION['jour'] == 24)){
		setcookie('motionVu', true, time()+14400);
		echo '<meta http-equiv="Refresh" content="0; url='.home_url().'/motion/">';
		exit();
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

	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/css/variables.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/css/structure.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/css/popup.css">
	<link rel="stylesheet" href="<?= get_template_directory_uri(); ?>/css/recette.css">

	<style>
	@font-face {
		font-family: 'Noel';
		src: url('<?= get_template_directory_uri(); ?>/fonts/AmaticSC-Regular.woff') format('truetype');
		font-weight: normal;
		font-style: normal;
	} 
	</style>
	

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>
	<div id='telDroit'>Pour une meilleure expérience, retourne ton téléphone !</div>

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


	<div id='telRetourne'>
	<header>
		<?php 
			if ( is_user_logged_in() ) { ?>
				<div id='infoConnexion'>
					<button id='voirProfil'>Voir Mon Profil</button>
				</div>
		<?php 
			} else {
				$url = wp_login_url();
		?>
				<a href="<?= $url ?>" id='profilConnexion'>
					<?php
						$userId = wp_get_current_user()->ID;
						$userName = wp_get_current_user()->display_name;
						$size = 50;

						echo get_avatar($userId, $size);
					?>
				</a>
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


