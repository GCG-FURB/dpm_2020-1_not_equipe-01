import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from './config.service';
import { DepositoService } from '../deposito/deposito.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  public servidor: string;  

  constructor(    
    public configService: ConfigService    
    ) { }

  ngOnInit() {
    
  }

  save() {
    this.configService.setURL(this.servidor);
  }

}
