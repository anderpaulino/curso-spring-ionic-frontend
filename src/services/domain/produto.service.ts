import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";
import { API_CONFIG } from "../../config/api-config";



@Injectable()
export class ProdutoService{

  constructor(public http: HttpClient){}

  findByCategoria(categoriaId: string){
    return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}`);
  }

  getSmallImageFromBucket(id: string): Observable<any>{
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;

    return this.http.get(url, {responseType: 'blob'});
  }

}
