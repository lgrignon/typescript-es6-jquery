"use strict";

import * as $ from 'jquery';
import 'jqueryui';
import './modules/jquery-ext';
import './modules/jquery-ui-ext';

$('#dialog').prependText('Pouet - wait for 5 sec - ');
let dialog: MyDialog = $('#dialog').myDialog();

setTimeout(() => {
    dialog.setContent("Et voilà!");
}, 5000);
