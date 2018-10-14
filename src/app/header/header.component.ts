import { Component, OnInit } from '@angular/core';
import { DropdownOptions } from '../common/models/common.model';
import { MainPageHeader, SecondaryPageHeader } from '../../assets/headerData';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mainPageHeaderData = MainPageHeader;
  secondaryPageHeaderData = SecondaryPageHeader;

  constructor() { }

  HeaderElementsBottom = [
    { title: 'All Pages', hasDropdown: true, dropdownItems: [
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
      { title: 'Car & Motorbike', classes: ['highlight', 'no-top-border'], isLink: false },
      { title: 'Home 2', link: '/2' },
      { title: 'Home 3', link: '/3' },
      { title: 'Home 4', link: '/4' },
      { title: 'Home 5', link: '/5' },
      { title: 'Home 6', link: '/6' },
    ] },
    { title: 'Featured Brands', hasDropdown: false },
    { title: 'Trending Styles', hasDropdown: false },
    { title: 'Gift Cards', hasDropdown: false },
    { title: 'Free Shipping on orders $50+', hasDropdown: false, specialClass: true }
  ];

  ngOnInit() {
  }

  createSubMenus(item) {
    return new DropdownOptions(
      item.hasDropdown
    );
  }

  createMainMenu(item) {
    return new DropdownOptions(item.collapsable, false, [], true);
  }

}
