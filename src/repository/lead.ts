import { PrismaClient, Prisma } from '@prisma/client';

export class LeadRepository {
    constructor(){}

    async getLead(data: any){
        const prisma = new PrismaClient()
        return prisma.leads.findMany({
            where: {
                DDD: data?.DDD,
                telefone: data?.Telefone,
                nome: data?.Nome,
                empresa: {
                    nome_empresa: data?.NomeEmpresa,
                    nome_fantasia: data?.NomeFantasia,
                    CNPJ: data?.CNPJ,
                    telefone: data?.EmpresaTelefone,
                    filial: data?.Filial,
                    numero_filial: data?.NumeroFilial,
                    cnae: {
                        nome: data?.NomeCnae,
                        codigo: data?.Codigo
                    },
                    setor: {
                        nome: data?.NomeSetor
                    }
                },
                cargo: {
                    nome: data?.NomeCargo
                },
                area:{
                    nome: data?.NomeArea
                },
            },
            include:{
                empresa: {
                    include: {
                        cnae: {},
                        setor: {}
                    }
                },
                area: {},
                cargo: {}
            }
        })
    }

    async deleteLead(id: number){
        const prisma = new PrismaClient()
        return prisma.leads.delete({
            where: {
                id: id,
            }
        })
    }

    async updateLead(id: number, data: any){
        const prisma = new PrismaClient()
        console.log(id, data)
        return prisma.leads.update({
            where: {
                id: id,
            },
            data: {
                ...data
            }
        })
    }
}
