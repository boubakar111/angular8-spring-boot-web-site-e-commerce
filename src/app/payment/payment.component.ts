import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { AuthentificationService } from '../services/authentification.service';
import { CaddyService } from '../services/caddy.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentAmount: number;
  currentOrder: Order;

  public mode: number = 0;
  panelStyle: string = "panel-default";

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public orderService: OrderService,
    public authService: AuthentificationService,
    public caddyService: CaddyService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.orderID
    this.orderService.getOrder(id).subscribe(data => {
      this.currentOrder = data;
    }, err => {
      console.log(err);
    })
  }

  onParOrder(data) {
    console.log(data);
  }

  onOrder() {
    this.orderService.submitOrder().subscribe(data=>{
      this.orderService.order.id=data['id'];
      this.orderService.order.date=data['date'];
      this.panelStyle="panel-success";
    },err=>{
      console.log(err);
    });
  }
  onPayOrder() {
    this.router.navigateByUrl("/payment/"+this.orderService.order.id);
  }

}
