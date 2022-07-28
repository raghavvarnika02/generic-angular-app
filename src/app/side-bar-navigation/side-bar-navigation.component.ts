import { Component, OnInit } from '@angular/core';
import { slideUpDown } from '../shared/animations/slide-up-down.animation';

@Component({
  selector: 'app-side-bar-navigation',
  templateUrl: './side-bar-navigation.component.html',
  styleUrls: ['./side-bar-navigation.component.scss'],
  animations: [slideUpDown]
})
export class SideBarNavigationComponent implements OnInit {
  public bottomSheet : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openBottomSheet(): void {
    this.bottomSheet=true;
    window.location.hash="#bottom-sheet";
    console.log('I am bottom sheet');
  }

}
