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

    app.post('/api/anagram', function(req, res) {
        // use mongoose to get all nerds in the database
        var params = req.body;
        var lists = params;
        var resList = [];
        lists.forEach(function(set){

            var str1 = set[0].split('');
            var str2 = set[1].split('');

            // for each letter in the first string
            var flag = true;
            str1.forEach(function(let){
                if(str2.indexOf(let) === -1){
                    flag = false;
                }
            })

            if(flag){
                resList.push(true)
            } else {
                resList.push(false)
            }

            console.log(str1)
            console.log(str2)
            console.log(flag)
            console.log('\n')
        })


        res.json({'data' : resList})

    });

    app.post('/api/palindrome', function(req, res) {
        // use mongoose to get all nerds in the database
        var params = req.body;
        console.log(params)
        var words = params;
        var resList = [];
        words.forEach(function(word){
            if(isPal(word)){
                resList.push(true)
            } else {
                resList.push(false)
            }
        })


        function isPal(word){
            var strings = word.split('');
            console.log(strings)
            console.log(strings.reverse())

            if(strings.join('') === strings.reverse().join('')){
                return true
            } else {
                return false
            }


        }


        res.json(resList)


    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.json('This is not the page you are looking for.')
    });

};



