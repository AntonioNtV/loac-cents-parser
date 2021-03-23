import { StudentInfo } from '../database';
import getStudentsInfo from '../database/index'

class StudentsRepository {
    studentsInfo: StudentInfo[]

    constructor (studentsInfo: StudentInfo[]) {
        this.studentsInfo = studentsInfo;
    }

    static async build () {
        var studentsInfo = await getStudentsInfo();

        studentsInfo.sort((studentA, studentB) => {
            return studentB.cents - studentA.cents;
        })

        return new StudentsRepository(studentsInfo);
    }

    public getStudents(): StudentInfo[] {
        return this.studentsInfo;
    }

    public getStudentByCode(code: string): StudentInfo | undefined {
        const student = this.studentsInfo.find((student) => {
            return student.code === code;
        })

        return student;
    }
}

export default StudentsRepository;
