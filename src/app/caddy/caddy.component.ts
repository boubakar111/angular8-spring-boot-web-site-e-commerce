import { Component, OnInit } from '@angular/core';
import { ItemProduct } from '../model/item-product.model';
import { CatalogueService } from '../services/catalogue.service';
import { Router } from '@angular/router';
import { CaddyService } from '../services/caddy.service';
import { AuthentificationService } from '../services/authentification.service';
import { Caddy } from '../model/caddy.model';

@Component({
  selector: 'app-caddy',
  templateUrl: './caddy.component.html',
  styleUrls: ['./caddy.component.css']
})
export class CaddyComponent implements OnInit {

  public caddy:Caddy;

  
  constructor(
    public  catService:CatalogueService, 
    public router:Router,
    public caddyService:CaddyService,
    public authService:AuthentificationService) { }

  ngOnInit(): void {
  }


  onRemoveProductFromCaddy(p: ItemProduct) {
    this.caddyService.removeProduct(p.id);
  }

  getTotal() {
      return this.caddyService.getTotalCurrentCaddy();
  }

  onNewOrder() {
    this.router.navigateByUrl("/client");
  }

  onAddCaddy() {

    let size=this.caddyService.listCaddies.length;
    let index:number=this.caddyService.listCaddies[size-1].num;
    this.caddyService.addNewCaddy({num:index+1,name:"Caddy"+(index+1)});
  }

  onSelectCaddy(c: { num: number; name: string }) {
    this.caddyService.currentCaddyName=c.name;
    this.caddy=this.caddyService.getCaddy();
  }
}
