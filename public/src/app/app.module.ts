import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { NgFlashMessagesModule } from "ng-flash-messages";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgFlashMessagesModule.forRoot()
    
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }