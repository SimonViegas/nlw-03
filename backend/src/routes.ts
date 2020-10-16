import { Router } from "express";
import OrphanagesController from './controllers/OrphanagesControler';

const routes = Router();

routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', OrphanagesController.create);
 
export default routes;
