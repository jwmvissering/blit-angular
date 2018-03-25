import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomepageComponent } from "./homepage/homepage.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { PhotoDetailsComponent } from "./photo-details/photo-details.component";

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "search/:value", component: SearchResultsComponent },
  { path: "photo/:id", component: PhotoDetailsComponent },
  { path: "**", component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
