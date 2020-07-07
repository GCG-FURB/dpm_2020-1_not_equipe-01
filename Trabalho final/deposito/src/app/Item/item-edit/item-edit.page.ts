import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { present } from '@ionic/core/dist/types/utils/overlays';
import { ItemService } from '../item.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AreaService } from '../../area/area.service';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.html',
  styleUrls: ['./item-edit.scss'],
})
export class ItemEditPage implements OnInit {
  public folder: string;

  public item = {
    nome: '',
    descricao: '',
    codigodebarras: '',
    deposito: '',
    categoria: '',
    quantidade: '',
    obs: '',
    cadastro: ''
  };
  public areaSelecionado: any;
  public listaArea: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private itemService: ItemService,
    public toastController: ToastController,
    private router: Router,
    private areaService: AreaService,
    private qrScanner: QRScanner,
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.areaService.get().subscribe((request: any) => {
      this.listaArea = request;
    });
    if (this.folder != '0') {
      this.itemService.getById(this.folder).subscribe((request: any) => {
        this.item = request;
        debugger;
        for (let i = 0; i < this.listaArea.length; i++) {
          //esta como deposito mais deveria ser area, vou deixar assim....
          if (this.listaArea[i].id == this.item.deposito) {
            this.areaSelecionado = this.listaArea[i];
          }
        }
      });
    }
  }

  lerQrCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (barcodeData.text) {
          let responsta = barcodeData.text.split(';');
          this.item.nome = responsta[0];
          this.item.descricao = responsta[1];
          this.item.codigodebarras = responsta[2];
          this.item.categoria = responsta[3];
          this.item.quantidade = responsta[4];
          this.item.obs = responsta[5];
          this.item.cadastro = responsta[6];
        }
      })
      .catch(err => {
        alert("Desculpe, não foi possivel realizar a operação. para mais informações entre em contado com o nosso canal 0800 8004. Agradecemos sua compreenção.");
      });
  }

  lerCodigoBarra() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        if (barcodeData.text) {
          this.item.codigodebarras = barcodeData.text;
        }
      })
      .catch(err => {
        alert("Desculpe, não foi possivel realizar a operação. para mais informações entre em contado com o nosso canal 0800 8004. Agradecemos sua compreenção.");
      });
  }

  save() {
    this.item.deposito = this.areaSelecionado.id;
    if (this.folder != '0') {
      this.areaService.update(this.folder, this.item).subscribe(async result => {
        const toast = await this.toastController.create({
          message: 'Saved',
          duration: 2000
        });
        toast.present();
        this.router.navigate(['/Item']);
      });
    } else {
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

}
