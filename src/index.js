"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMaterial = void 0;
const colors_1 = __importDefault(require("./colors"));
function checkMaterial(color) {
    let colorSearched = color.toUpperCase();
    if (colorSearched.startsWith("#"))
        colorSearched = colorSearched.substring(1);
    if (colorSearched.length != 6)
        return false;
    let found = false;
    Object.values(colors_1.default).forEach(variantArray => {
        if (variantArray.includes(colorSearched))
            found = true;
    });
    if (found)
        return true;
    return false;
}
exports.checkMaterial = checkMaterial;
//# sourceMappingURL=index.js.map