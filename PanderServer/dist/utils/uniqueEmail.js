"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEmailInDB = void 0;
exports.checkEmailInDB = (data) => {
    if (data.length > 0) {
        // email already exists. Handle error.
        throw new Error('Email Already Exists');
    }
};
