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
const index_1 = require("../use-case/lead/index");
const lead = (0, express_1.Router)();
lead.get('', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseLead = new index_1.GetLeadUseCase();
    res.json(yield useCaseLead.execute(req.query));
}));
lead.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseLead = new index_1.DeleteLeadUseCase();
    res.json(yield useCaseLead.execute(req.params.id));
}));
lead.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const useCaseLead = new index_1.UpdateLeadUseCase();
    res.json(yield useCaseLead.execute(req.params.id, req.body));
}));
exports.default = lead;
