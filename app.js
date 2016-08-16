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

