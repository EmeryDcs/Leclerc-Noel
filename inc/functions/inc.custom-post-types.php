<?php





add_action('init', 'CPT_Recette', 10);
add_action('init', 'CPT_Craft', 10);
add_action('init', 'CPT_Jeu', 10);
add_action('init', 'CPT_Lettre', 10);
add_action('init', 'CPT_Adresse', 10);









//
// ---------------------------------------- CUSTOM POST TYPES
//

//
// ------------------------- Recette
//



if (!function_exists('CPT_Recette')):
	function CPT_Recette() {

		// Interface
		$labels = array(
			'name'							=> _x('Recettes', 'Post Type General Name', 'cpt_recette'),
			'singular_name'					=> _x('Recette', 'Post Type Singular Name',	'cpt_recette'),
			'menu_name'						=> __('Recettes', 'cpt_recette'),
			'name_admin_bar'				=> __('Recette', 'cpt_recette'),
			'archives'						=> __('Archives Recettes', 'cpt_recette'),
			'attributes'					=> __('Attributs Recettes',	'cpt_recette'),
			'parent_item_colon'			    => __('Recette parente :', 'cpt_recette'),
			'all_items'						=> __('Toutes les Recettes', 'cpt_recette'),
			'add_new_item'					=> __('Ajouter une Recette',	'cpt_recette'),
			'add_new'						=> __('Ajouter', 'cpt_recette'),
			'new_item'						=> __('Nouvelle Recette', 'cpt_recette'),
			'edit_item'						=> __('Éditer la Recette', 'cpt_recette'),
			'update_item'					=> __('Mettre à jour la Recette', 'cpt_recette'),
			'view_item'						=> __('Voir la Recette', 'cpt_recette'),
			'view_items'					=> __('Voir les Recettes', 'cpt_recette'),
			'search_items'					=> __('Rechercher une Recette', 'cpt_recette'),
			'not_found'						=> __('Introuvable', 'cpt_recette'),
			'not_found_in_trash'			=> __('Introuvable dans la corbeille', 'cpt_recette'),
			'featured_image'				=> __('Featured Image',	'cpt_recette'),
			'set_featured_image'			=> __('Set featured image',	'cpt_recette'),
			'remove_featured_image'			=> __('Remove featured image', 'cpt_recette'),
			'use_featured_image'			=> __('Use as featured image',	'cpt_recette'),
			'insert_into_item'				=> __('Insert into item', 'cpt_recette'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',	'cpt_recette'),
			'items_list'					=> __('Liste de Recettes',	'cpt_recette'),
			'items_list_navigation'			=> __('Naviguer dans la liste de Recettes',	'cpt_recette'),
			'filter_items_list'				=> __('Filtrer la liste de Recettes', 'cpt_recette'),
		);
		$rewrite = array(
			'slug'							=> 'cpt_recette',
			'with_front'					=> true,
			'pages'							=> true,
			'feeds'							=> false,
		);
		$args = array(
			'label'							=> __('Recette', 'cpt_recette'),
			'description'					=> __('Description de la Recette',	'cpt_recette'),
			'labels'						=> $labels,
			'show_in_rest'					=> true,// Permet le support de Gutenberg dans le Recette
			'supports'						=> array('title', 'editor', 'revisions'),
			// 'taxonomies'					=> array('category', 'post_tag'),
			'hierarchical'					=> false,
			'public'						=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'menu_position'					=> 5,
			'menu_icon'						=> 'dashicons-food',
			'show_in_admin_bar'				=> true,
			'show_in_nav_menus'				=> true,
			'can_export'					=> true,
			'has_archive'					=> false,
			'exclude_from_search'			=> false,
			'publicly_queryable'			=> true,
			'query_var'						=> 'cpt_recette',
			'capability_type'				=> 'post',
			// 'rewrite'					=> array('slug' => 'cpt_recette'),
			'rewrite'						=> $rewrite,
			'rest_base'						=> 'cpt_recette',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('cpt_recette', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Recette_gab existe déjà</h1>';
endif;



//
// ------------------------- Craft
//



if (!function_exists('CPT_Craft')):
	function CPT_Craft() {

		// Interface
		$labels = array(
			'name'							=> _x('Crafts', 'Post Type General Name', 'cpt_craft'),
			'singular_name'					=> _x('Craft', 'Post Type Singular Name',	'cpt_craft'),
			'menu_name'						=> __('Crafts', 'cpt_craft'),
			'name_admin_bar'				=> __('Craft', 'cpt_craft'),
			'archives'						=> __('Archives Crafts', 'cpt_craft'),
			'attributes'					=> __('Attributs Crafts',	'cpt_craft'),
			'parent_item_colon'			    => __('Craft parent :', 'cpt_craft'),
			'all_items'						=> __('Tous les Crafts', 'cpt_craft'),
			'add_new_item'					=> __('Ajouter un Craft',	'cpt_craft'),
			'add_new'						=> __('Ajouter', 'cpt_craft'),
			'new_item'						=> __('Nouveau Craft', 'cpt_craft'),
			'edit_item'						=> __('Éditer le Craft', 'cpt_craft'),
			'update_item'					=> __('Mettre à jour le Craft', 'cpt_craft'),
			'view_item'						=> __('Voir le Craft', 'cpt_craft'),
			'view_items'					=> __('Voir les Crafts', 'cpt_craft'),
			'search_items'					=> __('Rechercher un Craft', 'cpt_craft'),
			'not_found'						=> __('Introuvable', 'cpt_craft'),
			'not_found_in_trash'			=> __('Introuvable dans la corbeille', 'cpt_craft'),
			'featured_image'				=> __('Featured Image',	'cpt_craft'),
			'set_featured_image'			=> __('Set featured image',	'cpt_craft'),
			'remove_featured_image'			=> __('Remove featured image', 'cpt_craft'),
			'use_featured_image'			=> __('Use as featured image',	'cpt_craft'),
			'insert_into_item'				=> __('Insert into item', 'cpt_craft'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',	'cpt_craft'),
			'items_list'					=> __('Liste de Crafts',	'cpt_craft'),
			'items_list_navigation'			=> __('Naviguer dans la liste de Crafts',	'cpt_craft'),
			'filter_items_list'				=> __('Filtrer la liste de Crafts', 'cpt_craft'),
		);
		$rewrite = array(
			'slug'							=> 'cpt_craft',
			'with_front'					=> true,
			'pages'							=> true,
			'feeds'							=> false,
		);
		$args = array(
			'label'							=> __('Craft', 'cpt_craft'),
			'description'					=> __('Description du Craft',	'cpt_craft'),
			'labels'						=> $labels,
			'show_in_rest'					=> true,// Permet le support de Gutenberg dans le Craft
			'supports'						=> array('title', 'editor', 'revisions'),
			// 'taxonomies'					=> array('category', 'post_tag'),
			'hierarchical'					=> false,
			'public'						=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'menu_position'					=> 5,
			'menu_icon'						=> 'dashicons-admin-tools',
			'show_in_admin_bar'				=> true,
			'show_in_nav_menus'				=> true,
			'can_export'					=> true,
			'has_archive'					=> false,
			'exclude_from_search'			=> false,
			'publicly_queryable'			=> true,
			'query_var'						=> 'cpt_craft',
			'capability_type'				=> 'post',
			// 'rewrite'					=> array('slug' => 'cpt_craft'),
			'rewrite'						=> $rewrite,
			'rest_base'						=> 'cpt_craft',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('cpt_craft', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Craft_gab existe déjà</h1>';
endif;



//
// ------------------------- Jeu
//



if (!function_exists('CPT_Jeu')):
	function CPT_Jeu() {

		// Interface
		$labels = array(
			'name'							=> _x('Jeux', 'Post Type General Name', 'cpt_jeu'),
			'singular_name'					=> _x('Jeu', 'Post Type Singular Name',	'cpt_jeu'),
			'menu_name'						=> __('Jeux', 'cpt_jeu'),
			'name_admin_bar'				=> __('Jeu', 'cpt_jeu'),
			'archives'						=> __('Archives Jeux', 'cpt_jeu'),
			'attributes'					=> __('Attributs Jeux',	'cpt_jeu'),
			'parent_item_colon'			    => __('Jeu parent :', 'cpt_jeu'),
			'all_items'						=> __('Tous les Jeux', 'cpt_jeu'),
			'add_new_item'					=> __('Ajouter un Jeu',	'cpt_jeu'),
			'add_new'						=> __('Ajouter', 'cpt_jeu'),
			'new_item'						=> __('Nouveau Jeu', 'cpt_jeu'),
			'edit_item'						=> __('Éditer le Jeu', 'cpt_jeu'),
			'update_item'					=> __('Mettre à jour le Jeu', 'cpt_jeu'),
			'view_item'						=> __('Voir le Jeu', 'cpt_jeu'),
			'view_items'					=> __('Voir les Jeux', 'cpt_jeu'),
			'search_items'					=> __('Rechercher un Jeu', 'cpt_jeu'),
			'not_found'						=> __('Introuvable', 'cpt_jeu'),
			'not_found_in_trash'			=> __('Introuvable dans la corbeille', 'cpt_jeu'),
			'featured_image'				=> __('Featured Image',	'cpt_jeu'),
			'set_featured_image'			=> __('Set featured image',	'cpt_jeu'),
			'remove_featured_image'			=> __('Remove featured image', 'cpt_jeu'),
			'use_featured_image'			=> __('Use as featured image',	'cpt_jeu'),
			'insert_into_item'				=> __('Insert into item', 'cpt_jeu'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',	'cpt_jeu'),
			'items_list'					=> __('Liste de Jeux',	'cpt_jeu'),
			'items_list_navigation'			=> __('Naviguer dans la liste de Jeux',	'cpt_jeu'),
			'filter_items_list'				=> __('Filtrer la liste de Jeux', 'cpt_jeu'),
		);
		$rewrite = array(
			'slug'							=> 'cpt_jeu',
			'with_front'					=> true,
			'pages'							=> true,
			'feeds'							=> false,
		);
		$args = array(
			'label'							=> __('Jeu', 'cpt_jeu'),
			'description'					=> __('Description du Jeu',	'cpt_jeu'),
			'labels'						=> $labels,
			'show_in_rest'					=> true,// Permet le support de Gutenberg dans le Jeu
			'supports'						=> array('title', 'editor', 'revisions'),
			// 'taxonomies'					=> array('category', 'post_tag'),
			'hierarchical'					=> false,
			'public'						=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'menu_position'					=> 5,
			'menu_icon'						=> 'dashicons-games',
			'show_in_admin_bar'				=> true,
			'show_in_nav_menus'				=> true,
			'can_export'					=> true,
			'has_archive'					=> false,
			'exclude_from_search'			=> false,
			'publicly_queryable'			=> true,
			'query_var'						=> 'cpt_jeu',
			'capability_type'				=> 'post',
			// 'rewrite'					=> array('slug' => 'cpt_jeu'),
			'rewrite'						=> $rewrite,
			'rest_base'						=> 'cpt_jeu',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('cpt_jeu', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Jeu_gab existe déjà</h1>';
endif;



//
// ------------------------- Adresse
//



if (!function_exists('CPT_Adresse')):
	function CPT_Adresse() {

		// Interface
		$labels = array(
			'name'							=> _x('Adresses', 'Post Type General Name', 'cpt_adresse'),
			'singular_name'					=> _x('Adresse', 'Post Type Singular Name',	'cpt_adresse'),
			'menu_name'						=> __('Adresses', 'cpt_adresse'),
			'name_admin_bar'				=> __('Adresse', 'cpt_adresse'),
			'archives'						=> __('Archives Adresses', 'cpt_adresse'),
			'attributes'					=> __('Attributs Adresses',	'cpt_adresse'),
			'parent_item_colon'			    => __('Adresse parent :', 'cpt_adresse'),
			'all_items'						=> __('Toutes les Adresses', 'cpt_adresse'),
			'add_new_item'					=> __('Ajouter une Adresse',	'cpt_adresse'),
			'add_new'						=> __('Ajouter', 'cpt_adresse'),
			'new_item'						=> __('Nouvelle Adresse', 'cpt_adresse'),
			'edit_item'						=> __('Éditer l\' Adresse', 'cpt_adresse'),
			'update_item'					=> __('Mettre à jour l\' Adresse', 'cpt_adresse'),
			'view_item'						=> __('Voir l\' Adresse', 'cpt_adresse'),
			'view_items'					=> __('Voir les Adresses', 'cpt_adresse'),
			'search_items'					=> __('Rechercher une Adresse', 'cpt_adresse'),
			'not_found'						=> __('Introuvable', 'cpt_adresse'),
			'not_found_in_trash'			=> __('Introuvable dans la corbeille', 'cpt_adresse'),
			'featured_image'				=> __('Featured Image',	'cpt_adresse'),
			'set_featured_image'			=> __('Set featured image',	'cpt_adresse'),
			'remove_featured_image'			=> __('Remove featured image', 'cpt_adresse'),
			'use_featured_image'			=> __('Use as featured image',	'cpt_adresse'),
			'insert_into_item'				=> __('Insert into item', 'cpt_adresse'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',	'cpt_adresse'),
			'items_list'					=> __('Liste d\' Adresses',	'cpt_adresse'),
			'items_list_navigation'			=> __('Naviguer dans la liste d\' Adresses',	'cpt_adresse'),
			'filter_items_list'				=> __('Filtrer la liste d\' Adresses', 'cpt_adresse'),
		);
		$rewrite = array(
			'slug'							=> 'cpt_adresse',
			'with_front'					=> true,
			'pages'							=> true,
			'feeds'							=> false,
		);
		$args = array(
			'label'							=> __('Adresse', 'cpt_adresse'),
			'description'					=> __('Description d\' Adresse',	'cpt_adresse'),
			'labels'						=> $labels,
			'show_in_rest'					=> true,// Permet le support de Gutenberg dans le Adresse
			'supports'						=> array('title', 'editor', 'revisions'),
			// 'taxonomies'					=> array('category', 'post_tag'),
			'hierarchical'					=> false,
			'public'						=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'menu_position'					=> 5,
			'menu_icon'						=> 'dashicons-admin-multisite',
			'show_in_admin_bar'				=> true,
			'show_in_nav_menus'				=> true,
			'can_export'					=> true,
			'has_archive'					=> false,
			'exclude_from_search'			=> false,
			'publicly_queryable'			=> true,
			'query_var'						=> 'cpt_adresse',
			'capability_type'				=> 'post',
			// 'rewrite'					=> array('slug' => 'cpt_adresse'),
			'rewrite'						=> $rewrite,
			'rest_base'						=> 'cpt_adresse',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('cpt_adresse', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Adresse_gab existe déjà</h1>';
endif;



//
// ------------------------- Lettre
//



if (!function_exists('CPT_Lettre')):
	function CPT_Lettre() {

		// Interface
		$labels = array(
			'name'							=> _x('Lettres', 'Post Type General Name', 'cpt_lettre'),
			'singular_name'					=> _x('Lettre', 'Post Type Singular Name',	'cpt_lettre'),
			'menu_name'						=> __('Lettres', 'cpt_lettre'),
			'name_admin_bar'				=> __('Lettre', 'cpt_lettre'),
			'archives'						=> __('Archives Lettres', 'cpt_lettre'),
			'attributes'					=> __('Attributs Lettres',	'cpt_lettre'),
			'parent_item_colon'			    => __('Lettre parent :', 'cpt_lettre'),
			'all_items'						=> __('Toutes les Lettres', 'cpt_lettre'),
			'add_new_item'					=> __('Ajouter une Lettre',	'cpt_lettre'),
			'add_new'						=> __('Ajouter', 'cpt_lettre'),
			'new_item'						=> __('Nouvelle Lettre', 'cpt_lettre'),
			'edit_item'						=> __('Éditer la Lettre', 'cpt_lettre'),
			'update_item'					=> __('Mettre à jour la Lettre', 'cpt_lettre'),
			'view_item'						=> __('Voir la Lettre', 'cpt_lettre'),
			'view_items'					=> __('Voir les Lettres', 'cpt_lettre'),
			'search_items'					=> __('Rechercher une Lettre', 'cpt_lettre'),
			'not_found'						=> __('Introuvable', 'cpt_lettre'),
			'not_found_in_trash'			=> __('Introuvable dans la corbeille', 'cpt_lettre'),
			'featured_image'				=> __('Featured Image',	'cpt_lettre'),
			'set_featured_image'			=> __('Set featured image',	'cpt_lettre'),
			'remove_featured_image'			=> __('Remove featured image', 'cpt_lettre'),
			'use_featured_image'			=> __('Use as featured image',	'cpt_lettre'),
			'insert_into_item'				=> __('Insert into item', 'cpt_lettre'),
			'uploaded_to_this_item'			=> __('Uploaded to this item',	'cpt_lettre'),
			'items_list'					=> __('Liste de Lettres',	'cpt_lettre'),
			'items_list_navigation'			=> __('Naviguer dans la liste de Lettres',	'cpt_lettre'),
			'filter_items_list'				=> __('Filtrer la liste de Lettres', 'cpt_lettre'),
		);
		$rewrite = array(
			'slug'							=> 'cpt_lettre',
			'with_front'					=> true,
			'pages'							=> true,
			'feeds'							=> false,
		);
		$args = array(
			'label'							=> __('Lettre', 'cpt_lettre'),
			'description'					=> __('Description de la Lettre',	'cpt_lettre'),
			'labels'						=> $labels,
			'show_in_rest'					=> true,// Permet le support de Gutenberg dans le Lettre
			'supports'						=> array('title', 'editor', 'revisions'),
			// 'taxonomies'					=> array('category', 'post_tag'),
			'hierarchical'					=> false,
			'public'						=> true,
			'show_ui'						=> true,
			'show_in_menu'					=> true,
			'menu_position'					=> 5,
			'menu_icon'						=> 'dashicons-email',
			'show_in_admin_bar'				=> true,
			'show_in_nav_menus'				=> true,
			'can_export'					=> true,
			'has_archive'					=> false,
			'exclude_from_search'			=> false,
			'publicly_queryable'			=> true,
			'query_var'						=> 'cpt_lettre',
			'capability_type'				=> 'post',
			// 'rewrite'					=> array('slug' => 'cpt_lettre'),
			'rewrite'						=> $rewrite,
			'rest_base'						=> 'cpt_lettre',
			'rest_controller_class'			=> 'WP_REST_Posts_Controller',
		);
	 register_post_type('cpt_lettre', $args);

	};
else:
	echo '<h1>----- ERREUR ----- function Lettre_gab existe déjà</h1>';
endif;