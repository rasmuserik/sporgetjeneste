define(function(require, exports, module) {
mui = require("mui");

function genWord() {
    var i, length, s;
    length = 2+0|(Math.random() * 8);
    s = "";
    for(i=0;i<length;++i) {
        s += String.fromCharCode(97+(0|(Math.random()*25)));
    }
    return s;
}

function nextText() {
    var length, i, s;
    length = 5+0|(Math.random() * 50);
    s = "";
    for(i=0;i<length;++i) {
        s += genWord() + " ";
    }
    return s;
}

handleClick = function() {
    mui.showPage([
            ["div", {"class": "header"}, "Sp\xf8rgetjenesten"], 
            ["div", {"class": "contentbox"}, nextText()],
            ["div", {"class": "contentbox"}, nextText()],
            ["div", {"class": "contentbox"}, nextText()],
            ]);
}
require.ready(function() {
    handleClick();
});

});
