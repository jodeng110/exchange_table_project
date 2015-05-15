/**
 * Created by jodeng on 15. 5. 15..
 */

    'use stric';
var model = {};

angular.module("exchangeApp")
    .controller("exchangeListCtrl", function($scope, $filter, $http){

        // 데이터 요청
        $http.get("./testdata/exchangeinfo.json").success(function(data){

            model.exchangeItems = data;
            $scope.exchange = model;

            $scope.selectedBeforeCountry = $scope.exchange.exchangeItems[1];
            $scope.beforeNum = 0;

            $scope.selectedAfterCountry = $scope.exchange.exchangeItems[0];
            $scope.afterNum = 0;
        });

        $scope.plusMinusColor = function(sign){
            return sign == "+" ? "comparePreviousPlus" : "comparePreviousMinus";
        };

        $scope.plusMinusIcon = function(sign){
            return sign == "+" ? "plus" : "minus";
        }

        var filterItems = ['USD', 'JPY', 'EUR', 'CNY', 'AUD', 'CAD', 'NZD']; // 환율 목록에 표시할 데이터

        $scope.showItems = function(item){
            return filterItems.indexOf(item.currency) > -1;
        }

        $scope.exchBeforeNum = 0;
        $scope.exchAfterNum = 0;

        $scope.selectBeforeCountry = function(beforeCountry){
            $scope.selectedBeforeCountry = beforeCountry;
            $scope.setAfterNum($scope.beforeNum);
        }

        $scope.selectAfterCountry = function(afterCountry){
            $scope.selectedAfterCountry = afterCountry;
            $scope.setBeforeNum($scope.afterNum);
        }

        $scope.setBeforeNum = function(afterNum){
            $scope.beforeNum = afterNum * ($scope.selectedAfterCountry.rate / $scope.selectedBeforeCountry.rate);
        }


        $scope.setAfterNum = function(beforeNum){
            $scope.afterNum = beforeNum * ($scope.selectedBeforeCountry.rate / $scope.selectedAfterCountry.rate);
        }
    });

