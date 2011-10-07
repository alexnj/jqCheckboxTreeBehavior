/*!
 * jQuery Checkbox Tree
 * @author Alex N J
 *
 * @version 0.1
 */
 ;( function( $ ) {
    $.fn.checkboxTree = function( settings ) {
        settings = jQuery.extend( {
            // No settings for now.
        }, settings );

        var $tree = this;

        $( 'input:checkbox', $tree ).live( 'change', function() {
            var isChecked = $( this ).attr( 'checked' );
            var li = $( this ).closest( 'li' );

            if( isChecked ) {
                li.find( 'li input:checkbox' ).attr( 'checked', true );
                li.parentsUntil( $tree, 'li' ).find( 'input:checkbox:first:not(:checked)' ).attr( 'checked', true );
            }
            else {
                li.find( 'li input:checkbox' ).removeAttr( 'checked' );
            }
        } );
    };
} )( jQuery );