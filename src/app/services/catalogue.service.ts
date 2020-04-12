import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host: string = "https://localhost:8015";

  constructor(private http: HttpClient) { }


 
  
  public getResource(url) {
    return this.http.get(this.host+url);
  }

    
  public getProduct(url):Observable<Product>{
    return this.http.get<Product>(url);

  }
  uploadPhotoProduct(file: File, idProduct): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.host + '/uploadPhoto/'+ idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

   public patchResource(url, data) {
     return this.http.patch(url, data);
    }


}
