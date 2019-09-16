import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Direction } from './enum';
import { Direct } from 'protractor/built/driverProviders';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    

    data1 = 1;
    data2 = 'Component 2';
    data3 = 'Component 3';
    data4 = 'Component 4';
    name;
    surname;
    // myForm: FormGroup;
    // name;
    // dob; 
    // email;
    // password;
    // gender;
    // mobile;
    // people = [];
    // direct = Direction;
    // myDir;
    
    
    // full_name = new FormControl('');
    // date_of_birth = new FormControl('', Validators.required);
    // emailId = new FormControl('', Validators.required);
    // mobile_number = new FormControl('', Validators.required);
    // password_control = new FormControl('', Validators.required);
    // c_password_control = new FormControl('', Validators.required);
    // member_gender = new FormControl('', Validators.required);

    constructor() {
        // console.log(this.direct.East);
        // this.myDir = this.direct.East;

        // // this.myForm = new FormGroup({
        // //     full_name: this.full_name,
        //     date_of_birth: this.date_of_birth,
        //     emailId: this.emailId,
        //     mobile_number: this.mobile_number,
        //     password_control: this.password_control,
        //     c_password_control: this.c_password_control,
        //     member_gender: this.member_gender,
        // })


        // this.people.push(
        //     {
        //         id: 1,
        //         name: 'khilen',
        //         age: 34
        //     },
        //     {
        //         id: 2,
        //         name: 'Rakesh',
        //         age: 24
        //     },
        //     {
        //         id: 3,
        //         name: 'Sanket',
        //         age: 24
        //     },
        //     {
        //         id: 4,
        //         name: 'Janki',
        //         age: 22
        //     }
        // );

        // console.log(this.people);
        //console.log('In Constructor Name : ', this.name);
        //console.log('In Constructor Name : ', this.surname);
    }

    sendToChild() : void {
        this.data1++;
    }

    // submitData() : void {

    //     // console.log(this.myForm.valid);

    ////     // console.log(this.name);
    ////     // console.log(this.dob);
    //     // console.log(this.email);
    //     // console.log(this.mobile);
    //     // console.log(this.password);
    //     // console.log(this.gender);

    //     console.log(this.full_name.value);

    // }

    // reloadFormData(): void {
    //     this.mobile_number.setValue(9979328500);
    // }

    gotResult(data): void {
        console.log('Got Result From Child', data);
    }

    ngAfterContentInit(): void {
        //console.log('In ngAfterContentInit', this.name);
        //console.log('In ngAfterContentInit', this.surname);
    }
    ngAfterContentChecked(): void {
        //console.log('In ngAfterContentChecked', this.name);
        //console.log('In ngAfterContentChecked', this.surname);
    }
    ngAfterViewInit(): void {
        //console.log('In ngAfterViewInit', this.name);
        //console.log('In ngAfterViewInit', this.surname);
    }
    ngAfterViewChecked(): void {
        //console.log('In ngAfterViewChecked', this.name);
        //console.log('In ngAfterViewChecked', this.surname);
    }
    ngOnDestroy(): void {
        //console.log('In ngOnDestroy', this.name);
        //console.log('In ngOnDestroy', this.surname);
    }
    ngDoCheck(): void {
        //console.log('In ngDoCheck', this.name);
        //console.log('In ngDoCheck', this.surname);
    }
    ngOnChanges(): void {
        //console.log('In ngOnChanges', this.name);
        //console.log('In ngOnChanges', this.surname);
        console.log(this.data1);
    }
    ngOnInit(): void {
        //console.log('In ngOnInit', this.name);
        //console.log('In ngOnInit', this.surname);
    }

}