import { Component } from '@angular/core';

type Produto = {
  nome: string;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  public produtos: Produto[] = [{ nome: '' }];
  public novoProduto = null;
  public addProduto() {

   
   this.produtos.push({
      nome: this.novoProduto,
    }); this.novoProduto = '';
  }

  public removeProduto(toRemove: number) {
    this.produtos.splice(toRemove, 1)
  }

  public todosProdutos() {
    return this.produtos;
  }
constructor(){

}

}