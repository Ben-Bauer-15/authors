import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // allAuthors;
  title = 'public';
  constructor(private _router : Router, private _httpService : HttpService){}

  ngOnInit(){
    this._router.navigate(['/home'])
    // this.getAllAuthors()
    // this.allAuthors = []
  }

  // getAllAuthors(){
  //   var self = this
  //   let allAuthors = this._httpService.getAllAuthors()
  //   allAuthors.subscribe(data => {
  //     self.allAuthors = data.data
  //   })
  // }
}
