import { Router } from 'express';
import {GetLeadUseCase, DeleteLeadUseCase, UpdateLeadUseCase} from '../use-case/lead/index'
const lead = Router()

lead.get('', async (req, res) => {
    const useCaseLead = new GetLeadUseCase()
    res.json(await useCaseLead.execute(req.query))
})

lead.delete('/:id', async (req, res) => {
    const useCaseLead = new DeleteLeadUseCase()
    res.json(await useCaseLead.execute(req.params.id))
})

lead.put('/:id', async (req, res) => {
    const useCaseLead = new UpdateLeadUseCase()
    res.json(await useCaseLead.execute(req.params.id, req.body))
})

export default lead;