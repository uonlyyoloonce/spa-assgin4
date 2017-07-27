(function () {
'use strict';

angular.module('MenuApp')
.service('MenuAppService', MenuAppService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuAppService.$inject = ['$http','ApiBasePath']
function MenuAppService($http,ApiBasePath) {
  var service = this;
 
  // List of shopping items
  var items = [];

service.getCate =function (){
 
 var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    
    return response;

};
 service.getCateItems =function (paraid){

 var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+paraid)
    });
    
    return response;

}

}

})();
