 // app/routes.js
var promise = require('promise');
var request = require('request');
var wmata   = {
    'stations_url' : 'https://api.wmata.com/Rail.svc/json/jStationEntrances',
    'stationinfo_url' : 'https://api.wmata.com/Rail.svc/json/jStationInfo',
    'stationpredictions_url' : 'https://excellathon.herokuapp.com/wmata/StationPrediction.svc/json/GetPrediction/',
    'key' : '1836b9f0b8b544a0ba70ab5264f7f78c'
}




if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};
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





 app.post('/api/getPrimeFactors', function(req, res) {
     var params = req.body;
     console.log(params)

     var nums = params;

     var resList = []
     var nums = params;
     nums.forEach(function(num){
         console.log(num)
         var fnum = pf(num);
         resList.push(fnum)
     })


     function pf(num){
        // get all prime factors
        var primes = getPrimeFactors(num)
        return (primes)

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

     function isfactor(num, fac){
         if(num % fac === 0){
             return(true)
         } else {
             return(false)
         }
     }




     function getPrimeFactors(num){

         var primes = [];
         var reg = [];
         for (var i = num; i >= 0; i--) {
            console.log(i)
             if(isprime(i) && isfactor(num, i) && i !== 1){
                // for each prime non-1 factor...

                 var pmatch = num/i;

                 if(reg.indexOf(i) === -1){
                    if(pmatch === 1){
                       primes.push(i)                    
                    } else {
                       primes.push(i)
                       primes.push(pmatch)
                    }                    
                 }
                 reg.push(pmatch)

             }

         };
         return primes
     };




     res.json(resList)

 });









    app.post('/api/getStation', function(req, res) {
        // use mongoose to get all nerds in the database
        var params = req.body;

        try {
            // getStations
            // for each station, compute distance to current location
            // map station to distance
            // reduce list to station with the smallest distance
            getStations(params)
            .then(function(data){
                console.log('got station data')
                var station = getClosestStation(params, data);
                getStationInfo(station)
                .then(function(stationInfo){
                    console.log('got station info')
                    getStationPredictions(station)
                    .then(function(trains){
                        console.log('got station preds')
                        console.log(trains)
                        var departures = filterDepartingTrains(trains['Trains'])

                        var dta = {
                            'station' : stationInfo['Name'],
                            'stationLat' : stationInfo['Lat'],
                            'stationLon' : stationInfo['Lon'],
                            'departures' : departures
                        };

                        res.json(dta);
                    }, function(err){
                        console.log(err)
                    })


                }, function(err){
                    console.log(err)
                })

            }, function(err){
                console.log(err)
            })




        } catch(e){
            console.log(e)
        }

        function getStations(loc){
            return new promise(function(resolve, reject){
                request({
                    url: wmata.stations_url, 
                    method: 'GET', 
                    qs: {
                       "Lat": loc.latitude,
                       "Lon": loc.longitude,
                       "Radius": loc.radius,                    },                    
                    headers: { 
                        'api_key': wmata.key
                    }
                }, function (error, response, body) {
                      if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body)) 
                      } else {
                        reject(error)
                      }
                })
            })
        };

        function getClosestStation(location, stationList){
            console.log('computing haversine')
            var stats = stationList['Entrances'].map(function(d,i){
                return computeHaversine(location.latitude, location.longitude, d['Lat'], d['Lon'])
            })

            var closestDistance = stats.min();
            var closestStationIndex = stats.indexOf(closestDistance);
            return stationList['Entrances'][closestStationIndex]

        };


        function computeHaversine(lat1, lon1, lat2, lon2){
            try{
                var R = 6371000; // metres
                var φ1 = lat1.toRad();
                var φ2 = lat2.toRad();
                var Δφ = (lat2-lat1).toRad();
                var Δλ = (lon2-lon1).toRad();

                var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                        Math.cos(φ1) * Math.cos(φ2) *
                        Math.sin(Δλ/2) * Math.sin(Δλ/2);
                var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

                var d = R * c;
                return d

            } catch(e){
                console.log(e)
            }
        }



        function getStationInfo(station){
            return new promise(function(resolve, reject){
                request({
                    url: wmata.stationinfo_url, 
                    method: 'GET', 
                    qs: {
                       "StationCode": station['StationCode1']
                    },
                    headers: { 
                        'api_key': wmata.key
                    }
                }, function (error, response, body) {
                      if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body)) 
                      } else {
                        reject(error)
                      }
                })
            })
        };



        function getStationPredictions(station){
            console.log(station)
            return new promise(function(resolve, reject){
                request({
                    url: wmata.stationpredictions_url + station['StationCode1'], 
                    method: 'GET', 
                    // qs: {
                    //    "StationCodes": []
                    // },
                    headers: { 
                        'api_key': wmata.key
                    }
                }, function (error, response, body) {
                      if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body)) 
                      } else {
                        reject(error)
                      }
                })
            })
        };


        function filterDepartingTrains(trains){
            var trns = [];

            // filter: 
            // trains without a destination
            // 

            trains.forEach(function(d){
                if(d['Destination'] !== ''){
                    trns.push({
                        'destination' : d['DestinationName'],
                        'line'        : d['Line'],
                        'minutes'     : d['Min']
                    })
                }
            })



            return trns
        };




    });








    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/', function(req, res) {
        res.json('This is not the page you are looking for.')
    });

};



