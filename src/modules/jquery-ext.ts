
import * as $ from 'jquery';

$.fn.prependText = function (prefix: string): void {
    console.log(`prefix with ${prefix}`);

    $(this).text(prefix + $(this).text())
};

