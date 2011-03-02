define(function(require, exports, module) {
jsonml = require("jsonml");
console.log(jsonml);

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

function height(dom) {
    return document.defaultView.getComputedStyle(dom, "").getPropertyValue("height");
}

function gId(id) {
    return document.getElementById(id);
}

function slidein() {
    window.scroll(0,0);

    var prev = gId("prev");
    prev.parentNode.removeChild(prev);

    var current = gId("current");
    current.setAttribute("id", "prev");
    //current.style.top = "-" + height(next);

    var next = gId("next");
    next.setAttribute("id", "current");

    gId("container").style.height = height(next);

    //prev.style.display = "none"
}

handleClick = function() {
    next = document.createElement("div");
    next.setAttribute("id", "next");
    next.setAttribute("onClick", "handleClick()");
    next.innerHTML= [ 
            ["div", {"class": "topbar"}, "Sp\xf8rgetjenesten"], 
            ["div", {"class": "contentbox"}, nextText()],
            ["div", {"class": "contentbox"}, nextText()],
            ["div", {"class": "contentbox"}, nextText()],
            ["div", {"class": "topbar"}, "Hello", "world"]
        ].map(jsonml.toXml).join('');
    var current = gId("current");
    gId("container").insertBefore(next, current);
    current.style.top = "-" + height(next);
    setTimeout(slidein, 0);
}

});
