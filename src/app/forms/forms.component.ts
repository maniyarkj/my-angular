import { Component, DoBootstrap } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html'
})

export class FormsComponent {
    myForm: FormGroup;
    name;
    dob; 
    email;
    password;
    gender;
    mobile;

    constructor() {
        const full_name = new FormControl('');
        const date_of_birth = new FormControl('', Validators.required);
        const emailId = new FormControl('', Validators.required);
        const mobile_number = new FormControl('', Validators.required);
        const password_control = new FormControl('', Validators.required);
        const c_password_control = new FormControl('', Validators.required);
        const member_gender = new FormControl('', Validators.required);

        this.myForm = new FormGroup({
            full_name: full_name,
            date_of_birth: date_of_birth,
            emailId: emailId,
            mobile_number: mobile_number,
            password_control: password_control,
            c_password_control: c_password_control,
            member_gender: member_gender,
        })

    }

    submitData() : void {

        console.log(this.myForm.valid);

        console.log(this.name);
        console.log(this.dob);
        console.log(this.email);
        console.log(this.mobile);
        console.log(this.password);
        console.log(this.gender);


    }
}