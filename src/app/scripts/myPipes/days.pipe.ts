import { PipeTransform, Pipe } from '@angular/core';

// import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'daysFromToday'})
export class FindDaysBetweenDates implements PipeTransform {
    transform(value: Date) : number {
        console.log(value);

        let bdate = new Date(value).toLocaleDateString();

        let today = new Date().toLocaleDateString();
        console.log(today);
        return this.datediff(this.parseDate(bdate), this.parseDate(today));
    }

    parseDate(str) {
        var mdy = str.split('/');
        return new Date(mdy[2], mdy[0]-1, mdy[1]);
    }
    
    datediff(first, second) {
        // Take the difference between the dates and divide by milliseconds per day.
        // Round to nearest whole number to deal with DST.
        return Math.round((second-first)/(1000*60*60*24));
    }
    
}






















// @Pipe(
//     {
//         name: 'daysFromToday'
//     }
// )
// export class FindDaysBetweenDates implements PipeTransform {

//     transform(bdate: Date) : number {
//         return 0
//     }
// }