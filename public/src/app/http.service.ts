import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  getAllAuthors(){
    return this._http.get('/authors')
  }

  getAuthorById(id){
    return this._http.get('/getAuthor/' + id)
  }

  updateAuthor(obj){
    return this._http.post('/update', obj)
  }

  deleteAuthor(id){
    return this._http.get('/delete/' + id)
  }

  addAuthor(obj){
    return this._http.post('/new', obj)
  }
}
