# jqCheckboxTreeBehavior #

A jQuery plugin to enable tree behaviors for a hierarchy of checkboxes with the following markup. This plugin does not do much fancy stuff, except the following:

1. Check/uncheck all child nodes automatically on a parent node check/uncheck.
2. On a child node check, ensures that all the required parent nodes are also checked.

This functionality was available in some of the existing jQuery plugins along with collapsing. However, I could not find anything that had just this behavior without major requirements like jQuery widgets support and a bulky JavaScript footprint. Hope it helps someone else as well.

Below is a sample markup that will work with the plugin. The LABEL tags are not required by the plugin. It works solely on the INPUT tags and the nested UL/LI structure.

``` html
<ul id="tree">
    <li>
        <input type="checkbox" id="check-1"/>
        <label for="check-1">Check box 1</label>
        <ul>
            <li>
                <input type="checkbox" id="check-1a"/>
                <label for="check-1a">Check box 1a</label>
            </li>
            <li>
                <input type="checkbox" id="check-1b"/>
                <label for="check-1a">Check box 1b</label>
            </li>
        </ul>
    </li>
</ul>
```

## Usage ## 

Include jQuery base file and this plugin file, with appropriate script tags and initialize the tree with the following simple code.

``` js
$( '#tree' ).checkboxTreeBehavior();
```

