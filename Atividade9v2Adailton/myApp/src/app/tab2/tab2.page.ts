import { Component } from '@angular/core';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  subscription: any;
  acceleration: DeviceMotionAccelerationData;
  iniciaLeitura: Boolean = false;

  constructor(private deviceMotion: DeviceMotion) { }


  inica() {
    this.subscription = this.deviceMotion.watchAcceleration().subscribe((acceleration: DeviceMotionAccelerationData) => {
      this.acceleration = acceleration;
      this.iniciaLeitura = true;
    });
  
    // Stop watch
    
  }

  finaliza() {
    this.subscription.unsubscribe();
  }

}
