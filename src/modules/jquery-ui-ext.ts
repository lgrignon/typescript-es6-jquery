
import * as $ from 'jquery';

export class MyDialogImpl implements MyDialog {
    public constructor(private content: JQuery) {
    }

    public setContent(content: string): void {
        console.log(`set dialog content: ${content}`);
        this.content.text(content);
    }
}

$.fn.myDialog = function (): MyDialog {
    console.log(`let's show dialog: ${this}`);

    $(this).dialog({
        resizable: false,
        modal: true
    });

    return new MyDialogImpl($(this));
};
