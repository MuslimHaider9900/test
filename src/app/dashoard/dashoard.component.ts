import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashoard',
  templateUrl: './dashoard.component.html',
  styleUrls: ['./dashoard.component.css']
})
export class DashoardComponent implements OnInit {
  agentName: FormControl = new FormControl('Dolor');
  country: FormControl = new FormControl('Pakistan');
  constructor(public router: Router) { }

  ngOnInit() {
  }

}
