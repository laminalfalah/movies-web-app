import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {environment} from "@/environment";
import {errorRouting} from "@/modules/error/error.routing";

const config: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: "top",
  onSameUrlNavigation: "reload",
  anchorScrolling: "enabled",
  enableTracing: !environment.production,
};

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('@/modules/movie/movie.module').then((c) => c.MovieModule)
  },
  {
    path: "*",
    redirectTo: "",
    pathMatch: "full"
  },
  //...errorRouting
];

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
