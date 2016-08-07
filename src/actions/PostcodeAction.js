/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const Postcode = require('../transformer/Postcode');
let PostcodeItem = new Postcode();

let superAgent = require('superagent');

//邮编转条码类
class PostAction {
    constructor() {
        this.name = 'postcode';
    }

    doAction(cmd, output) {
        if (cmd === 'b') {
            output(`
*************
* WELCOME^V^*    
*-1.postcode*
*-2.barcode *
*-q.exit    *
*************`);
            return 'init';
        } else {
            superAgent
                .get('http://localhost:3000//express/postcode')
                .query({code: cmd})
                .end(function (err, res) {
                    output('the barcode is' + res.text+'please input the postcode(eg:12345或123456789或12345-6789)/(back:b):');
            });
            return 'postcode';
        }
    }
}
module.exports = PostAction;