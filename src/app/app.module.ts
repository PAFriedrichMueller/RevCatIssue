import {EnvironmentInjector, inject, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LOG_LEVEL, Purchases} from "@revenuecat/purchases-capacitor";
import {Capacitor} from "@capacitor/core";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    platform: Platform,
  ) {
    platform.ready().then(async () => {
      await Purchases.setLogLevel({level: LOG_LEVEL.DEBUG}); // Enable to get debug logs
      if (Capacitor.getPlatform() === "android") {
        console.log("Setting up Revenucat for Android");
        Purchases.configure({
          apiKey: "goog_cSZnBQBBWSZSLWpvMpxKgehFcUh",//FAKE Token but does not matter
          appUserID: null,
        });
      }
      if (Capacitor.getPlatform() === "web") {
        console.log("Currently running on the web platform. No license check needed.");
      }
    });
  }

}

