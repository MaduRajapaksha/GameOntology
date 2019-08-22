import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, TruncatePipe} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule,MatOptionModule, MatSelectModule, MatIconModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {freeApiService} from './services/freeapi.service'

@NgModule({
   declarations: [
      AppComponent,
      TruncatePipe
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatInputModule,MatOptionModule, MatSelectModule, MatIconModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
   ],
   providers: [freeApiService],
   bootstrap: [AppComponent]
})
export class AppModule { }
