import { Router } from 'express';
import StudentsRepository from '../repositories/studentsRepository';
import { AppError } from '../errors/AppError';
const studentsRouter = Router();



studentsRouter.get('/', async (request, response) => {
    const studentsRepository = await StudentsRepository.build()
    return response.json(studentsRepository.getStudents())


});

studentsRouter.get('/:code', async (request, response) => {
    const { code } = request.params;

    const studentsRepository = await StudentsRepository.build()
    const student = studentsRepository.getStudentByCode(code);

    if (student) {
        return response.json(student)
    } else {
        throw new AppError('Code doesnt exists', 404)
    }

});

export default studentsRouter;
