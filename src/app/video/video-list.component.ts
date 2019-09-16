import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video-list.component.html'
})

// Class
export class VideoListComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    // videoList = [];
    // selectedVideo: '';
    // pageTitle= 'Video List';
    // myObj = {};
    // myVideo = [];
    // arr = [];
    firstName = 'Rakesh';
    constructor() {
        console.log('Name : ', this.firstName);
    }

    ngOnDestroy() {}
    ngAfterViewChecked(){}
    ngAfterViewInit() {}
    ngAfterContentChecked() {}
    ngAfterContentInit() {}
    ngDoCheck() {}
    ngOnChanges() { }
    ngOnInit() {}
}