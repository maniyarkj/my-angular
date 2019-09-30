import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent {
    @Input ('readFromParent') fromParent : string;
}