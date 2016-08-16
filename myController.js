/**
 * Created by g0nzal0sv on 8/16/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('myController', myController);

    function myController($location, $http, $timeout, $interval, myservice) {
        var vm = this;
        vm.myURL = $location.absUrl();

        $http.get("http://www.w3schools.com/angular/customers.php")
            .then(success, error);

        function success(response) {
            console.log('success:', response)
            vm.customers = response.data.records;
        }

        function error(response) {
            console.log('error: ', response)
        }

        $timeout(myTimeoutFunction, 5000);
        $interval(myInterval, 1000);

        console.log('myService: ', myservice.myFunc(255));
        function myTimeoutFunction() {
            console.log("hello")
        }

        function myInterval() {
            vm.localTime = new Date();
        }

        // return $http.delete(rootRestfulPath + 'fences/' + fenceId).then(function (response) {
        //     return response.data;
        // });
    }
})();

(function () {
    'use strict';
    angular
        .module('myApp')
        .service('myservice', myService);

    function myService() {
        this.myFunc = function (x) {
            return x.toString(16);
        }
    }
})();
