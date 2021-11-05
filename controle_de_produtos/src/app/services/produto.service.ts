import { Injectable } from '@angular/core';

export interface Produtos {
  nome: string;

}


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  public produtos: Produtos[] = [];

  constructor() { }
  public novoProduto = null;
  public todosProdutos() {
    return this.produtos;
  }



}