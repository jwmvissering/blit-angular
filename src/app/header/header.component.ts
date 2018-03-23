import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#nav-trigger").click(function () {
          $("#nav-list").animate({
              right: 0
          }, 500, function () {
              // Animation complete.
          });
          $("#overlay").fadeIn(500);
      });
  
      $("#overlay").click(function () {
          $("#nav-list").animate({
              right: -300
          }, 500, function () {
              // Animation complete.
          });
          $("#overlay").fadeOut(500);
      });
  
      $("#nav-close").click(function () {
          $("#nav-list").animate({
              right: -300
          }, 500, function () {
              // Animation complete.
          });
          $("#overlay").fadeOut(500);
      });
  });
  }

}
