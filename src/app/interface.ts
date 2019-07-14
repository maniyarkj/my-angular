
import { Subjects } from './subjects';

interface personal {
    bdate: string,
    hobby: string
}

interface Student extends personal {
    name: string,
    age: number,
    rNo: number,
    id?: number,
    favSubject?: Subjects,
}

interface StringGenerator {
    (name: string, id: number) : string;
}

interface forTeacher {
    takeSession() : void;
}

export {Student, StringGenerator, forTeacher}