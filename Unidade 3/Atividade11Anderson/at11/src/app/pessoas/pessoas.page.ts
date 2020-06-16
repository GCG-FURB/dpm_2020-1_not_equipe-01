import { Component, OnInit } from '@angular/core';
import { PessoasService } from './pessoas.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.page.html',
  styleUrls: ['./pessoas.page.scss'],
})
export class PessoasPage implements OnInit {

  pessoas = [];
  constructor(
    private pessoasService: PessoasService
    ) { }

  ngOnInit() {
    this.pessoasService.get().subscribe((request : any) => {
      this.pessoas = request;
    });
  }

  del(produto: any) {
    this.pessoasService.del(produto).subscribe((request : any) => {
      this.ngOnInit();
    });
  }

}
