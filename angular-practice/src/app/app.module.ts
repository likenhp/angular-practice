import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module'
import { TestService} from './test.service'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  // declarations contain all the components
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent
  ],
  // imports are dependencies on other modules
  // able to import other modules
  // angular importing specific syntax
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ViewModule, // import the module
    HttpClientModule
  ],
  // everything else exists in the providers
  // anyone can access this part of the providers
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
// NgModule means its an angular module

export class AppModule { }
