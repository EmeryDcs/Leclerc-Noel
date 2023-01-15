<?php 
/*

Template Name: Page Motion

*/
?>



<?php get_header(); ?>

<?php 
    if (isset($_SESSION['jour'])){
        if ($_SESSION['jour']==1){
            ?>
            <video controls class='videoMotion'>
                <source src="<?= get_template_directory_uri();?>/videos/motion_jour1.mp4" type="video/mp4">
            </video>
            <?php
        } else if ($_SESSION['jour']==12){
            ?>
            <video controls class='videoMotion'>
                <source src="<?= get_template_directory_uri();?>/videos/motion_jour12.mp4" type="video/mp4">
            </video>
            <?php
        } else if ($_SESSION['jour']==24){
            ?>
            <video controls class='videoMotion'>
                <source src="<?= get_template_directory_uri();?>/videos/motion_jour24.mp4" type="video/mp4">
            </video>
            <?php
        }
    } else {
        echo '<h2> Choisissez un jour </h2>';
    }
?>

<a href="<?= home_url(); ?>"><button class='button'> Vers le Pôle Nord ! </button></a>

<?php get_footer(); ?>