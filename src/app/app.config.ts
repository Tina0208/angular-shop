import { ENVIRONMENT_INITIALIZER, inject } from "@angular/core";
import { ApplicationConfig } from "@angular/platform-browser";
import { IconLoaderService } from "./core/service/icon-loader.service";

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useValue: () => inject(IconLoaderService).init()
    }
  ]
}
