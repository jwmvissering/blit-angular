import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HeaderComponent } from "./header/header.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { AppService } from "./app.service";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    SearchResultsComponent,
    PhotoDetailsComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
