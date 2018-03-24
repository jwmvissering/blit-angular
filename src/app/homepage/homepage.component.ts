import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  searchValue: string; 

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleSearchImage(){
    if (this.searchValue.length < 3) {
      alert('Foutieve invoer');
    } else {
      this.router.navigate(['search', this.searchValue])
    }
  }

}
