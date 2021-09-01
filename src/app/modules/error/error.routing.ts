import { Routes } from "@angular/router";
import { ErrorComponent } from "./error.component";

export const errorRouting: Routes = [
  {
    path: "**",
    pathMatch: "/404"
  },
  {
    path: "404",
    component: ErrorComponent,
    data: {
      pageTitle: "404",
      errorMessage: "Not Found"
    }
  }
]
