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
exports.CompanyRepository = void 0;
const client_1 = require("@prisma/client");
class CompanyRepository {
    constructor() { }
    getCompany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            return prisma.empresa.findMany({
                where: {
                    DDD: data === null || data === void 0 ? void 0 : data.DDD,
                    nome_empresa: data === null || data === void 0 ? void 0 : data.nome_empresa,
                    nome_fantasia: data === null || data === void 0 ? void 0 : data.nome_fantasia,
                    CNPJ: data === null || data === void 0 ? void 0 : data.CNPJ,
                    filial: true,
                    numero_filial: data === null || data === void 0 ? void 0 : data.NumeroFilial,
                    cnae: {
                        codigo: data === null || data === void 0 ? void 0 : data.codigo,
                        nome: data === null || data === void 0 ? void 0 : data.NomeCnae,
                    },
                    setor: {
                        nome: data === null || data === void 0 ? void 0 : data.NomeSetor
                    },
                },
            });
        });
    }
    deleteCompany(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            return prisma.empresa.delete({
                where: {
                    id: id,
                }
            });
        });
    }
    updateCompany(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            return prisma.empresa.updateMany(Object.assign({ where: {
                    id: id,
                } }, data));
        });
    }
}
exports.CompanyRepository = CompanyRepository;
