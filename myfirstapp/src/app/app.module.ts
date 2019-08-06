import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CardComponent
  ],
  imports: [FormsModule, MatToolbarModule, MatCardModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
