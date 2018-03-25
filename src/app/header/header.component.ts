import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Output() navToggle = new EventEmitter<boolean>();

  constructor() {}

  toggleSidenav() {
    this.navToggle.emit(true);
  }
}
