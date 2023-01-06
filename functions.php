<?php





add_action	('widgets_init',				'PXP_Optimisation');
add_filter 	('wp_handle_upload_prefilter',	'PXP_sanitize_file_uploads');










//
// ---------------------------------------- OPTIMISATION
//

if (!function_exists('PXP_Optimisation')):
	function PXP_Optimisation() {

		unregister_widget('WP_Widget_Pages');							// Pages
		unregister_widget('WP_Widget_Calendar');					// Calendrier
		unregister_widget('WP_Widget_Archives');					// Archives
		unregister_widget('WP_Widget_Meta');							// Meta
		unregister_widget('WP_Widget_Search');						// Rechercher
		unregister_widget('WP_Widget_Text');							// Texte
		unregister_widget('WP_Widget_Media_Audio');				// Audio
		unregister_widget('WP_Widget_Media_Image');				// Image
		unregister_widget('WP_Widget_Media_Video');				// Vidéo
		unregister_widget('WP_Widget_Custom_HTML');				// HTML personnalisé
		unregister_widget('WP_Widget_Categories');				// Catégories
		unregister_widget('WP_Widget_Recent_Posts');			// Articles récents
		unregister_widget('WP_Widget_Recent_Comments');		// Commentaires récents
		unregister_widget('WP_Widget_RSS');								// RSS
		unregister_widget('WP_Widget_Tag_Cloud');					// Nuage d'étiquettes
		unregister_widget('WP_Nav_Menu_Widget');					// Menu personnalisé

	};
else:
	echo '<h1>----- ERREUR ----- function PXP_Debug existe déjà</h1>';
endif;



if (!function_exists('PXP_sanitize_file_uploads')):
	function PXP_sanitize_file_uploads($file) {

		$file['name'] = sanitize_file_name($file['name']);
		$file['name'] = preg_replace("/[^a-zA-Z0-9\_\-\.]/", "", $file['name']);
		$file['name'] = strtolower($file['name']);
		add_filter('sanitize_file_name', 'remove_accents');

		return $file;
		
	};
else:
	echo '<p>----- ERREUR ----- function PXP_sanitize_file_uploads existe déjà</p>';
endif;










//
// ---------------------------------------- FONCTIONNALITÉS
//

if (!defined('ABSPATH')) die ('Restricted Area');

require_once(get_template_directory() . '/inc/functions/inc.admin.php');
require_once(get_template_directory() . '/inc/functions/inc.css-js.php');
require_once(get_template_directory() . '/inc/functions/inc.custom-post-types.php');
require_once(get_template_directory() . '/inc/functions/inc.medias.php');
require_once(get_template_directory() . '/inc/functions/inc.menus.php');
require_once(get_template_directory() . '/inc/theme.php');


//----------------MES FONCTIONS WPLN------------------------------------

//importe les CDN Geosearch et leaflet
function header_geosearch(){
	require_once(get_template_directory() . '/inc/geosearch.php');
}add_action('wp_head', 'header_geosearch');

//Permet d'ajouter la map au footer
function footer_map() {
	require_once(get_template_directory() . '/inc/map.php');
}add_action('wp_footer', 'footer_map');

//Supprime l'admin bar si je suis pas administrateur
function remove_admin_bar() {
	if (!current_user_can('administrator') && !is_admin()) {
	show_admin_bar(false);
	}
}add_action('after_setup_theme', 'remove_admin_bar');

//Ajoute le fichier login.css à la page login
function my_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_template_directory_uri() . '/css/login.css' );
}add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );

// Changer la PdP automatiquement de l'utilisateur
// Récupération de l'ID de l'utilisateur
$user_id = get_current_user_id();

function change_photo_profil($user_id) {
	session_start();
	$value = get_template_directory().get_field('avatar', 'user_'.$user_id);

	// Téléchargement de la nouvelle image
	$upload_dir = wp_upload_dir();

	$image_data = file_get_contents($value);
	$filename = basename($value);
	$upload = wp_upload_bits($filename, null, $image_data);

	if(!$upload['error']) {
		$wp_filetype = wp_check_filetype($filename, null );
		$attachment = array(
			'post_mime_type' => $wp_filetype['type'],
			'post_title' => sanitize_file_name($filename),
			'post_content' => '',
			'post_status' => 'inherit'
		);
		$attachment_id = wp_insert_attachment( $attachment, $upload['file'], $user_id );

		if(!is_wp_error($attachment_id)) {
			require_once(ABSPATH . 'wp-admin/includes/image.php');

			// Génération des miniatures de l'image
			$attachment_data = wp_generate_attachment_metadata( $attachment_id, $upload['file'] );
			wp_update_attachment_metadata( $attachment_id, $attachment_data );

			// Mise à jour de la photo de profil de l'utilisateur
			update_user_meta( $user_id, 'mm_sua_attachment_id', $attachment_id );
			$user_info = array(
				'ID' => $user_id,
				'role' => 'subscriber'
			);
			wp_update_user($user_info);
		} // if(!is_wp_error($attachment_id))
	} //if(!$upload['error']) 
}add_action( 'register_new_user', 'change_photo_profil' );

?>
