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

function a() {
    mui.showPage(["page", {title: "Sp\xf8rgsm\xe5l afsendt"},
        ["text", "du vil f\xe5 svar per mail.... sample text widget here... some more text, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"], 
        ["button", {id: "main"}, "Nyt sp\xf8rgsm\xe5l"]]);
    handleClick = main;
}

function dispatch(name, args) {
    mui.showPage(["page", {title: "Sp\xf8rgetjenesten"},
        ["inputarea", {name: "question", label: "Mit sp\xf8rgsm\xe5l"}],
        ["choice", {name: "deadline", label: "Tidsfrist"},
            ["option", {value: "-1"}, "ingen"],
            ["option", {value: "2"}, "2 timer"],
            ["option", {value: "24"}, "24 timer"],
            ["option", {value: "48"}, "2 dage"],
            ["option", {value: "168"}, "1 uger"]
        ],
        ["choice", {name: "use", label: "Svaret skal bruges til"},
            ["option", {value: "personal"}, "Almen interesse eller hobby"],
            ["option", {value: "business"}, "Erhverv"],
            ["option", {value: "school1"}, "Folkeskole"],
            ["option", {value: "school2"}, "Gymnasium, eller lignende"],
            ["option", {value: "school3"}, "Laengere videregaaende uddannelse"],
            ["option", {value: "school4"}, "Universitetsuddannelse eller forskning"]
        ],
        ["button", {id: "ask"}, "Sp\xf8rg"]
    ]);
}

function main() {
    mui.setDispatch(dispatch);
    dispatch("main");
    handleClick = a;
}

require.ready(function() {
    main();
});

});
