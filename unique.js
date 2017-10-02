const list = (function(){
    'use strict';
    const unique = function(arr){
        return [... new Set(arr)];
    }
    const intersection = function (arr1,arr2){
        return [... new Set([... new Set(arr1)].filter(x => new Set(arr2).has(x)))];
    }
    const diff = function(arr1,arr2){
        return [... new Set([... arr1].filter(x => !new Set(arr2).has(x)))];
    }
    return {
        unique,
        intersection,
        diff
    };
})();

if (typeof module === 'object' && module.exports) {
    module.exports = list;
}