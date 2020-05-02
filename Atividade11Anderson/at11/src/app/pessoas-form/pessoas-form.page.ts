import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas/pessoas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.page.html',
  styleUrls: ['./pessoas-form.page.scss'],
})
export class PessoasFormPage implements OnInit {

  pessoa: any;
  constructor(
    private pessoaService: PessoasService,
    private router: Router
  ) {
    this.pessoa = {};
  }

  ngOnInit() {
  }

  save() {
    this.pessoaService.add(this.pessoa).subscribe(result => {
      this.router.navigate(['/pessoas']);
    });
  }

}
