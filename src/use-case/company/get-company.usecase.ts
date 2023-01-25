import { CompanyRepository } from "../../repository/company";
import { TransformData } from "../../share/utils/transformData";

export class GetCompanyUseCase {
    constructor(){}
    async execute(data: any){
        const companyRepository = new CompanyRepository()
        const transform = new TransformData()
        
        const newData = await transform.number(data);
        const lead = await companyRepository.getCompany(newData)
        if(data?.NumeroFuncionario){ 
            return await transform.calculator(lead, data?.NumeroFuncionario)
        }

        return lead
    }
}