import { Component, OnInit } from '@angular/core';
import { Subjects } from './subjects';
import {Student, StringGenerator} from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit  {
  str : String;
  no: number = 42;
  flag : boolean = false;

 

  ngOnInit(): void {
    

    let students = this.getStudents();
    

    let studentsNew = students.filter(std => {
      return std.age > 22;
    });

    console.log(studentsNew);


    // 10-July-2019

    // let test : (name: string, no: number) => string;
    // test = this.createStudentsId;
   
    // let newId: string = test('khilen', 12);
    // console.log(newId);

    // let requiredOptional = this.createStudentsId('Khilen');

    // Calling Rest

    // console.log(this.getStudentsRest('Khilen', 1,2));

    // 'khilen', [1,2,3]
  }
  
  title = 'myYouTube';

  constructor() {
    let message : StringGenerator;
    console.log(message('khilen', 5));
  }

  test() {
    let str: Array<string> = ['Apple', 'Banana'];
    console.log(str);
  }

 
  getStudents() : Student[] {
    let students = [
      {
        name: 'Khilen',
        'age': 21,
        'rNo': 1006,
        'id': 2,
        'favSubject': Subjects.Java,
        hobby: 'Cricket',
        bdate: '1975'
      },
      {
        name: 'Akash',
        'age': 21,
        'rNo': 1006,
        'id': 2,
        'favSubject': Subjects.Java,
        hobby: 'Cricket',
        bdate: '1975'
      },
      {
        'name': 'Nisarg',
        'age': 22,
        'rNo': 1007,
        'id': 3,
        'favSubject': Subjects[".Net"],
        hobby: 'Cricket',
        bdate: '1975'
      },
      {
        'name': 'Rajesh',
        'age': 24,
        'rNo': 1008,
        'id': 4,
        'favSubject': Subjects.Java,
        hobby: 'Cricket',
        bdate: '1975'
      },
      {
        'name': 'Rakesh',
        'age': 22,
        'rNo': 1009,
        'id': 5,
        'favSubject': Subjects.Python,
        hobby: 'Cricket',
        bdate: '1975'
      }
    ];

    return  students;
  }

  findMinimumAge(students): number {
    //let len = students.length;
    let minAge = 100;

    for (let std of students) {
      if (std.age < minAge) {
        minAge = std.age;
      }
    }
    return minAge;
  }

  logStudent(no: number) : string;
  logStudent(name: string): string;
  logStudent(no: number, name: string): string;
  logStudent(no: any): string {

    if ( typeof no == 'number') {

    }

    if (typeof no == 'string') {

    }

    return;
  }


  // getStudentsRest(name: string, ...no: number[]): string {

  //   console.log(name);
  //   console.log(no);

  //   for (let n of no) {
  //     console.log('value of n:', n);

  //   }

  //   return;
  // }


  createStudentsId(name: string, id?: number): string {
    return name + id;
  }
}
