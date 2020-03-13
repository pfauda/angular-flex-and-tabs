import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TopComponent } from './components/top/top.component';
import { LeftComponent } from './components/left/left.component';
import { RightComponent } from './components/right/right.component';
import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TopComponent, LeftComponent, RightComponent, BottomComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
