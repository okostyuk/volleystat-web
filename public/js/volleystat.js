


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