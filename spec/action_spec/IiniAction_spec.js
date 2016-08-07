/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const Init=require('../../src/actions/InitAction');

describe('initAction',function () {
    let init;
    beforeEach(()=>
        init=new Init());
    
    it('postcode',function () {
        let output = jasmine.createSpy('spy');
        expect(init.doAction('1',output)).toHaveBeenCalledWith('please input the postcode(eg:12345或123456789或12345-6789)/(back:b):');
        expect(init.doAction('1',output).toBe('postcode'));
    });
});
