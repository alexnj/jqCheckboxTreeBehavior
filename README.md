# jqCheckboxTree #

A jQuery plugin to manage the client side enrichments of a checkbox tree created with the following markup.

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
$( '#tree' ).checkboxTree();
```

