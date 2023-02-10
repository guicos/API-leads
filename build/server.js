"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const cors_1 = __importDefault(require("cors"));
const lead_1 = __importDefault(require("./controller/lead"));
const company_1 = __importDefault(require("./controller/company"));
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
// Cors
app.use((0, cors_1.default)());
app.use('*', (0, cors_1.default)());
// JSON
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Rota Serve
router.get('/', (req, res) => {
    res.json({ message: 'hello world with Typescript' });
});
//Routers
app.use('/lead', lead_1.default);
app.use('/company', company_1.default);
app.listen(21023, () => 'server running');
