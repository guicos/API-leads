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
const express_1 = require("express");
const index_1 = require("../use-case/company/index");
const company = (0, express_1.Router)();
company.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseCompany = new index_1.GetCompanyUseCase();
    res.json(yield useCaseCompany.execute(req.query));
}));
company.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseCompany = new index_1.DeleteCompanyUseCase();
    res.json(yield useCaseCompany.execute(req.params.id));
}));
company.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseCompany = new index_1.UpdateCompanyUseCase();
    res.json(yield useCaseCompany.execute(req.params.id, req.body));
}));
exports.default = company;
