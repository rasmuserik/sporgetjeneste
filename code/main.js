
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
    length = 5+0|(Math.random() * 250);
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

function handleClick() {
    next = document.createElement("div");
    next.setAttribute("id", "next");
    next.setAttribute("onClick", "handleClick()");
    next.innerHTML= '<div class="topbar">Hello world</div>' + nextText();
    //next.appendChild(document.createTextNode(nextText()));
    gId("container").insertBefore(next, gId("current"));
    var current = gId("current");
    current.style.top = "-" + height(next);
    setTimeout("slidein()", 0);
}
