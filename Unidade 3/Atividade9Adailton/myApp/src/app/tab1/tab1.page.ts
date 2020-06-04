import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  private _platform: Platform;
  private _file: MediaObject;
  private _media: Media;    
  photo: any;
  ehGravando: Boolean = false;

  constructor(private camera: Camera, platform: Platform, private media: Media, private videoCapturePlus: VideoCapturePlus) { }
  // constructor(){}

  takePicture() {
    this.photo = '';        
 
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: false,
      targetWidth: 100,
      targetHeight: 100,
      saveToPhotoAlbum: true
    }    
 
    this.camera.getPicture(options)
      .then((imageData) => {
        let base64image = 'data:image/jpeg;base64,' + imageData;
        this.photo = base64image;    
      }, (error) => {                
        this.photo = error;
      })
      .catch((error) => {            
        this.photo = error;
      })
  }

  private startAudio(): void {
    let _pathFile = this.getPathFileRecordAudio();
    this._file = this.media.create(_pathFile);
    this._file.play();
  }

  public pauseAudio(): void {
      this.ehGravando = false;
      this._file.pause();
  }

  public startPlay(): void {
    this.ehGravando = true;
    this._file.play();
  }

  private getPathFileRecordAudio(): string {
    let path: string = (this._platform.is('ios') ? '../Library/NoCloud/': '../Documents/');
    return path + 'testeAudio' + '-' + '.mp3';
  }

  public gravarVideo() {
    const options: VideoCapturePlusOptions = {
      limit: 1,
      highquality: true,
      portraitOverlay: 'assets/img/camera/overlay/portrait.png',
      landscapeOverlay: 'assets/img/camera/overlay/landscape.png'
   }
   
   this.videoCapturePlus.captureVideo(options).then((mediafile: MediaFile[]) => console.log(mediafile), error => console.log('Something went wrong'));
  }

}
