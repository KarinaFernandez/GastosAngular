import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [			
    AppComponent,
      TopBarComponent,
      RoutingComponents
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
