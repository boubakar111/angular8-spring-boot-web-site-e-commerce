import { Client } from './client.model';
import { ItemProduct } from './item-product.model';

export class Order {
    id : number ;
    client : Client = {name:"",address:"",phoneNumber:"",email:"",username:""};
    products : Array<ItemProduct> = [];
    totalAmount : number;
    date : Date;
}