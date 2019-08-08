import { Component } from '@angular/core';

@Component({
    selector: 'app-avd',
    templateUrl: './avd.component.html'
})

export class AVDComponent {
    pageTitle: string = 'AVD Page';
    myArray = [];
    showTable: boolean = true;
    myValue: string;
    myObj = {

    }
    avdObj = {

    }

    constructor() {

        this.myArray = [
            {
                id:5,
                name:'ABC'
            },
            {
                id:6,
                name:'ZYD'
            }
        ];

        this.myObj = {
            firstName: 'Sanket',
            lastName: 'Mehta',
            marks: {
                maths: 55
            },
            skills: [
                {
                    id: 1,
                    name:'Cricket',
                    daily_timing: [
                        {
                            'mon': '9 to 6',
                            'tue': '9 to 7',
                            'wed': '9 to 4'
                        },
                        {
                            'mon': '9 to 6',
                            'tue': '9 to 7',
                            'wed': '9 to 4'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Surf',
                    // daily_timing: [
                    //     {
                    //         'mon': '9 to 6',
                    //         'tue': '9 to 5',
                    //         'wed': '9 to 3'
                    //     },
                    //     {
                    //         'mon': '9 to 6',
                    //         'tue': '9 to 5',
                    //         'wed': '9 to 3'
                    //     }
                    // ],
                },
                {
                    id: 3,
                    name: "Reading",
                    // daily_timing: [
                    //     {
                    //         'mon': '9 to 6',
                    //         'tue': '5 to 7',
                    //         'wed': '4 to 4'
                    //     },
                    //     {
                    //         'mon': '9 to 6',
                    //         'tue': '5 to 7',
                    //         'wed': '4 to 4'
                    //     }
                    // ]
                }
            ]
        };

        this.avdObj = {
            id: 1,
            track: 'ABC Track',
            version: '1'
        }
        console.log(this.myObj);
    }

    printPageTitle(): string {
        return this.pageTitle;
    }

    callClickFunction(id: number) : void {
        alert("Selected ID : "+ id);
        console.log(this.myValue);
    }
}