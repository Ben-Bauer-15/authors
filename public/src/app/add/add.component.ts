import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from '@angular/router'
import { NgFlashMessageService } from "ng-flash-messages";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  authorName;

  constructor(private _httpService : HttpService, private _router : Router, private _ngFlash : NgFlashMessageService) { }

  ngOnInit() {
    this.authorName = ""
  }

  onSubmit(){
    let newAuthor = this._httpService.addAuthor({name : this.authorName})
    newAuthor.subscribe(data => {
      if (data.message == "Failure"){
        this._ngFlash.showFlashMessage({
          messages : [data.data.name]
        })
        console.log(data.data)
      }
      else {
        this._router.navigate(['/home'])
      }
    })
  }

}
