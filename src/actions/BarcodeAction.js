/**
 * Created by shiyue on 16-8-1.
 */
'use strict';
const Barcode = require('../transformer/Barcode');
let BarcodeItem = new Barcode();

const superAgent = require('superagent');
//条码转邮编类
class BarcodeAction {
    constructor() {
        this.name = 'barcode';
    }

    doAction(cmd,output) {
        if (cmd === 'b') {
            output(`*************
* WELCOME^V^*    
*-1.postcode*
*-2.barcode *
*-q.exit    *
*************`);
            return 'init';
        } else {
            superAgent
                .get('http://localhost:3000//express/barcode')
                .query({code: cmd})
                .end(function (err, res) {
                    output('the post code is ' + res.text+"please input the barcode(include |或:或 )/(back:b):");
                });
            return 'barcode';
        }
                    
    }
}

module.exports = BarcodeAction;