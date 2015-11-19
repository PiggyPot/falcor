"use strict";

function falcor(opts) {
    return new falcor.Model(opts);
}

falcor.Promise = global.Promise;
module.exports = falcor;

falcor.Model = require("./Model");
