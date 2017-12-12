var team1 = null;
var team2 = null;
var team1Score = 0;
var team2Score = 0;

var accessToken;

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function showSignIn(user) {
    $("#signInProgress").hide();
    $("#signIn").hide();
    $("#signOut").show();
    $('#avatar').attr("src", user.photoURL.concat("?sz=48"));
    $('#avatar').show();
}

function showSignOut() {
    $("#signInProgress").hide();
    $("#signIn").show();
    $("#signOut").hide();
    $('#avatar').hide();
}

function initApp() {
    var config = {
        apiKey: "AIzaSyAoc7Y2L8NjXFtvZjLfpxp2Rtr5jaja7Iw",
        authDomain: "volleystat-5bc1c.firebaseapp.com",
        databaseURL: "https://volleystat-5bc1c.firebaseio.com",
        projectId: "volleystat-5bc1c",
        storageBucket: "volleystat-5bc1c.appspot.com",
        messagingSenderId: "848331444108"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) { // User is signed in.
            showSignIn(user);
        } else { // User is signed out.
            showSignOut();
        }
    }, function(error) {
        showSignOut();
        alert(error);
        console.log(error);
    });
}


window.addEventListener('load', function() {
    initApp();

    $("#header").load("header.html", null, function () {
        $("#signOut").click(function () {
            firebase.auth().signOut();
        });

        var gameId = getUrlParameter("game");
        if (gameId != null) {
            $('#gameLink').removeClass("grey-text").attr('href', "game.html?game=" + gameId);
            $('#gamesLink').attr('href', $('#gamesLink').attr('href') + '?game=' + gameId);
            $('#teamsLink').attr('href', $('#teamsLink').attr('href') + '?game=' + gameId);
        }
        init();

        $("#signIn").click(function () {
            $("#signInProgress").show();
            $("#signIn").hide();
            firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            ).then(function(result) {
                var user = result.user;
                var credential = result.credential;
            }, function(error) {
                showSignOut();
                var email = error.email;
                var credential = error.credential;
                if (error.code === 'auth/account-exists-with-different-credential') {
                }
            });
        });
    });
});