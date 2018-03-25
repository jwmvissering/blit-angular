import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class PhotoService {
  private selectedPhoto: any;

  private unsplashApiKeyJamon: string;
  private unsplashApiKeyDaniel: string = "a06c56bc401140803fb936e6b1efb25f274b8f6e04ecf80b4c4d54483e758f2d";
  private unsplashUrl: string = "https://api.unsplash.com";

  constructor(private http: HttpClient) {}

  searchPhotos(
    value: string,
    orientation: string = "landscape",
    per_page: number = 30,
    page: number = 1
  ) {
    const params = new HttpParams()
      .set("query", value)
      .set("orientation", orientation)
      .set("per_page", String(per_page))
      .set("page", String(page))
      .set("client_id", this.unsplashApiKeyDaniel);

    return this.http.get(this.unsplashUrl + '/search/photos', { params });
  }

  getPhotoFromId(id: string) {
    const params = new HttpParams()
      .set("client_id", this.unsplashApiKeyDaniel);

    return this.http.get(this.unsplashUrl + "/photos/" + id, { params });
  }

  setSelectedPhoto(photo: any) {
    this.selectedPhoto = photo;
  }

  getSelectedPhoto() {
    if (this.selectedPhoto) {
      return this.selectedPhoto;
    }
    return null;
  }
}
