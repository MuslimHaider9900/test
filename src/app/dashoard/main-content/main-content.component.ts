import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainContentComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'first_name', 'last_name', 'email', 'avatar'];
  dataSource!: MatTableDataSource<any>;

  test: FormControl = new FormControl('test');
  @Input() tableData: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.tableData.data);
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes['tableData'].currentValue) {
      this.tableData = changes['tableData'].currentValue;
      this.dataSource = new MatTableDataSource(this.tableData.data);
      this.dataSource.paginator = this.paginator;
    }
  }

}
