/**
 * Created by jodeng on 15. 5. 15..
 */
'use stric';

angular.module("customDirectives", [])
    .directive('onlyNumber', function($filter){
        return {
            require: 'ngModel',//ng-model
            restrict: 'A', //attribute
            link: function (scope, element, attr, ctrl) {
                function inputValue(val) {
                    if (val) {

                        var digits = val.replace(/[^0-9.]/g, '');

                        // . 1개 존재 확인
                        var ar = digits.split(".");
                        if(ar.length >= 3){
                            var lastDotIdx = digits.lastIndexOf(".");
                            digits = digits.substring(0, lastDotIdx) + digits.substring(lastDotIdx+1);
                            console.log(digits);
                        }

                        // 0으로 시작할 경우 0 지우기.

                        if(digits.indexOf("0") == 0)
                        {
                            digits = digits.substring(1);
                        }

                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();

                            //console.log($filter('number')(digits, 2));
                        }

                        return digits;
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);

//		        ctrl.$parsers.push(function(data) {
//		        	console.log("model fomat : " + data);
//
//		            //convert data from view format to model format
//		            return data; //converted
//		          });

                ctrl.$formatters.push(function(data) {

                    //convert data from model format to view format
                    return $filter('number')(data, 2); //converted
                });

                element.bind('focus', function () {
                    if(isNaN(ctrl.$modelValue)) {
                        ctrl.$modelValue = 0;
                    }
                    element.val(ctrl.$modelValue);
                });

                element.bind('blur', function () {

                    ctrl.$viewValue = $filter('number')(ctrl.$modelValue, 2);

                    if(ctrl.$viewValue == ''){

                        ctrl.$viewValue = 0;
                    }

                    element.val(ctrl.$viewValue);
                });
            }
        };
    });