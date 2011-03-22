function skalUdfyldes(s) {
    return s.length>0 || "Skal udfyldes.";
}
function muiCallback(mui) {
    ({"start": function() {
        mui.showPage(["page", {title: "Sp\xf8rg biblioteket"},
            ["section",
                ["input", {type: "textbox", name: "question", label: "Mit sp\xf8rgsm\xe5l", validate: skalUdfyldes}]],
            ["section",
                ["choice", {name: "deadline", label: "Tidsfrist"},
                    ["option", {value: "-1"}, "ingen"],
                    ["option", {value: "2"}, "2 timer"],
                    ["option", {value: "24"}, "24 timer"],
                    ["option", {value: "48"}, "2 dage"],
                    ["option", {value: "168"}, "1 uger"]
                ],
                ["choice", {name: "use", label: "Svaret skal bruges til"},
                    ["option", {value: "personal"}, "Almen interesse"],
                    ["option", {value: "business"}, "Erhverv"],
                    ["option", {value: "school1"}, "Folkeskole"],
                    ["option", {value: "school2"}, "Gymnasium"],
                    ["option", {value: "school3"}, "Videreg\xe5ende uddannelse"],
                    ["option", {value: "school4"}, "Universitet/Forskning"]
                ],
                ["input", {type: "email", name: "email", label: "Min emailadresse"}]
            ],
            ["button", {id: "ask"}, "Sp\xf8rg"]
        ]);
    }, "settings": function() {
       mui.showPage(["page", {title: "Indstillinger"},
         ["input", {name: "email", label: "Min emailadresse"}],
         ["input", {name: "mobile", label: "Mit mobilnummer"}],
       ]);
    }, "ask": function() {
        mui.loading();
        var deadline = "";
        if (mui.form.deadline !== "-1") {
          deadline = " indenfor de n\u00e6ste " + mui.form.deadline + " timer";
        }
        var email = "";
        if (mui.form.email !== "") {
          email = " p\xe5 " + mui.form.email; 
        }
        mui.callJsonpWebservice("http://metode.dbc.dk/~fvs/OpenLibrary/OpenQuestion/trunk/server.php", "callback", {
                action: "createQuestion",
                agencyId: "150024",
                qandaServiceName: "Biblioteksvagten",
                questionContent: mui.form.question,
                questionDeadline: mui.form.deadline,
                questionUsage: mui.form.use,
                userEmail: mui.form.email,
                outputType: "json"}, function(result) {
                  if (result.createQuestionResponse.questionReceipt.$ === "Ack") {
                    mui.showPage(["page", {title: "Sp\xf8rg biblioteket"}, 
                      ["section", ["text", "Sp\xf8rgsm\xe5let er afleveret. Du vil f\xe5 svar", deadline, email, "."], 
                      ["button", {id: "start"}, "Nyt sp\xf8rgsm\xe5l"]]
                    ]);
                  } else {
                    mui.showPage(["page", {title: "Sp\xf8rg biblioteket"}, 
                      ["text", "Noget gik desv\u00e6rre galt, pr\xf8v igen"], 
                      ["button", {id: "start"}, "Nyt sp\xf8rgsm\xe5l"]
                    ]);
                  }
                });
    }})[mui.event]();
}

