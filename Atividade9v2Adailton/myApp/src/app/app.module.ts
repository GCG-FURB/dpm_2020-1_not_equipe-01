import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Platform } from '@ionic/angular';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Camera } from '@ionic-native/camera/ngx'
import { Media } from '@ionic-native/media/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { DeviceMotion } from '@ionic-native/device-motion/ngx';
import { File } from '@ionic-native/file/ngx';
import { IonicStorageModule, Storage } from '@ionic/storage';
// import { VideoCapturePlus } from '@ionic-native/video-capture-plus/ngx';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,    
    Media,
    MediaCapture,
    DeviceMotion,
    Platform,
    File,
    NativeStorage,
    VideoPlayer,
    NativeAudio    
    // VideoCapturePlus
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
