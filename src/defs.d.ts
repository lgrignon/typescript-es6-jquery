
interface MyDialog {
    setContent(text: string): void;
}

interface JQuery {
    myDialog(): MyDialog;
    prependText(prefix: string): void;
}