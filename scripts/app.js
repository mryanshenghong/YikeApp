
var Yike = angular.module('Yike', ['ngRoute', 'Controllers']);
Yike.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/today',{
            templateUrl:'./public/views/today.html',
            controller:'todayCtrl'
        })
        .when('/older',{
            templateUrl:'./public/views/older.html',
            controller: 'olderCtrl'
        })
        .when('/author',{
            templateUrl:'./public/views/author.html',
            controller:'authCtrl'
        })
        .when('/category',{
            templateUrl:'./public/views/category.html',
            controller:'cateCtrl'
        })
        .when('/favourite',{
            templateUrl:'./public/views/favourite.html',
            controller:'favorCtrl'
        })
        .when('/settings',{
            templateUrl:'./public/views/settings.html',
            controller:'setCtrl'
        })
        .otherwise({
            redirectTo: '/today',
        });
}]);
Yike.run(['$rootScope', function ($rootScope) {

    //设置类名初始值 侧边栏状态:未打开
    $rootScope.collapsed = false;

    //侧边栏索引
    $rootScope.index =0;

    //全局方法
    $rootScope.toggle = function () {
        $rootScope.collapsed = !$rootScope.collapsed;

        var navs = document.querySelectorAll('.navs dd');

        if($rootScope.collapsed) {

            for(var i=0; i<navs.length; i++) {
                navs[i].style.transform = 'translate(0)';
                navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                navs[i].style.transitionDelay = '0.2s';
            }
        } else {

            var len = navs.length - 1;
            for(var j=len; j>0; j--) {
                navs[j].style.transform = 'translate(-100%)';
                navs[j].style.transitionDuration = (len - j) * 0.15 + 's';
                navs[j].style.transitionDelay = '';
            }
        }
    }
}]);


