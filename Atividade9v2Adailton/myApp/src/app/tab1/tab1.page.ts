import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
// import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus/ngx';

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
  respostaAudio: any;

  constructor(private camera: Camera, platform: Platform, private media: Media, private mediaCapture: MediaCapture) {     
    this._platform = platform;
  }
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

  
  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      console.log("Sucesso...........");
    }, (err: CaptureError) => console.error(err));
  }

}
