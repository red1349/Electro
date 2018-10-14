import { Component, OnInit, HostListener, Input } from '@angular/core';
import { DropdownOptions } from '../common/models/common.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() data: any;
  @Input() optionss: DropdownOptions;
  options: DropdownOptions;
  constructor() { }

  ngOnInit() {
    this.options = Object.assign(new DropdownOptions(), this.optionss);
    console.log(this.optionss);
    console.log(this.options);
  }

  @HostListener('mouseover') mouseover() {
    if (this.options.collapsable) {
      this.options.collapsed = false;
    }
  }

  @HostListener('mouseout') mouseout() {
    if (this.options.collapsable) {
      this.options.collapsed = true;
    }
  }

  customWidth() {
    if (this.options.collapsable && this.data.hasDropdown) {
      return this.data.dropdownItems.length * 15;
    }
  }

}
