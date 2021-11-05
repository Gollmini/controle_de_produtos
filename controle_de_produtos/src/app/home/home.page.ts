import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from  '@ionic/storage-angular'
import { ProdutoService } from 'src/app/services/produto.service';
import { DatePipe} from '@angular/common';
import { Key } from 'selenium-webdriver';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage {
  
 
  constructor(private produtoService: ProdutoService, public storage : Storage ) {
    this.init(); 
  }
  init() {
    this.storage.create();
  }
  public salvar(key, nomeProduto: string){
   
    this.storage.set(key, nomeProduto);

  }

}