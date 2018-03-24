import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  searchValue: string; 

  constructor() { }

  ngOnInit() {
  }

  handleSearchImage(value:string){
    alert(value);
  }

}
