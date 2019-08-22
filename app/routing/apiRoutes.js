//load data
//We are linking our route to a series of "data" sources.
//Thes data sources hold arrays of information on friends.

var friends = require("../data/friends");

//Routing
// API GET requests
//below code handles when user visit a page.

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    //API POST request
    //below code handles when a user submits a survey data to the server.
    app.post("/api/friends", function (req, res) {
        //capture user input
        var userInput = req.body;
        var userResponses = userInput.scores;
        //best friend match

        var matchName = '';
        var matchImage = '';
        var totalDifference = 500;

        //check all existing friends in list

        for (var i = 0; i < friends.length; i++) {
            // compute diff for each quetsion

            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            //if lowest diff

            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }
        //add new user i.e after finding match move user to friend array
        friends.push(userInput);
        //send appropriate response
        res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });





    });



};