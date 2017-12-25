
var config = {
    apiKey: "AIzaSyAoc7Y2L8NjXFtvZjLfpxp2Rtr5jaja7Iw",
    authDomain: "volleystat-5bc1c.firebaseapp.com",
    databaseURL: "https://volleystat-5bc1c.firebaseio.com"
};

window.onload = firebaseInit();
var provider;

var games;

function firebaseInit() {
    firebase.initializeApp(config);
    provider = new firebase.auth.GoogleAuthProvider();
    window.firebase = firebase;
    console.log("firebaseInit()");
}

function loadGamesNew() {
    $.get(
        "https://volleystat-5bc1c.firebaseio.com/volleyorgua/чемпионаты/2017/games.json?print=pretty",
        null,
        function (data) {
            $("#preloader").hide();
            games = data;
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

                var gameTableId = guidGenerator();
                addGamesTable(gameTableId, gameType);
                var gameTable = $("#" + gameTableId);

                gameTable.DataTable( {
                    "paging":   false,
                    "stateSave" : true,
                    select: { style: 'single'},
                    autoWidth: false,
                    ordering: false,
                    "data" : gameIds,
                    "columns" : [{
                        data: function (gameId) {
                            var game = games[gameId];
                            return game.team1 + " - " + game.team2 + " " +
                                "(" + game.scores.team1 + " : " + game.scores.team2 + ")";
                        }
                    }]
                });
            }
        })
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