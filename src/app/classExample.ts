import { forTeacher } from './interface'

class Teacher implements forTeacher {
    takeSession() : void {
        console.log('take session');
    }
}