import express from 'express';
import agenController from './agen.controller';

export const agenRouter = express.Router();

agenRouter.route('/')
    .post(agenController.create)
    .get(agenController.findAll);

agenRouter.route('/:id')
    .get(agenController.findOne)
    .put(agenController.update)
    .delete(agenController.delete);
