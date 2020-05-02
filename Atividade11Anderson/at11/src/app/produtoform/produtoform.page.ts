import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtoform',
  templateUrl: './produtoform.page.html',
  styleUrls: ['./produtoform.page.scss'],
})
export class ProdutoformPage implements OnInit {
  produto : any;

  constructor(
    private productService: ProdutoService,
    private router: Router
    ) {
    this.produto = {};
  }

  ngOnInit() {
  }

  save() {
    this.productService.add(this.produto).subscribe(result => {
      this.router.navigate(['/produto']);
    });
  }

}
