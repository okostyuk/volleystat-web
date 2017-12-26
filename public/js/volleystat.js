
var config = {
    apiKey: "AIzaSyAoc7Y2L8NjXFtvZjLfpxp2Rtr5jaja7Iw",
    authDomain: "volleystat-5bc1c.firebaseapp.com",
    databaseURL: "https://volleystat-5bc1c.firebaseio.com"
};

window.onload = firebaseInit();
var provider;

var gamesFromServer;

function firebaseInit() {
    firebase.initializeApp(config);
    provider = new firebase.auth.GoogleAuthProvider();
    window.firebase = firebase;
    console.log("firebaseInit()");
}

function loadGamesNew() {
    $("#group1gamesTable").hide();
    $("#group2gamesTable").hide();
    $("#championshipGamesTable").hide();
    $("#otherGamesTable").hide();

    $.get(
        "https://volleystat-5bc1c.firebaseio.com/volleyorgua/чемпионаты/2017/games.json?print=pretty",
        null,
        function (data) {
            $("#preloader").hide();
            gamesFromServer = data;
            var keyNames = Object.keys(data);
            var gamesDiv = $('#games');
            gamesDiv.empty();

            for(var gameType in data) {
                var games = data[gameType];
                var gamesArray = [];
                var gameIds = [];
                for (var gameId in games) {
                    var gameObj = games[gameId];
                    gamesArray.push(gameObj);
                    gameIds.push(gameId);
                }

                //var gameTableId = guidGenerator();
                //addGamesTable(gameTableId, gameType);
                //var gameTable = $("#" + gameTableId);
                var gameTable;
                if ("первая группа" == gameType) {
                    gameTable = $("#group1gamesTable");
                } else if ("вторая группа"  == gameType) {
                    gameTable = $("#group2gamesTable")
                } else if ("кубок" == gameType) {
                    gameTable = $("#championshipGamesTable");
                } else {
                    gameTable = $("#otherGamesTable");
                }
                gameTable.show();

                var table1 = gameTable.DataTable( {
                    "paging":   false,
                    "stateSave" : true,
                    select: { style: 'single'},
                    autoWidth: false,
                    ordering: false,
                    "data" : Object.keys(games),
                    "columns" : [{
                        data: function (gameId) {
                            var game = games[gameId];
                            var gameText = game.team1 + " - " + game.team2 + "<br/>";
                            gameText += "<a href='#' gameType='" + gameType + "' gameId='" + gameId + "' class='gameLink'>";
                            gameText += "( " + game.scores.team1 + ":" + game.scores.team2 + " ) ["
                            gameText += scoreSetToText(game.scores.set1);
                            gameText += scoreSetToText(game.scores.set2);
                            gameText += scoreSetToText(game.scores.set3);
                            gameText += scoreSetToText(game.scores.set4);
                            gameText += scoreSetToText(game.scores.set5);

                            gameText += "]</a>";
                            return gameText;
                        }
                    }]
                });



/*                gameTable.on('click', 'td', function () {
                    alert( 'You clicked on '+table1.row( this ).data()+'\'s row' );
                });*/

            }

            $(".gameLink").click(function () {
                displayStat($(this).attr('gameType'), $(this).attr('gameId'));
            });
        })
}

function displayStat(gameType, gameId) {
    var game = gamesFromServer[gameType][gameId];

    $(".teamName.team1").each(function () {
        var item = $( this );
        item.html(game.team1);
    });

    $(".teamName.team2").each(function () {
        $( this ).html(game.team2);
    });

    $(".team1.points", "#stat-table-total ").html(game.scores.total.team1);
    $(".team2.points", "#stat-table-total ").html(game.scores.total.team2);
    $(".team1.error", "#stat-table-total ").html(game.stats.total.team1.error);
    $(".team1.attack", "#stat-table-total ").html(game.stats.total.team1.attack);
    $(".team1.block", "#stat-table-total ").html(game.stats.total.team1.block);
    $(".team1.tip", "#stat-table-total ").html(game.stats.total.team1.tip);
    $(".team1.ace", "#stat-table-total ").html(game.stats.total.team1.ace);
    $(".team2.error", "#stat-table-total ").html(game.stats.total.team2.error);
    $(".team2.attack", "#stat-table-total ").html(game.stats.total.team2.attack);
    $(".team2.block", "#stat-table-total ").html(game.stats.total.team2.block);
    $(".team2.tip", "#stat-table-total ").html(game.stats.total.team2.tip);
    $(".team2.ace", "#stat-table-total ").html(game.stats.total.team2.ace);

    $(".team1.points", "#stat-table-set1 ").html(game.scores.set1.team1);
    $(".team2.points", "#stat-table-set1 ").html(game.scores.set1.team2);
    $(".team1.error", "#stat-table-set1 ").html(game.stats.set1.team1.error);
    $(".team1.attack", "#stat-table-set1 ").html(game.stats.set1.team1.attack);
    $(".team1.block", "#stat-table-set1 ").html(game.stats.set1.team1.block);
    $(".team1.tip", "#stat-table-set1 ").html(game.stats.set1.team1.tip);
    $(".team1.ace", "#stat-table-set1 ").html(game.stats.set1.team1.ace);
    $(".team2.error", "#stat-table-set1 ").html(game.stats.set1.team2.error);
    $(".team2.attack", "#stat-table-set1 ").html(game.stats.set1.team2.attack);
    $(".team2.block", "#stat-table-set1 ").html(game.stats.set1.team2.block);
    $(".team2.tip", "#stat-table-set1 ").html(game.stats.set1.team2.tip);
    $(".team2.ace", "#stat-table-set1 ").html(game.stats.set1.team2.ace);

    $(".team1.points", "#stat-table-set2 ").html(game.scores.set2.team1);
    $(".team2.points", "#stat-table-set2 ").html(game.scores.set2.team2);
    $(".team1.error", "#stat-table-set2 ").html(game.stats.set2.team1.error);
    $(".team1.attack", "#stat-table-set2 ").html(game.stats.set2.team1.attack);
    $(".team1.block", "#stat-table-set2 ").html(game.stats.set2.team1.block);
    $(".team1.tip", "#stat-table-set2 ").html(game.stats.set2.team1.tip);
    $(".team1.ace", "#stat-table-set2 ").html(game.stats.set2.team1.ace);
    $(".team2.error", "#stat-table-set2 ").html(game.stats.set2.team2.error);
    $(".team2.attack", "#stat-table-set2 ").html(game.stats.set2.team2.attack);
    $(".team2.block", "#stat-table-set2 ").html(game.stats.set2.team2.block);
    $(".team2.tip", "#stat-table-set2 ").html(game.stats.set2.team2.tip);
    $(".team2.ace", "#stat-table-set2 ").html(game.stats.set2.team2.ace);

    $(".team1.points", "#stat-table-set3 ").html(game.scores.set3.team1);
    $(".team2.points", "#stat-table-set3 ").html(game.scores.set3.team2);
    $(".team1.error", "#stat-table-set3 ").html(game.stats.set3.team1.error);
    $(".team1.attack", "#stat-table-set3 ").html(game.stats.set3.team1.attack);
    $(".team1.block", "#stat-table-set3 ").html(game.stats.set3.team1.block);
    $(".team1.tip", "#stat-table-set3 ").html(game.stats.set3.team1.tip);
    $(".team1.ace", "#stat-table-set3 ").html(game.stats.set3.team1.ace);
    $(".team2.error", "#stat-table-set3 ").html(game.stats.set3.team2.error);
    $(".team2.attack", "#stat-table-set3 ").html(game.stats.set3.team2.attack);
    $(".team2.block", "#stat-table-set3 ").html(game.stats.set3.team2.block);
    $(".team2.tip", "#stat-table-set3 ").html(game.stats.set3.team2.tip);
    $(".team2.ace", "#stat-table-set3 ").html(game.stats.set3.team2.ace);

    $(".team1.points", "#stat-table-set4 ").html(game.scores.set4.team1);
    $(".team2.points", "#stat-table-set4 ").html(game.scores.set4.team2);
    $(".team1.error", "#stat-table-set4 ").html(game.stats.set4.team1.error);
    $(".team1.attack", "#stat-table-set4 ").html(game.stats.set4.team1.attack);
    $(".team1.block", "#stat-table-set4 ").html(game.stats.set4.team1.block);
    $(".team1.tip", "#stat-table-set4 ").html(game.stats.set4.team1.tip);
    $(".team1.ace", "#stat-table-set4 ").html(game.stats.set4.team1.ace);
    $(".team2.error", "#stat-table-set4 ").html(game.stats.set4.team2.error);
    $(".team2.attack", "#stat-table-set4 ").html(game.stats.set4.team2.attack);
    $(".team2.block", "#stat-table-set4 ").html(game.stats.set4.team2.block);
    $(".team2.tip", "#stat-table-set4 ").html(game.stats.set4.team2.tip);
    $(".team2.ace", "#stat-table-set4 ").html(game.stats.set4.team2.ace);

    $(".team1.points", "#stat-table-set5 ").html(game.scores.set5.team1);
    $(".team2.points", "#stat-table-set5 ").html(game.scores.set5.team2);
    $(".team1.error", "#stat-table-set5 ").html(game.stats.set5.team1.error);
    $(".team1.attack", "#stat-table-set5 ").html(game.stats.set5.team1.attack);
    $(".team1.block", "#stat-table-set5 ").html(game.stats.set5.team1.block);
    $(".team1.tip", "#stat-table-set5 ").html(game.stats.set5.team1.tip);
    $(".team1.ace", "#stat-table-set5 ").html(game.stats.set5.team1.ace);
    $(".team2.error", "#stat-table-set5 ").html(game.stats.set5.team2.error);
    $(".team2.attack", "#stat-table-set5 ").html(game.stats.set5.team2.attack);
    $(".team2.block", "#stat-table-set5 ").html(game.stats.set5.team2.block);
    $(".team2.tip", "#stat-table-set5 ").html(game.stats.set5.team2.tip);
    $(".team2.ace", "#stat-table-set5 ").html(game.stats.set5.team2.ace);
}

function scoreSetToText(set) {
    if (set == null || (set.team1 == "0" && set.team2 == "0"))
        return "";

    return " " + set.team1 + ":" + set.team2 + " ";
}

function addGamesTable(tableId, gameType) {
    //$('#game-tables').append("<H3>"+gameType+"</H3><br/>");

    var tableTag = document.createElement("table");
    tableTag.setAttribute("id", tableId);
    tableTag.setAttribute("class", "display");
    tableTag.setAttribute("cellspacing", "0");
    //tableTag.appendTo($('#container'));
    document.getElementById('game-tables').appendChild(tableTag);

    var thead = "<thead><tr><th>" + gameType + "</th></tr></thead>";
    var caption = "<caption>" + gameType + "</caption>";
    //$("#" + tableId).append(caption);
    $("#" + tableId).append(thead);

    return tableTag;
}

function guidGenerator() {
    var S4 = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

function loadGames() {
    $('#games_table').DataTable({
        "processing": false,
        "serverSide": true,
        ajax: {
            url: "https://volleystat-5bc1c.firebaseio.com/games.json",
            data: function (d) {
                console.log("data() " + JSON.stringify(d));
                d.orderBy = "\"dateStart\"";
                d.limitToFirst = d.length;
                //d.endAt = (d.start + d.length);
                //d.limitToFirst=7;
                return d;
            },
            dataFilter: function(data){
                console.log("dataFilter()");

                var jsonData = jQuery.parseJSON(data);
                var itemsArray = [];
                $.each(jsonData, function (index, value) {
                    itemsArray.push(value);
                });

                var json = jQuery.parseJSON( "{}" );
                json.recordsTotal = itemsArray.length*10;
                json.recordsFiltered = itemsArray.length*10;
                json.data = itemsArray;

                return JSON.stringify( json ); // return JSON string
            }
        },
        columns: [
            { "data": function (d) {
                return d.teamOneName + "-" + d.teamTwoName;
            } },
            { "data": "teamTwoName" },
            { "data": function (d) {
                return new Date(d.dateStart).format('h:i:s');
            } }
        ]
    });


/*    $.get("https://volleystat-5bc1c.firebaseio.com/games.json", function (data, status) {
        var itemsArray = [];
        $.each(data, function (index, value) {
            itemsArray.push(value);
        });

        $('#games_table').DataTable({
            data: itemsArray,
            columns: [
                { "data": function (d) {
                    return d.teamOneName + "-" + d.teamTwoName;
                } },
                { "data": "teamTwoName" },
                { "data": function (d) {
                    return new Date(d.dateStart).format('h:i:s');
                } }
            ]
        });

    });*/
}

function loadTeams() {
    $.get("https://volleystat-5bc1c.firebaseio.com/teams.json", function (data, status) {
        var teamsArray = [];
        $.each(data, function (index, value) {
            teamsArray.push(value);
        });

        $('#teams_table').DataTable({
            data: teamsArray,
            columns: [
                { "data": "name" }
            ]
        });
    });
}


function loadPlayers() {
    $.get("https://volleystat-5bc1c.firebaseio.com/players.json", function (data, status) {
        var playersArray = [];
        $.each(data, function (index, value) {
            playersArray.push(value);
        });

        $('#players_table').DataTable({
            data: playersArray,
            columns: [
                { "data": "name" },
                { "data": "teams.0.name"}
            ]
        });
    });
}

function googleLogin() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(JSON.stringify(result.user));
    }).catch(function(error) {
        alert(JSON.stringify(error));
    });
}