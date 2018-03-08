


// //实例一个模块 用来专门管理所有的控制器
angular.module('Controllers', [])

    //实例 导航栏控制器
    .controller('NavController', ['$scope', function ($scope) {
        // 定义导航
        $scope.navs = [
            {link: '#/today', text: '今日一刻', icon: 'icon-home'},
            {link: '#/older', text: '往期内容', icon: 'icon-file-empty'},
            {link: '#/author', text: '热门作者', icon: 'icon-pencil'},
            {link: '#/category', text: '栏目浏览', icon: 'icon-menu'},
            {link: '#/favourite', text: '我的喜欢', icon: 'icon-heart'},
            {link: '#/settings', text: '设置', icon: 'icon-cog'},
        ];
    }])

    .controller('todayCtrl',['$scope','$rootScope','$http','$filter','$location',function($scope,$rootScope,$http,$filter,$location){

        $rootScope.index = 0;
        $rootScope.title = '今日一刻';
        $rootScope.loaded = false;

        var today = $filter('date')(new Date,'yyyy-MM-dd');
        $http({
            //今日一刻api挂了,使用 today.php 或者直接赋值链接json自己访问json文件
            //使用params参数 把当前日期作为请求发送到服务器获取最新数据
            url:'./api/today.php',
            method:'get',
            params:{today:today}
        }).success(function(info){
            $scope.date = info.date;
            $scope.posts = info.posts;
            $rootScope.loaded=true;
            //test
            console.log(info);
        });

        $scope.detail = function(url){
            //点击显示详细文章 wtf
            window.location.href= url;
        };

    }])

    // 往期内容
    .controller('olderCtrl', ['$scope', '$rootScope', '$http','$filter', function ($scope, $rootScope, $http,$filter) {

        $rootScope.index = 1;
        $rootScope.title = '往期内容';
        $rootScope.loaded = false;
        $http({
            url:'./api/older.php'
        }).success(function(info){
            $scope.date = info.date;
            $scope.date = $filter('date')($scope.date,'MMMM-dd-yyyy');
            $scope.posts = info.posts;
            $rootScope.loaded = true;

            //test
            // console.log(info);
        });


        $scope.detail = function(url){
            //点击显示详细文章 wtf
            window.location.href= url;
        };
    }])

    //作者
    .controller('authCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
        //显示加载图标
        $rootScope.loaded= false;

        //更换标题
        $rootScope.title = '热门作者';

        //当前导航索引
        $rootScope.index = 2;

        $http({
            url:'./api/author.php',
            // url:'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6',
            method:'get',
            params:{}
        }).success(function(info){

            $scope.all = info.all;
            $scope.rec= info.rec;
            $rootScope.loaded=true;
            //test
            // console.log(info.rec.authors);
        }).error(function(err){

        });

        //点击显示作者详细信息
        $scope.detail = function (url) {
            window.location.href = url;
        }

        $scope.loadAll = function(){
            $rootScope.loaded= false;
            $http({
                url:'./api/loadAll.php',
                method:'get'
            }).success(function(info){
                $scope.allAuthors = info.authors;
                $rootScope.loaded=true;
                document.getElementsByClassName('loadAll')[0].style.display = 'none';
                console.log(info);
            });
        }
    }])

    //栏目浏览
    //热门精选详细内容已经失效没有必要再做
    .controller('cateCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

        //显示加载图标
        $rootScope.loaded=false;
        $rootScope.title='栏目浏览';
        $rootScope.index=3;

        $http({
            url:'./api/category.php',
            method:'get',
        }).success(function(info){
            console.log(info);
            $scope.columns = info.columns;
            $rootScope.loaded=true;
            // console.log(info.columns[0].icon);
        }).error(function (err) {
            // console.log('未找到资源');
        });

    }])


    //我的喜欢
    .controller('favorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){

        $rootScope.title='我的喜欢';
        $rootScope.index=4;
        $rootScope.loaded=false;

        $http({
            url:'./api/favourite.php',
            method:'get'
        }).success(function(info){
            console.log(info);
            $scope.count=info.count;
            $scope.posts = info.posts;
            $rootScope.loaded=true;
        });

        $scope.detail = function(url){
            window.location.href = url;
        }
    }])

    .controller('setCtrl',['$scope','$rootScope',function ($scope,$rootScope) {
        $rootScope.loaded = true;
        $rootScope.index=5;
        $rootScope.title="设置";
    }]);
