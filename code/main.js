function muiCallback(mui) {
    mui.showPage(["page", {title: "Sp\xf8rgetjenesten"},
        ["text", "text-widget..."],
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
