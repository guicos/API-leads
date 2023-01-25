import { LeadRepository } from "../../repository/lead";
import { TransformData } from "../../share/utils/transformData";

export class GetLeadUseCase {
    constructor(){}
    async execute(data: any){
        const leadRepository = new LeadRepository()
        const transform = new TransformData()
        const newData = await transform.number(data)
        const lead = await leadRepository.getLead(newData)
        if(data?.NumeroFuncionario){ 
            return await transform.calculator(lead, data?.NumeroFuncionario)
        }

        return lead
    }
}