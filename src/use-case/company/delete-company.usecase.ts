import { CompanyRepository } from "../../repository/company";

export class DeleteCompanyUseCase {
    constructor(){}
    async execute(id: string){
        const companyRepository = new CompanyRepository() 
        return await companyRepository.deleteCompany(parseInt(id))
    }
}