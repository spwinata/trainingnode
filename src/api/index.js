import express from 'express';
import { agenRouter } from './resources/agen';

export const restRouter = express.Router();
restRouter.use('/agen', agenRouter);
