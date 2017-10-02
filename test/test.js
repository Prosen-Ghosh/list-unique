const list = require('../unique');
const assert = require('chai').assert;
describe('Unique List',function(){
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(list.unique([1,2,3,1])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(list.intersection([1,2,3,1],[1,2,3,5,4])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(list.diff([1,2,3,1],[1,4,5,7])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return An Array',function(){
        assert.equal(Object.prototype.toString.call(list.union([1,2,3,1],[1,4,5,7])).toLowerCase(), '[object array]');
    });
    it('Function Shuld Return A Unique Array',function(){
        assert.deepEqual(list.unique([1,2,3,1]),[1,2,3]);
    });
    it('Function Shuld Return An Union Array',function(){
        assert.deepEqual(list.union([1,2,3,1],[1,4,5,7]),[ 1, 2, 3, 4, 5, 7 ]);
    });
    it('Function Shuld Return Intersection Of Two Set',function(){
        assert.deepEqual(list.intersection([1,2,3,1],[1,2,3,5,4]),[1,2,3]);
    });
    it('Function Shuld Return A Difference of two Set',function(){
        assert.deepEqual(list.diff([1,2,3,1],[1,4,5,7]),[2,3]);
    });
})