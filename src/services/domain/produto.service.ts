import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { CategoriaDTO } from "../../models/categoria.dto";
import { API_CONFIG } from "../../config/api-config";
import { ProdutoDTO } from "../../models/produto.dto";



@Injectable()
export class ProdutoService{

  constructor(public http: HttpClient){}

  findByCategoria(categoriaId: string, page: number = 0, linesPerPage:number = 24){
    return this.http.get(`${API_CONFIG.baseUrl}/produtos/?categorias=${categoriaId}&page=${page}&linesPerPage=${linesPerPage}`);
  }

  findById(produtoId: string){
    return this.http.get<ProdutoDTO>(`${API_CONFIG.baseUrl}/produtos/${produtoId}`);
  }

  getSmallImageFromBucket(id: string): Observable<any>{
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}-small.jpg`;

    return this.http.get(url, {responseType: 'blob'});
  }

  getImageFromBucket(id: string): Observable<any>{
    let url = `${API_CONFIG.bucketBaseUrl}/prod${id}.jpg`;

    return this.http.get(url, {responseType: 'blob'});
  }



}
