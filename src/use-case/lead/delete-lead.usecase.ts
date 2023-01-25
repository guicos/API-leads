import { LeadRepository } from "../../repository/lead";

export class DeleteLeadUseCase {
    constructor(){}
    async execute(id: string){
        const leadRepository = new LeadRepository() 
        return await leadRepository.deleteLead(parseInt(id))
    }
}