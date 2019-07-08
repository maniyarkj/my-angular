import { Component, OnInit } from '@angular/core';
import { Subjects } from './subjects';

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
    // console.log(Subjects);
    // this.test();
    // console.log(this.getStudents());

    let students = this.getStudents();
    //console.log(students);

    // for (let i=0; i<students.length; i++) {
    //   if (students[i].age > 22) {
    //     console.log('Recode ',students[i]);
    //   }
    // }

    // students.forEach(function(std, ind) {
    //   //console.log(std);

    //     if (std.age > 22) {
    //       console.log('Recode ',std);
    //     }
    // })

    // students.forEach((std, ind) => {
    //   //console.log(std);

    //     if (std.age > 22) {
    //       console.log('Recode at index ',std, ind);
    //     }
    // });

    let studentsNew = students.filter(std => {
      return std.age > 22;
    });

    console.log(studentsNew);



//    for (let )


    //let stuData = this.getStudents();

    //let age = this.findMinimumAge(stuData);
    //console.log('Min Age = : ' + age);


    //let test: (name: string, id: number) => string;





    // test = this.createStudentsId;
    // let message = test('abc', 5);
    // console.log(test)
  }
  
  title = 'myYouTube';

  constructor() {
    // console.log('The Value of Flag ' + this.flag);

    // console.log(this.getStudents());
    // // Call Name of Books.
    // // let students = this.getStudentByFavSub(Subjects.Angular);
    // // this.logStudentName(students);


    // //let str : [number, string] = ['A+', 5];

  }

  test() {
    let str: Array<string> = ['Apple', 'Banana'];
    console.log(str);
  }
  
  getStudents() : any {
    let students = [
      {
        'name': 'Khilen',
        'age': 34,
        'rNo': 1005,
        'id': 1,
        'favSubject': Subjects.Angular
      },
      {
        'name': 'Akash',
        'age': 21,
        'rNo': 1006,
        'id': 2,
        'favSubject': Subjects.Java
      },
      {
        'name': 'Nisarg',
        'age': 22,
        'rNo': 1007,
        'id': 3,
        'favSubject': Subjects[".Net"]
      },
      {
        'name': 'Rajesh',
        'age': 24,
        'rNo': 1008,
        'id': 4,
        'favSubject': Subjects[Subjects.Java]
      },
      {
        'name': 'Rakesh',
        'age': 22,
        'rNo': 1009,
        'id': 5,
        'favSubject': Subjects.Python
      }
    ];

    return students;
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

  // getStudentByFavSub(favSub : Subjects) : Array<string> {
  //   let allStudents = this.getStudents();
  //   let filteredStudents : string[] = [];

  //   for (let student of allStudents) {
  //     if (student.favSubject == favSub) {
  //       filteredStudents.push(student.name);
  //     }
  //   }

  //   return filteredStudents;
  // }
  logStudentName(id: string): void;
  logStudentName(name: string[]): void;
  logStudentName(name: any): void {
    console.log('here');
    for (let nm of name) {
      console.log(nm);
    }
  }

  
  getStudentsFor(name, ...id:number[]): void {

  }

  createStudentsId(name: string, id?: number): string {
    return name + id;
  }
}
