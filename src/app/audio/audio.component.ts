import { Component } from '@angular/core';

@Component({
    selector: 'app-audio',
    templateUrl: './audio.component.html'
})
export class AudioComponent {
    pageTitle: string = 'Audio Page';
    myArray = [5, 6, 12];
    myObj = {}
    myAudio = [];
    list = [];
    tempList = [];

    constructor() {
        console.log(this.pageTitle);
        console.log(this.myArray);


        this.myAudio = [
            {
                id: 1,
                name: 'ABC Track',
                arr : [
                    {
                        text : 'historical',
                        published: '1992',
                        version: '1'
                    },
                    {
                        text : 'historical',
                        published: '1996',
                        version: '2'
                    }
                ]
            },
            {
                id: 2,
                name: 'PQR Track',
                arr : [
                    {
                        text : 'Latest',
                        published: '1995',
                        version: '1'
                    },
                    {
                        text : 'Latest',
                        published: '2000',
                        version: '2'
                    }
                ]
            },
            {
                id: 3,
                name: 'XYZ Track',
                arr : [
                    {
                        text : 'Remix',
                        published: '2005',
                        version: '1'
                    },
                    {
                        text : 'Remix',
                        published: '2015',
                        version: '2'
                    }
                ]
            }
        ];

        this.myObj = {
            firstName: 'Khilen',
            lastName: 'Maniyar',
            personal :
            {
                age: 34
            },
            arr : [5,3,15],
            myArray : [
                {
                    id: 5,
                    name: 'Football'
                },
                {
                    id: 6,
                    name: 'Cricket'
                }
            ]
        }

        // label / value 

        this.list = [
            {
                id:1,
                name: 'ABC',
                country: 'India'
            },
            {
                id:2,
                name: 'PQR',
                country: 'India'
            },
            {
                id:3,
                name: 'ZYX',
                country: 'India'
            },
            {
                id:4,
                name: 'JKM',
                country: 'Sweden'
            },
            {
                id:5,
                name: 'LMN',
                country: 'Japan'
            },
            {
                id:6,
                name: 'PMO',
                country: 'Russia'
            }
        ];

        // First with Simple For Loop
        // for (let i=0; i<this.list.length; i++) {
        //     this.tempList[i] = this.list[i];
        // }

        // Second with Simple For Loop with Push Function
        // for (let i=0; i<this.list.length; i++) {
        //     this.tempList[i] = this.list[i];
            // this.tempList.push(this.list[i]);
        // }


        // Pure JavaScript 
        // this.list.forEach(function(item) {
        //     console.log(item);
        //     this.tempList.push(item);
        // })

        // let val = 15;


        // // Pure JavaScript  with ECMA SCript Arrow
        // this.list.forEach(item => {
        //     if (item.country == 'India') {
        //         this.tempList.push({
        //             'label': item.name,
        //             'value': item.id,
        //             'country': item.country,
        //             'isChecked': val
        //         });
        //     }
        // })



        // for (let item of this.list) {
        //     this.tempList.push(item);
        // }

        
        // this.tempList = 
        
        // this.list.filter(item => {
        //     return item.id > 4;
        // })
        // .map(item => {
        //     return {
        //         value: item.id,
        //         label: item.name
        //     }
        // })

        this.tempList = 
        
        this.list.map(item => {
            return {
                value: item.id,
                label: item.name
            }
        }).filter(item => {
            return item.value > 4;
        })
        

        // .map()
        // .filter()

        console.log(this.tempList);


        console.log(this.list);
    }

    printValue() : string {
        return this.pageTitle;
    }
}