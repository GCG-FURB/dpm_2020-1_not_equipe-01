import { Component, OnInit } from '@angular/core';
import { ProdutoService } from './produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {

  produtos = [];
  constructor(
    private productService: ProdutoService,
    private router: Router
    ) { }

  ngOnInit() {
    this.productService.get().subscribe((request : any) => {
      this.produtos = request;
    });
  }

  del(produto: any) {
    this.productService.del(produto).subscribe((request : any) => {
      this.ngOnInit();
    });
  }

}
