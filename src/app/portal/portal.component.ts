import { Component, HostBinding, OnInit } from '@angular/core';
import { slideUpDown } from '../shared/animations/slide-up-down.animation';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  animations: [slideUpDown]
})
export class PortalComponent implements OnInit {
  @HostBinding('class.vh-width-100') public width = true;

  public openBottom = false;
  constructor() { }

  public ngOnInit(): void {
  }

  public opentoggle(): void {
    this.openBottom = !this.openBottom;
  }

}
