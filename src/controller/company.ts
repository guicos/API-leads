import { Router } from 'express';
import {GetCompanyUseCase, DeleteCompanyUseCase, UpdateCompanyUseCase} from '../use-case/company/index'
const company = Router()

company.get('', async (req, res) => {
    const useCaseCompany = new GetCompanyUseCase()
    res.json(await useCaseCompany.execute(req.query))
})

company.delete('/:id', async (req, res) => {
    const useCaseCompany = new DeleteCompanyUseCase()
    res.json(await useCaseCompany.execute(req.params.id))
})

company.put('/:id', async (req, res) => {
    const useCaseCompany = new UpdateCompanyUseCase()
    res.json(await useCaseCompany.execute(req.params.id, req.body))
})

export default company;