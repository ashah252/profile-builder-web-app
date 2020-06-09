import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './components/app-root/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, LoginComponent, HomeComponent, RegisterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
