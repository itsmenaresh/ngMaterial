import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubmitService } from '../submit.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  providers: [SubmitService]
})
export class ReviewComponent implements OnInit {
  public fName: string;
  public lName: string;

  constructor(private router: Router, private SubmitService: SubmitService) { }

  ngOnInit() {
    this.fName = localStorage.getItem('fName');
    this.lName = localStorage.getItem('lName');
  }

  edit() {
    this.router.navigate(['/form']);
  }

  submit() {
    const userdata = {
      first_name: this.fName,
      last_name: this.lName
    }
    this.SubmitService.submitData(userdata).subscribe((reponse) => {
      console.log(reponse);
      alert("Application submitted!!");
      localStorage.clear();
      this.router.navigate(['/form']);
    });
  }
}
