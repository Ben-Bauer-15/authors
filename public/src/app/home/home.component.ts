import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  allAuthors;
  constructor(private _httpService : HttpService) { }

  ngOnInit() {
    this.allAuthors = []
    this.getAllAuthors()
  }

  getAllAuthors(){
    var self = this
    let allAuthors = this._httpService.getAllAuthors()
    allAuthors.subscribe(data => {
      self.allAuthors = data.data
    })
  }

  delete(id){
    var deletedAuthor = this._httpService.deleteAuthor(id)
    deletedAuthor.subscribe(data => {
    })
    for (var i = 0; i < this.allAuthors.length; i++){
      if (this.allAuthors[i]._id == id){
        this.allAuthors.splice(i, 1)
      }
    }
    
  }

}
