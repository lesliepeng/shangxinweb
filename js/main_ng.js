var myapp = angular.module("app",['ngAnimate']);

myapp.controller("Shangxin",function($scope,$interval,$timeout){

    $scope.status = 0;
    $scope.map_back_url = "images/mapdots0.png";
    $scope.count = 0;

    $scope.startAnimation = function(){
        $scope.Timer = $interval(function () {
            //取6的余数，表示一共有6个状态
            $scope.status = Math.floor($scope.count) % 6 ;
            console.log($scope.status);
            //根据status控制背景图
            $scope.map_back_url = "images/mapdots" + $scope.status.toString() + ".png";
            //表示每个状态停留多久，分母表示停留秒数
            $scope.count += 1/4;
        }, 1000);

    }

    $scope.startAnimation();


});