import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-video',
    templateUrl: './video-list.component.html'
})

// Class
export class VideoListComponent implements OnInit {
    videoList = [];
    selectedVideo: '';
    pageTitle= 'Video List';
    myObj = {};
    myVideo = [];
    arr = [];
    constructor() {

    }

    ngOnInit() {
      

        this.myVideo = this.videoList.map(
            item => {
                return {
                    value: item.value,
                    label: item.label
                }
            }
        );


    }
}