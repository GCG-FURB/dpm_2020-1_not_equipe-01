import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { AreaService } from '../area.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-edit',
  templateUrl: './area-edit.html',
  styleUrls: ['./area-edit.scss'],
})
export class AreaEditPage implements OnInit {
  public folder: string;

  public area = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  save() {
    this.areaService.add(this.area).subscribe(async result => {
      const toast = await this.toastController.create({
        message: 'Saved',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/Area']);
    });
  }

}
