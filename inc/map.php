<?php
// WP_Query arguments
$args = array(
	'post_type'              => 'cpt_adresse',
    'post_status'            => 'publish',
    'posts_per_page'         => -1,
);

// The Query
$query = new WP_Query( $args );

$tabAdresse = [];

if ($query->have_posts()){
    while ($query->have_posts()){
        $query->the_post();
        $adresse = get_field('nom_num_rue').' '.get_field('ville').' '.get_field('code_postal');
        array_push($tabAdresse, $adresse);
    } //while ($query->have_post())
} else {
    echo 'vide';
    echo '<pre>';
    var_dump($query->post);
    echo '</pre>';
} //if ($query->have_post())

?>
    <script>
        var pinpointsStr = '';
    </script>
<?php

$i = 0;

foreach($tabAdresse as $key){
    if ($i == 0){
        ?><script>
            pinpointsStr += "<?php echo $key; ?>";
        </script><?php
        $i++;
    } else {
        ?><script>
            pinpointsStr += "<?php echo '|'.$key; ?>";
        </script><?php
    } //if ($i == 0)
}
?>

<button type='button' id='chercheMagasin'>Trouver son magasin</button>

<div id='afficheMap'>
    <img src="<?= get_template_directory_uri(); ?>/images/png/croix.png" alt="croix" id='fermerRecherche'>
    <div id='mapLeclerc'>
        <div id="map"></div>
        <label for="cp">Renseignez votre Code Postal :</label>
        <input type="search" name="cp" id="cp">
        <button type="button" id="rechercher">Trouver</button>
    </div>
</div>

<script src="<?= get_template_directory_uri(); ?>/js/src/map.js"></script>