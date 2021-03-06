import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyCAhr8F9u8ihlShdn9Hz03Jlqj9Ly2kkLs'
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
