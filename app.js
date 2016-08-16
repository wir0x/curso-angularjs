(function () {

    'use strict';

    angular
        .module('myApp', [])
        .controller('myController', myController);


    function myController() {
        var vm = this;

        vm.firstName = "Gonzalo";
        vm.lastName = "Salazar";
        vm.country = "BOLIVIA";
        vm.names = [
            {name: 'Jani', country: 'Norway'},
            {name: 'Carl', country: 'Sweden'},
            {name: 'Margareth', country: 'England'},
            {name: 'Hege', country: 'Norway'},
            {name: 'Joe', country: 'Denmark'},
            {name: 'Gustav', country: 'Sweden'},
            {name: 'Birgit', country: 'Denmark'},
            {name: 'Mary', country: 'England'},
            {name: 'Kai', country: 'Norway'}
        ];
        vm.price = 99.90;
        vm.countries = [
            'Bolivia',
            'Peru',
            'Argentina',
            'Brazil',
            'Paraguay',
            'Uruguay',
            'Venezuela',
            'Chile',
            'Colombia'
        ];
        vm.orderByMe = orderByMe;


        /////////////////
        function orderByMe(elem) {
            console.log("orderByMe: ", elem);
            vm.myOrderBy = elem;
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('myApp')
        .filter('myFilter', myFilter);

    function myFilter() {
        return function (elem) {
            var i, c, txt = "";
            for (i = 0; i < elem.length; i++) {
                c = elem[i];
                if (i % 2 == 0) {
                    c = c.toUpperCase();
                }
                txt += c;
            }
            return txt;
        };
    }
})();

