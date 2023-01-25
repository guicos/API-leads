import { CompanyRepository } from "../../repository/company";
import { TransformData } from "../../share/utils/transformData";

export class UpdateCompanyUseCase {
    constructor(){}
    async execute(id: string, data: any){
        const companyRepository = new CompanyRepository()
        const transform = new TransformData()
        const newData = await transform.number(data)
        return await companyRepository.updateCompany(parseInt(id), newData)
    }
}