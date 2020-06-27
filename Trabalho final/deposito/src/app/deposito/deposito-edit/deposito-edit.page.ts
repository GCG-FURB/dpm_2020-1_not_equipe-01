import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { DepositoService } from '../deposito.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposito-edit',
  templateUrl: './deposito-edit.html',
  styleUrls: ['./deposito-edit.scss'],
})
export class DepositoEditPage implements OnInit {
  public folder: string;

  public deposito = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private depositoService: DepositoService,
    public toastController: ToastController,
    private router: Router
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  save() {
    this.depositoService.add(this.deposito).subscribe(async result => {
      const toast = await this.toastController.create({
        message: 'Saved',
        duration: 2000
      });
      toast.present();
      this.router.navigate(['/Deposito']);
    });
  }

}
