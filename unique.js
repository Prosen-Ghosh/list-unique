const list = (function(){
    'use strict';
    const unique = function(arr){
        return [... new Set(arr)];
    }
    const union = function(arr1,arr2){
        return [... new Set([... new Set(arr1), ... new Set(arr2)])];
    }
    const intersection = function (arr1,arr2){
        return [... new Set([... new Set(arr1)].filter(x => new Set(arr2).has(x)))];
    }
    const diff = function(arr1,arr2){
        return [... new Set([... new Set(arr1)].filter(x => !new Set(arr2).has(x)))];
    }
    return {
        unique,
        union,
        intersection,
        diff
    };
})();

if (typeof module === 'object' && module.exports) {
    module.exports = list;
}