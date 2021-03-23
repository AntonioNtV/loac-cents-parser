import { Router } from 'express';

import studentsRouter from './students.routes';

const routes = Router();

routes.use('/students', studentsRouter);

export default routes;
