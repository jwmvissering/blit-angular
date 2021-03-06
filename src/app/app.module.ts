import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { HeaderComponent } from "./header/header.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { PhotoService } from "./shared/services/photo.service";
import { PrintService } from "./shared/services/print.service";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
  providers: [PhotoService, PrintService],
  bootstrap: [AppComponent]
})
export class AppModule {}
