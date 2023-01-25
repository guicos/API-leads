import { LeadRepository } from "../../repository/lead";
import { TransformData } from "../../share/utils/transformData";

export class UpdateLeadUseCase {
    constructor(){}
    async execute(id: string, data: any){
        const leadRepository = new LeadRepository()
        const transform = new TransformData()
        const newData = await transform.number(data)
        return await leadRepository.updateLead(parseInt(id), newData)
    }
}