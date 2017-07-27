(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController',CategoriesController);


CategoriesController.$inject = ['MenuAppService','items'];
function CategoriesController(MenuAppService,items) {
  var list = this;
   
   list.items=items;

};

})();
