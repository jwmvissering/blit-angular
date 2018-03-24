import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable()
export class AppService {
  unsplashApiKey: string;
  unsplashApiKeyDaniel: string = "a06c56bc401140803fb936e6b1efb25f274b8f6e04ecf80b4c4d54483e758f2d";
  unsplashUrl: string = "https://api.unsplash.com/search/photos";

  constructor(private http: HttpClient) {}

  searchPhotos(
    value: string,
    orientation: string = "landscape",
    per_page: number = 30,
    page: number = 1
  ) {
    const url: string = this.unsplashUrl;
    const params = new HttpParams()
      .set("query", value)
      .set("orientation", orientation)
      .set("per_page", String(per_page))
      .set("page", String(page))
      .set("client_id", this.unsplashApiKeyDaniel);

    return this.http.get(this.unsplashUrl, {params});
  }
}
