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




    app.post('/api/fibonacci', function(req, res) {
        var params = req.body;
        console.log(params)

        var resList = []
        var nums = params;
        nums.forEach(function(num){
            var fnum = getFib(num);
            resList.push(fnum)
        })

        function getFib(num){

            return Math.round((Math.pow(1.6180339, num) - Math.pow(-(0.6180339), num))/2.236067977)

        }

        res.json(resList)

    });




    app.post('/api/fizzbuzz', function(req, res) {
        var params = req.body;
        console.log(params)

        var nums = params;

        var resList = []
        var nums = params;
        nums.forEach(function(num){
            var fnum = getFiz(num);
            resList.push(fnum)
        })

        function getFiz(num){

            if( (num % 2 === 0) && (num % 3 === 0) ){
                return "FizzBuzz"
            } else if(num % 2 === 0){
                return "Fizz"
            } else if(num % 3 === 0){
                return "Buzz"
            } else {
                return num
            }
        }

        res.json(resList)

    });




    app.post('/api/isprime', function(req, res) {
        var params = req.body;
        console.log(params)

        var nums = params;

        var resList = []
        var nums = params;
        nums.forEach(function(num){
            var fnum = isprime(num);
            resList.push(fnum)
        })

        function isprime(num){
            var test = true;
            for (var i = num - 1; i >= 2; i--) {
                if(num % i === 0){
                    test = false;
                }
            };

            if(test){
                return(true)
            } else {
                return(false)
            }


        }

        res.json(resList)

    });


    app.post('/api/sumsq', function(req, res) {
        var params = req.body;
        console.log(params)

        var nums = params;

        var resList = []
        var nums = params;
        nums.forEach(function(num){
            var fnum = sumsq(num);
            resList.push(fnum)
        })

        function sumsq(num){
            var numAry = num.toString().split('');

            var sum = 0;
            numAry.forEach(function(n){
                sum += Math.pow(Number(n), 2)
            })

            return sum

        }

        res.json(resList)

    });



    app.post('/api/sexyprimes', function(req, res) {
        var params = req.body;
        console.log(params)

        var nums = params;

        var resList = []
        var nums = params;
        // nums.forEach(function(num){
        //     var fnum = sexyprimes(num);
        //     resList.push(fnum)
        // })

        function sexyprimes(num){

            // for a given number, 
            // get the list of prime numbers from 1 to num
            var primes = getPrimeFactors(num)
            // for each prime factor, if there is a factor that is 6 away from another factor, return it
            var sexyprimes = isSixAway(primes)
            return (sexyprimes)


        }

        function isprime(num){
            var test = true;
            for (var i = num - 1; i >= 2; i--) {
                if(num % i === 0){
                    test = false;
                }
            };

            if(test){
                return(true)
            } else {
                return(false)
            }
        }

        function getPrimeFactors(num){

            var primes = [];
            for (var i = num; i >= 0; i--) {
                if(isprime(i)){
                    primes.push(i)
                }
            };
            return primes
        };

        function isSixAway(primeAry){
            var pm = []
            primeAry.forEach(function(n){

                var pair = primeAry[primeAry.indexOf( (n+6) )]
                if(pair !== -1 && n !== 1 && pair !== undefined){
                    pm.push([n,pair])
                }
            })
            return pm
        };


        res.json(sexyprimes(nums))

    });



    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.json('This is not the page you are looking for.')
    });

};



