import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.html',
  styleUrls: ['./item-edit.scss'],
})
export class ItemEditPage implements OnInit {
  public folder: string;

  public item = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  save() {
    this.itemService.add(this.item).subscribe(async result => {
      const toast = await this.toastController.create({
        message: 'Saved',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/Item']);
    });
  }

}
