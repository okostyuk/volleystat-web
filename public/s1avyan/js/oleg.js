$(document).ready(function() {

    $('#save2file').click(function () {
        saveGameToFile();
    });

    $('#save2firebase').click(function () {
        saveGameToFirebase();
    });
});

var game = {
    "date" : null,
    "team1" : "",
    "team2" : "",
    "scores" : {
        "team1" : 0,
        "team2" : 0,
        "set1" : {
            "team1" : 0,
            "team2" : 0
        },
        "set2" : {},
        "set3" : {},
        "set4" : {},
        "set5" : {},
        "total" : {
            "team1" : 0,
            "team2" : 0
        }
    },
    "stats" : {
        "set1" : {
            "name" : "1 партия",
            "team1" : {
                "error" : 0,
                "ace" : 0,
                "attack" : 0,
                "tip": 0,
                "block": 0
            },
            "team2" : {
                "error" : 0,
                "ace" : 0,
                "attack" : 0,
                "tip": 0,
                "block": 0
            },
            "history" : [
                {"team": 1, "type" : "эйс"}
            ]
        },
        "set2" : {"team1" : {}, "team2" : {}, "history" : []},
        "set3" : {"team1" : {}, "team2" : {}, "history" : []},
        "set4" : {"team1" : {}, "team2" : {}, "history" : []},
        "set5" : {"team1" : {}, "team2" : {}, "history" : []},
        "total" : {
            "name" : "вся встреча",
            "team1" : {
                "error" : 0,
                "ace" : 0,
                "attack" : 0,
                "tip": 0,
                "block": 0
            },
            "team2" : {}
        }
    }
};

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
            url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}

function saveGameToFirebase() {
    $('#save2firebase').prop('disabled', true);
    updateGame();

    var gameName = game.date + "_" + game.team1 + "_" + game.team2;
    var gametype = $('input.gameType:checked').attr("value");
    var url = "https://volleystat-5bc1c.firebaseio.com/volleyorgua/чемпионаты/2017/games/" + gametype + "/" + gameName +".json";
    $.put(url, JSON.stringify(game),
        function () {
            $("#lastSave").html("Последнее сохранение: " + new Date().toLocaleTimeString());
            $('#save2firebase').prop('disabled', false);
        },
        function () {
            $('#save2firebase').prop('disabled', false);
        }
    );
}

function updateGame() {
    if (game.date == null) {
        var date = new Date();
        game.date = date.getFullYear()
            + "-" + date.getMonth()
            + "-" + date.getDate()
            + "-" + date.getHours()
            + "-" + date.getMinutes();
        game.team1 = $("#team1").text();
        game.team2 = $("#team2").text();
    }

    //счет по партиям
    game.scores.team1 = parseInt($("#point1").text(), 0);
    game.scores.team2 = parseInt($("#point2").text(), 0);

    //счет в партиях
    game.scores.set1.team1 = parseInt($(".team1Points1").text(), 0);
    game.scores.set2.team1 = parseInt($(".team1Points2").text(), 0);
    game.scores.set3.team1 = parseInt($(".team1Points3").text(), 0);
    game.scores.set4.team1 = parseInt($(".team1Points4").text(), 0);
    game.scores.set5.team1 = parseInt($(".team1Points5").text(), 0);
    game.scores.set1.team2 = parseInt($(".team2Points1").text(), 0);
    game.scores.set2.team2 = parseInt($(".team2Points2").text(), 0);
    game.scores.set3.team2 = parseInt($(".team2Points3").text(), 0);
    game.scores.set4.team2 = parseInt($(".team2Points4").text(), 0);
    game.scores.set5.team2 = parseInt($(".team2Points5").text(), 0);

    game.scores.total.team1 = parseInt($('.team1PointsAll').text(), 0);
    game.scores.total.team2 = parseInt($('.team2PointsAll').text(), 0);

    //статистика команда 1
    game.stats.set1.team1.ace = $(".команда1_партия1_Эйс").text();
    game.stats.set1.team1.attack = $(".команда1_партия1_Атака").text();
    game.stats.set1.team1.tip = $(".команда1_партия1_Скидка").text();
    game.stats.set1.team1.block = $(".команда1_партия1_Блок").text();
    game.stats.set1.team1.error = $(".команда1_партия1_Ошибка").text();
    game.stats.set2.team1.ace = $(".команда1_партия2_Эйс").text();
    game.stats.set2.team1.attack = $(".команда1_партия2_Атака").text();
    game.stats.set2.team1.tip = $(".команда1_партия2_Скидка").text();
    game.stats.set2.team1.block = $(".команда1_партия2_Блок").text();
    game.stats.set2.team1.error = $(".команда1_партия2_Ошибка").text();
    game.stats.set3.team1.ace = $(".команда1_партия3_Эйс").text();
    game.stats.set3.team1.attack = $(".команда1_партия3_Атака").text();
    game.stats.set3.team1.tip = $(".команда1_партия3_Скидка").text();
    game.stats.set3.team1.block = $(".команда1_партия3_Блок").text();
    game.stats.set3.team1.error = $(".команда1_партия3_Ошибка").text();
    game.stats.set4.team1.ace = $(".команда1_партия4_Эйс").text();
    game.stats.set4.team1.attack = $(".команда1_партия4_Атака").text();
    game.stats.set4.team1.tip = $(".команда1_партия4_Скидка").text();
    game.stats.set4.team1.block = $(".команда1_партия4_Блок").text();
    game.stats.set4.team1.error = $(".команда1_партия4_Ошибка").text();
    game.stats.set5.team1.ace = $(".команда1_партия5_Эйс").text();
    game.stats.set5.team1.attack = $(".команда1_партия5_Атака").text();
    game.stats.set5.team1.tip = $(".команда1_партия5_Скидка").text();
    game.stats.set5.team1.block = $(".команда1_партия5_Блок").text();
    game.stats.set5.team1.error = $(".команда1_партия5_Ошибка").text();

    game.stats.total.team1.ace = $(".команда1_Эйс").text();
    game.stats.total.team1.attack = $(".команда1_Атака").text();
    game.stats.total.team1.tip = $(".команда1_Скидка").text();
    game.stats.total.team1.block = $(".команда1_Блок").text();
    game.stats.total.team1.error = $(".команда1_Ошибка").text();


    //статистика команда 2
    game.stats.set1.team2.ace = $(".команда2_партия1_Эйс").text();
    game.stats.set1.team2.attack = $(".команда2_партия1_Атака").text();
    game.stats.set1.team2.tip = $(".команда2_партия1_Скидка").text();
    game.stats.set1.team2.block = $(".команда2_партия1_Блок").text();
    game.stats.set1.team2.error = $(".команда2_партия1_Ошибка").text();
    game.stats.set2.team2.ace = $(".команда2_партия2_Эйс").text();
    game.stats.set2.team2.attack = $(".команда2_партия2_Атака").text();
    game.stats.set2.team2.tip = $(".команда2_партия2_Скидка").text();
    game.stats.set2.team2.block = $(".команда2_партия2_Блок").text();
    game.stats.set2.team2.error = $(".команда2_партия2_Ошибка").text();
    game.stats.set3.team2.ace = $(".команда2_партия3_Эйс").text();
    game.stats.set3.team2.attack = $(".команда2_партия3_Атака").text();
    game.stats.set3.team2.tip = $(".команда2_партия3_Скидка").text();
    game.stats.set3.team2.block = $(".команда2_партия3_Блок").text();
    game.stats.set3.team2.error = $(".команда2_партия3_Ошибка").text();
    game.stats.set4.team2.ace = $(".команда2_партия4_Эйс").text();
    game.stats.set4.team2.attack = $(".команда2_партия4_Атака").text();
    game.stats.set4.team2.tip = $(".команда2_партия4_Скидка").text();
    game.stats.set4.team2.block = $(".команда2_партия4_Блок").text();
    game.stats.set4.team2.error = $(".команда2_партия4_Ошибка").text();
    game.stats.set5.team2.ace = $(".команда2_партия5_Эйс").text();
    game.stats.set5.team2.attack = $(".команда2_партия5_Атака").text();
    game.stats.set5.team2.tip = $(".команда2_партия5_Скидка").text();
    game.stats.set5.team2.block = $(".команда2_партия5_Блок").text();
    game.stats.set5.team2.error = $(".команда2_партия5_Ошибка").text();

    game.stats.total.team2.ace = $(".команда2_Эйс").text();
    game.stats.total.team2.attack = $(".команда2_Атака").text();
    game.stats.total.team2.tip = $(".команда2_Скидка").text();
    game.stats.total.team2.block = $(".команда2_Блок").text();
    game.stats.total.team2.error = $(".команда2_Ошибка").text();
}

function saveGameToFile() {
    updateGame();
    var data = JSON.stringify(game, null, 2);
    var filename = game.date + "_" + game.team1+"_"+game.team2+".txt";
    download(data, filename, "text");
}

$.put = function(url, data, callback, errCallback){

    return $.ajax({
        url: url,
        type: 'PUT',
        success: callback,
        error: errCallback,
        data: data,
        contentType: "application/json"
    });
};