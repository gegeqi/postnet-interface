/**
 * Created by shiyue on 16-8-1.
 */
'use strict';

//初始化界面类
class InitAction {
    constructor() {
        this.name = 'init';
        this.help = `
\n\t\t\t\t     *************
\t\t\t\t     * WELCOME^V^*    
\t\t\t\t     *-1.postcode*
\t\t\t\t     *-2.barcode *
\t\t\t\t     *-q.exit    *
\t\t\t\t     *************`;
    }

    doAction(cmd, output) {
        switch (cmd) {
            case '1':
                output('please input the postcode(eg:12345或123456789或12345-6789)/(back:b):');break;
                //return 'postcode';
            case '2':
                output("please input the barcode(include |或:或 )/(back:b):");
                return 'barcode';
            case 'q':
                process.exit(0);
            default:
                output('无效的输入！请重新选择-V_V-\n');
                output(`
                     *************
                     * WELCOME^V^*    
                     *-1.postcode*
                     *-2.barcode *
                     *-q.exit    *
                     *************`);
                return 'init';
                //break;
        }
    }
}

module.exports = InitAction;
