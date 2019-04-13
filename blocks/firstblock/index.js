var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;

registerBlockType('mytheme-blocks/firstblock', {
    title: __('First Block', 'mytheme-blocks'),
    description: __('Our first block', 'mytheme-blocks'),
    category: 'layout',
    edit: function() {
        return 'Editor';
    },
    save: function() {
        return 'Saved content';
    }
})