import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../shared/services/photo.service";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { PrintService } from "../shared/services/print.service";

@Component({
  selector: "app-photo-details",
  templateUrl: "./photo-details.component.html",
  styleUrls: ["./photo-details.component.scss"]
})
export class PhotoDetailsComponent implements OnInit {
  photoId: string;
  products: { id; name; url }[];
  selectedPhoto: any;
  selectedProduct: { id; name; url }[] = null;

  constructor(private photoService: PhotoService, private route: ActivatedRoute, private printService: PrintService) {
    this.route.paramMap.subscribe(params => {
      this.photoId = params.get("id");
    });
  }

  ngOnInit() {
    this.getSelectedPhoto();
    this.getProducts();
  }

  getSelectedPhoto(){
    this.selectedPhoto = this.photoService.getSelectedPhoto();
    if (!this.selectedPhoto) {
      this.photoService.getPhotoFromId(this.photoId).subscribe(photo => {
        this.selectedPhoto = photo;
      });
      this.photoService.setSelectedPhoto(this.selectedPhoto);
    }
  }

  getProducts(){
    this.products = this.printService.getCanvasProducts();
  }

  selectProduct(product: any){
    this.selectedProduct = product;
  }
}
