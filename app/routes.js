 // app/routes.js

// grab the nerd model we just created
// var Nerd = require('./models/nerd');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.post('/api/test', function(req, res) {
        // use mongoose to get all nerds in the database
        var params = req.body;
        console.log(params)
        res.json('found it!')

        



    });

    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.json('This is not the page you are looking for.')
    });

};



