import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http : HttpClient) { }

  getAllMovies(){
    return this._http.get('/allMovies')
  }

  getMovieById(id){
    return this._http.get('/movie/' + id)
  }

  addReview(obj){
    return this._http.post('/newReview', obj)
  }


  deleteMovie(id){
    return this._http.get('/delete/movie/' + id)
  }

  deleteReview(review_id, movie_id){
    return this._http.get('/delete/review/' + review_id + '/' + movie_id)
  }

  addMovie(obj){
    return this._http.post('/newMovie', obj)
  }
}
