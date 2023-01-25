"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformData = void 0;
class TransformData {
    constructor() { }
    number(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (data === null || data === void 0 ? void 0 : data.Codigo)
                data.Codigo = parseInt(data === null || data === void 0 ? void 0 : data.Codigo);
            if (data === null || data === void 0 ? void 0 : data.Filial)
                data.Filial = (data === null || data === void 0 ? void 0 : data.Filial) == 1 ? true : false;
            if (data === null || data === void 0 ? void 0 : data.NumeroFilial)
                data.NumeroFilial = parseInt(data === null || data === void 0 ? void 0 : data.NumeroFilial);
            return data;
        });
    }
    calculator(data, number) {
        return __awaiter(this, void 0, void 0, function* () {
            return data.filter((element) => element.empresa.numero_funcionarios >= number);
        });
    }
}
exports.TransformData = TransformData;
