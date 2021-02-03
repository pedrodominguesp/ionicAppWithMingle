import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MingleService } from '@totvs/mingle';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInitService } from './app-init.service';


export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => { 
    return appInitService.applyInitConfigMingle();
  }
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    PoModule,
    PoPageLoginModule],
  providers: [
    MingleService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
