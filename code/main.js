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
    mui.showPage(["page", {"title": "Sp\xf8rgetjenesten"}, 
            ["div", nextText()],
            ["div", nextText()],
            ["div", nextText()],
            ["div", nextText()]
            ]);
}

var pages = {
    main: ["page", {title: "Sp\xf8rgetjenesten"},
        ["inputarea", {name: "question", label: "Mit sp\xf8rgsm\xa5l"}],
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
            ["option", {value: "school2"}, "Gymnasium, EUC, VUC, SOSU eller anden kort videreg\xa51ende uddannelse"],
            ["option", {value: "school3"}, "Mellemlang eller lang videregående uddannelse"],
            ["option", {value: "school4"}, "Universitetsuddannelse eller forskning"]
        ],
        ["button", {id: "ask"}, "Sp\xf8rg"]
    ],
    ask: ["page", {title: "Sender sp\xf8rgsm\xa5l"}, 
        ["div", "spørgsmålet afsendt, du vil få svar per mail"],
        ["button", {id: "foo"}, "knap 1"],
        ["button", {id: "bar"}, "knap 2"],
        ["button", {id: "main"}, "main"]
    ],
    foo: ["page"
        ["div", "1"],
        ["button", {id: "bar"}, "knap 2"],
    ],
    bar: ["page", {title: "2"},
        ["div", "2"],
        ["button", {id: "bar"}, "knap 2"],
        ["button", {id: "main"}, "main"]
    ]
};
function dispatch(name, args) {
    mui.showPage(pages[name]);
}
function main() {
    mui.setDispatch(dispatch);
    dispatch("main");
}

require.ready(function() {
    main();
});

});
