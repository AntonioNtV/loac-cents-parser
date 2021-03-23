import axios from 'axios';

export interface StudentInfo {
    code: string;
    cents: number;
}
interface CentsHash {
    [code: string] : number;
}


const parseSheetData = (sheetData: string) => {
    const lines = sheetData.split('\n')

    const centsPerCode: CentsHash = {};

    lines.forEach((element: string) => {
        const lineInfo: string[] = element.split(" ")
        const code: string = lineInfo[0]
        const cents: string = lineInfo[2]

        if (!centsPerCode[code]) {
            centsPerCode[code] = parseInt(cents);
        } else {
            centsPerCode[code] = centsPerCode[code] + parseInt(cents);
        }
    })

    let studentsInfo: StudentInfo[] = [];

    Object.keys(centsPerCode).forEach((element) => {
        const studentCode = element;
        const studentCents = centsPerCode[studentCode];

        studentsInfo.push({ code: studentCode, cents: studentCents })
    })


    studentsInfo.pop();

    return studentsInfo;
}


export default async () => {
    let sheetData = '';
    await axios.get('http://lad.dsc.ufcg.edu.br/loac/uploads/OAC/anon.txt').then((content) => {
        sheetData = content.data
    })

    return parseSheetData(sheetData);
}
