(function () {

    'use strict';

    angular
        .module('myApp', [])
        .controller('myController', myController);


    function myController() {
        var vm = this;

        vm.firstName = "Isabel";
        vm.changeName = changeName;

        function changeName() {
            vm.firstName = "Raysa";
        }

    }
})();

