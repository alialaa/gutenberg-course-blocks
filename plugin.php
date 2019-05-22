<?php
/* 
* Plugin Name: mytheme-blocks
* Plugin URI: https://alialaa.com/
* Description: Blocks for mytheme.
* Author: alialla 
* Author URI https://alialaa.com/
*/

if ( ! defined( 'ABSPATH' )) {
    exit;
}

function mytheme_blocks_categories( $categories, $post ){
    return array_merge(
        $categories, 
        array(
            array(
                'slug' => 'mytheme-category',
                'title'=> __('My Theme Category', 'mytheme-blocks'),
                'icon' => 'wordpress'
            )
        )
            );
}
add_filter('block_categories','mytheme_blocks_categories',10,2);

function mytheme_blocks_register_block_type($block, $options = array ()) {
    register_block_type(
        'mytheme-blocks/' .$block,
        array_merge(
            array(
                'editor_script' => 'mytheme-blocks-editor-script',
                'editor_style' => 'mytheme-blocks-editor-style',
                'script' => 'mytheme-blocks-script',
                'style' => 'mytheme-blocks-style'
            ),
            $options
        )
        

    );
}

function mytheme_blocks_register() { 
    
    wp_register_script(
        'mytheme-blocks-editor-script',
        plugins_url('dist/editor.js', __FILE__),
        array('wp-blocks','wp-i18n', 'wp-element', 'wp-editor', 'wp-components','lodash')
    );

    wp_register_script(
        'mytheme-blocks-script',
        plugins_url('dist/script.js', __FILE__),
        array('jquery')
    );

    wp_register_style(
        'mytheme-blocks-editor-style',
        plugins_url('dist/editor.css', __FILE__),
        array('wp-edit-blocks')   
    );

    wp_register_style(
        'mytheme-blocks-style',
        plugins_url('dist/style.css', __FILE__)
    );
    
    mytheme_blocks_register_block_type('firstblock');
    mytheme_blocks_register_block_type('secondblock');
    mytheme_blocks_register_block_type('team-member');
    mytheme_blocks_register_block_type('team-members');
}

add_action('init', 'mytheme_blocks_register');