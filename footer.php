<button id='voirJeu'> Voir le jeu </button>

<div id='divCanva'>
    <img src="<?= get_template_directory_uri(); ?>/images/png/croix.png" alt="croix" id='fermerCanva'>
    <canvas id='canvas' width='800px' height='400px'></canvas>    
    <form action="" method="post" id='formReussite'>
        <button type='submit' name='reussiteJeu' class='button'>Partir -></button>
    </form>
</div>
</div><!-- div id ='telRetourne' trouvable dans le header.php-->


<?php wp_footer(); ?>

<?php
    if (isset($_SESSION['jour'])){
        $jour = $_SESSION['jour'];

        echo '<script> const repertoire = "'.get_template_directory_uri().'"; </script>';

        if (!(isset($_COOKIE['jour'.$jour]))){
            echo '<script src="'.get_template_directory_uri().'/js/src/class.ObstaclePot.js"></script>';
            echo '<script src="'.get_template_directory_uri().'/js/src/jeux/jeu_jour'.$jour.'.js"></script>';
            
            if (isset($_POST['reussiteJeu'])){
                unset($_SESSION['jour']);
                $_SESSION['jour'.$jour]=true;
    
                $rdmJouet = rand(1,3);
    
                $_SESSION['jouet'.$jour] = get_template_directory_uri().'/images/jpg/jouet'.$rdmJouet.'.jpg';

                echo $_COOKIE['jouet'.$jour];
    
		        echo '<meta http-equiv="Refresh" content="0; url='.get_home_url().'">';
            }
        }
    }
?>

<script src="<?= get_template_directory_uri(); ?>/js/src/main.js"></script>
</body>
</html>
