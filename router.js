'use strict';
const InitAction = require('./src/actions/InitAction');
const PostcodeAction = require('./src/actions/PostcodeAction');
const BarcodeAction = require('./src/actions/BarcodeAction');

let actions = [
    new InitAction(),
    new PostcodeAction(),
    new BarcodeAction(),
];

class Router {
    constructor(currentActionName) {
        this.currentActionName = currentActionName;
    }

    handle(cmd, output) {
        let nextAction = actions.find((item)=>item.name === this.currentActionName);
        this.currentActionName = nextAction.doAction(cmd, output);

    }

    start() {
        console.log(actions.find((item)=>item.name === this.currentActionName).help);
    }
}
module.exports = Router;