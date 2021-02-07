import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NnElementComponent } from './nn-element/nn-element.component';
import {NnTableComponent} from './nn-table/nn-table.component';
import { NnValuesComponent } from './nn-values/nn-values.component';

@NgModule({
  declarations: [
    AppComponent,
    NnElementComponent,
    NnTableComponent,
    NnValuesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
