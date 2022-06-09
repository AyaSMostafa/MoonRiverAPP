import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIURL = "http://localhost:5141/api";
readonly PhotoURL = "http://localhost:5141/Photos";
  constructor(private http:HttpClient) { }

  getCatList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/category');
  } 
  addCategory(val:any){
    return this.http.post(this.APIURL+'/Category',val);
  }
  updateCategory(val:any){
    return this.http.put(this.APIURL+'/Category',val);
  }
  deleteCategory(val:any){
    return this.http.delete(this.APIURL+'/Category/'+val);
  }

  getMovieList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/Movie');
  } 
  
  addMovie(val:any){
    return this.http.post(this.APIURL+'/Movie',val);
  }
  updateMovie(val:any){
    return this.http.put(this.APIURL+'/Movie',val);
  }
  deleteMovie(val:any){
    return this.http.delete(this.APIURL+'/Movie/'+val);
  }
  UploadPhoto(val:any){
    return this.http.post(this.APIURL+'/Movie/SaveFile',val);
  }
  GetAllCategoriesNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIURL+'/Movie/GetAllCategoriesNames');
  }

}
