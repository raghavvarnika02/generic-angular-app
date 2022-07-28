import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { slideUpDown } from '../animations/slide-up-down.animation';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
  animations: [ slideUpDown ]
})
export class BottomSheetComponent implements OnInit {
  @HostBinding('class.flex') public flex = true;
	@HostBinding('class.justify-center') public justifyCenter = true;
	@HostBinding('class.items-center') public itemsCenter = true;
	@HostBinding('class.fixed') public fixed = true;
	@HostBinding('class.top-0') public top0 = true;
	@HostBinding('class.right-0') public right0 = true;
	@HostBinding('class.bottom-0') public bottom0 = true;
	@HostBinding('class.left-0') public left0 = true;
	@HostBinding('class.cb-z-index-1') public cbZIndex1 = true;
	@HostBinding('class.cb-p-8') public cbP8 = true;
	@HostBinding('class.cb-pointer-events-none') public pointerEventsNone = true;

	@Input() public id: string | undefined;
	@Input() public title: string | undefined;
	@Input() public subtitle: string | undefined;
	@Input() public submitLabel: string | undefined;
	@Input() public showSubmit = true;
	@Input() public showCancel = true;
	@Input() public hidden = true;
	@Input() public customWidth: string | undefined;
	@Output() public hiddenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public onClose(): void {
		this.hidden = true;
		this.hiddenChange.emit(this.hidden);
	}

}
