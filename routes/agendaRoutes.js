import express from "express";
import { getAgendas, addAgenda, updateAgenda, deleteAgenda, getSingleAgenda } from '../controllers/agendaController.js';

const router = express.Router();

router.get('/', getAgendas);

router.get('/:cod', getSingleAgenda);

router.post('/', addAgenda);

router.put('/:cod', updateAgenda);

router.delete('/:cod', deleteAgenda);

export default router;