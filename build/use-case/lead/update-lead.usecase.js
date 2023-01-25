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
exports.UpdateLeadUseCase = void 0;
const lead_1 = require("../../repository/lead");
const transformData_1 = require("../../share/utils/transformData");
class UpdateLeadUseCase {
    constructor() { }
    execute(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const leadRepository = new lead_1.LeadRepository();
            const transform = new transformData_1.TransformData();
            const newData = yield transform.number(data);
            return yield leadRepository.updateLead(parseInt(id), newData);
        });
    }
}
exports.UpdateLeadUseCase = UpdateLeadUseCase;
