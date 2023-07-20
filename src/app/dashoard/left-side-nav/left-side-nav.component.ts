import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side-nav',
  templateUrl: './left-side-nav.component.html',
  styleUrls: ['./left-side-nav.component.scss']
})
export class LeftSideNavComponent implements OnInit {
  selectedItem!: number;
  sideNavItemsEnum: any = {
    login: 0,
    profile: 1,
    favorite: 2
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }
  itemChange(item: number) {
    this.selectedItem = item;
    this.router.navigate(['dashboard/login'])
  }
}
