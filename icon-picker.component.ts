import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'tolvbots-icon-picker',
  templateUrl: './icon-picker.component.html',
  styleUrls: ['./icon-picker.component.scss']
})
export class IconPickerComponent implements OnInit {

  iconList = [
    "fas fa-comments",
    "far fa-comments",
    "far fa-comment-alt",
    "fas fa-comment-alt",
    "fas fa-comment",
    "far fa-comment",
    "fas fa-headset",
    "far fa-comment-dots",
    "fas fa-comment-dots",
    "fas fa-concierge-bell",
    "fab fa-gratipay",
    "far fa-grin-beam",
    "fas fa-grin-beam",
    "fas fa-grin",
    "far fa-grin",
    "far fa-grin-alt",
    "fas fa-grin-alt",
    "far fa-grin-wink",
    "fas fa-grin-wink",
    "far fa-laugh",
    "fas fa-laugh",
    "fas fa-rocket",
    "fas fa-tag",
    "fas fa-tags",
    "fas fa-user-edit",
    "fas fa-user",
  ];

  @Input() label:string;
  @Input() icon:string;
  @Output() iconChange:EventEmitter<string> = new EventEmitter();

  showList:boolean = false;

  constructor() { }

  toogle(){
    this.showList = !this.showList;
  }

  get model(){
    return this.icon
  }

  selected(icon){
    return this.icon == icon;
  }

  select(icon:string):void{
    this.icon = icon;
    this.iconChange.emit(icon);
  }



  ngOnInit() {
  }

}
