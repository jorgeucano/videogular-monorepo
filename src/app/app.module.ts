import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// videogular
import { CoreModule } from './modules/core/core.module';
import { ControlsModule } from './modules/controls/controls.module';
import { BufferingModule } from './modules/buffering/buffering.module';
import { ImaAdsModule } from './modules/ima-ads/ima-ads.module';
import { OverlayPlayModule } from './modules/overlay-play/overlay-play.module';
import { StreamingModule } from './modules/streaming/streaming.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ControlsModule,
    BufferingModule,
    ImaAdsModule,
    OverlayPlayModule,
    StreamingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
