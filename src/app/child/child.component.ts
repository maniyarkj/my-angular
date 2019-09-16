import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html'
})

export class ChildComponent {
    @Input('aakash') childData: number;
    @Output() result = new EventEmitter();

    name: string;
    age: number;
    constructor() {
        console.log('Child is inialized');
        
    }

    sendDataToParent(data: number) : void {
        this.result.emit(this.childData--);
    }
}