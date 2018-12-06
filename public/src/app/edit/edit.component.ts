import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router'
import { HttpService } from "../http.service";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  currentAuthor;
  constructor(private _router : Router, private _route : ActivatedRoute, private _httpService : HttpService, private _ngFlash : NgFlashMessageService) { }

  ngOnInit() {
    var self = this
    this.currentAuthor = {}
    this._route.params.subscribe((params : Params) => {
      let author = this._httpService.getAuthorById(params['id'])
      author.subscribe(data => {
        self.currentAuthor = data[data][0]
      })
    })
  }

  onSubmit(){
    let updatedAuthor = this._httpService.updateAuthor(this.currentAuthor)
    updatedAuthor.subscribe(data => {
      if (data[message] == "Failure"){
        this._ngFlash.showFlashMessage({
          messages : [data[data][name]]
        })
      }
      else {
        this.currentAuthor = {}
        this._router.navigate(['/home'])
      }
    })
  }

}
