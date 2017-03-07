
import * as $ from 'jquery';

$.fn.myDialog = function (): void {
    console.log(`let's show dialog: ${this}`);

    $(this).dialog({
        resizable: false,
        modal: true
    });
};
