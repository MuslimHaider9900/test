import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-main-content-shell',
  templateUrl: './main-content-shell.component.html',
  styleUrls: ['./main-content-shell.component.css']
})
export class MainContentShellComponent implements OnInit {
  tableData: any;
  constructor(public dataService: HttpService) { }
  ngOnInit() {
    this.dataService.getUsers(1).subscribe(response => {
      this.tableData = response;
    });
  }

  pageChangeEvent($event: any) {
    this.dataService.getUsers($event.pageIndex + 1).subscribe(response => {
      this.tableData = response;
    });
  }
}
