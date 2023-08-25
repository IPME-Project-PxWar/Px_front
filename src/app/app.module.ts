import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PixelFillDirective } from './pixel/pixel-fill.directive';
import { GridComponent } from './grid/gird.component';
import { ColorScheme } from './color-scheme/color-scheme.component';


@NgModule({
  declarations: [
    AppComponent,
    PixelFillDirective,
    GridComponent,
    ColorScheme
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
