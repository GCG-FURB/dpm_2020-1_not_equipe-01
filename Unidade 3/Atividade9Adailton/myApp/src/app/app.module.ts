import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { Camera } from '@ionic-native/camera/ngx'
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { VideoCapturePlus } from '@ionic-native/video-capture-plus/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,        
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    Base64ToGallery,
    Media,
    VideoCapturePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
