import { Component, OnInit } from "@angular/core";
import { AppService } from "../app.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.scss"]
})
export class PhotoDetailsComponent implements OnInit {
  photoId: string;
  selectedPhoto: any;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get("id");
    });
  }

  ngOnInit() {
    this.selectedPhoto = this.appService.getSelectedPhoto();
    if (!this.selectedPhoto) {
      this.appService.getPhotoFromId(this.photoId).subscribe(photo => {
        this.selectedPhoto = photo;
      });
      this.appService.setSelectedPhoto(this.selectedPhoto);
    }
  }
}
