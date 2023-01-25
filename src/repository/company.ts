import { PrismaClient, Prisma } from '@prisma/client';

export class CompanyRepository {
    constructor(){}

    async getCompany(data: any){
        const prisma = new PrismaClient()
        return prisma.empresa.findMany({
            where: {
                DDD: data?.DDD,
                nome_empresa: data?.nome_empresa,
                nome_fantasia: data?.nome_fantasia,
                CNPJ: data?.CNPJ,
                filial: true,
                numero_filial: data?.NumeroFilial,
                cnae: {
                    codigo: data?.codigo,
                    nome: data?.NomeCnae,
                },
                setor: {
                    nome: data?.NomeSetor
                },
            },
        })
    }

    async deleteCompany(id: number){
        const prisma = new PrismaClient()
        return prisma.empresa.delete({
            where: {
                id: id,
            }
        })
    }

    async updateCompany(id: number, data: any){
        const prisma = new PrismaClient()
        return prisma.empresa.updateMany({
            where: {
                id: id,
            },
            ...data
        })
    }
}
