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
exports.LeadRepository = void 0;
const client_1 = require("@prisma/client");
class LeadRepository {
    constructor() { }
    getLead(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            return prisma.leads.findMany({
                where: {
                    DDD: data === null || data === void 0 ? void 0 : data.DDD,
                    telefone: data === null || data === void 0 ? void 0 : data.Telefone,
                    nome: data === null || data === void 0 ? void 0 : data.Nome,
                    empresa: {
                        nome_empresa: data === null || data === void 0 ? void 0 : data.NomeEmpresa,
                        nome_fantasia: data === null || data === void 0 ? void 0 : data.NomeFantasia,
                        CNPJ: data === null || data === void 0 ? void 0 : data.CNPJ,
                        telefone: data === null || data === void 0 ? void 0 : data.EmpresaTelefone,
                        filial: data === null || data === void 0 ? void 0 : data.Filial,
                        numero_filial: data === null || data === void 0 ? void 0 : data.NumeroFilial,
                        cnae: {
                            nome: data === null || data === void 0 ? void 0 : data.NomeCnae,
                            codigo: data === null || data === void 0 ? void 0 : data.Codigo
                        },
                        setor: {
                            nome: data === null || data === void 0 ? void 0 : data.NomeSetor
                        }
                    },
                    cargo: {
                        nome: data === null || data === void 0 ? void 0 : data.NomeCargo
                    },
                    area: {
                        nome: data === null || data === void 0 ? void 0 : data.NomeArea
                    },
                },
                include: {
                    empresa: {
                        include: {
                            cnae: {},
                            setor: {}
                        }
                    },
                    area: {},
                    cargo: {}
                }
            });
        });
    }
    deleteLead(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            return prisma.leads.delete({
                where: {
                    id: id,
                }
            });
        });
    }
    updateLead(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const prisma = new client_1.PrismaClient();
            console.log(id, data);
            return prisma.leads.update({
                where: {
                    id: id,
                },
                data: Object.assign({}, data)
            });
        });
    }
}
exports.LeadRepository = LeadRepository;
