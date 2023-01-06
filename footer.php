
<?php wp_footer(); ?>

<?php
    if ($_SESSION['jour']){
        $jour = $_SESSION['jour'];

        echo '<script src="'.get_template_directory_uri().'/js/src/jeux/jeu_jour'.$jour.'.js"></script>';
    }
?>

</body>
</html>