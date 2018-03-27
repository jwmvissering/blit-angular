import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { PhotoService } from "../shared/services/photo.service";

@Component({
  selector: "app-search-results",
  templateUrl: "./search-results.component.html",
  styleUrls: ["./search-results.component.scss"]
})
export class SearchResultsComponent implements OnInit {
  searchValue: string;
  orientation: string = "landscape";
  photos: any;
  resultCount: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.searchValue = params.get("value");
      console.log(this.searchValue);
      if (this.searchValue.length < 3) {
        alert("Foutieve invoer");
      } else {
        this.searchPhotos();
      }
    });
  }

  handleSelectPhoto(photo: any) {
    if (photo.id) {
      this.photoService.setSelectedPhoto(photo);
      this.router.navigate(["photo", photo.id]);
    }
  }

  searchPhotos() {
    this.photoService
      .searchPhotos(this.searchValue, this.orientation)
      .subscribe(photos => {
        this.photos = photos;
        this.resultCount = this.photos.total;
        // console.log(photos);
      });
  }

  setOrientation(orientation: string) {
    this.orientation = orientation;
    this.photos = null;
    this.searchPhotos();
  }
}
