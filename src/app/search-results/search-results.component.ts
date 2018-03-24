import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  searchValue: string;
  photos: any;
  resultCount: any;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchValue = params.get("value");
      console.log(this.searchValue);
      if (this.searchValue.length < 3) {
        alert("Foutieve invoer");
      } else {
        this.appService.searchPhotos(this.searchValue).subscribe( photos => {
            this.photos = photos;
            this.resultCount = this.photos.total;
            console.log(photos);
        });
      }
    });
  }
}
