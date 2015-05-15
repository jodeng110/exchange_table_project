/**
 * Created by jodeng on 15. 5. 15..
 */
'use strict';

angular.module("customFilters", [])
    .filter("signLabel", function(){

        return function (value, sign) {
            //console.log(value + " : " + sign);

            if(sign == '-')
                return '-'+value;
            else
                return value;
        }

    });