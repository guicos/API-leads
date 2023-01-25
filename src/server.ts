import express from 'express';
import { Router, Request, Response } from 'express';
import cors from 'cors';
import lead from './controller/lead';
import company from './controller/company';

const app = express();

const router = Router();

// Cors
app.use(cors())

// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Rota Serve
router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
});

//Routers
app.use('/lead', lead)
app.use('/company', company)

app.listen( 21023, () => 'server running')