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
    }
})();


(function () {
    'use strict';
    angular
        .module('myApp')
        .directive('myDirective', myDirective);

    function myDirective() {
        return {
            template: "<h1> My Directive </h1>"
        }
    }
})();

