import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public firstName: string;
  public lastName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.firstName = localStorage.getItem("fName");
    this.lastName = localStorage.getItem("lName");
  }

  route(x) {
    if (x.fName && x.lName) {
      localStorage.setItem("fName", x.fName);
      localStorage.setItem("lName", x.lName);
      this.router.navigate(['/review']);
    }
  }
}
