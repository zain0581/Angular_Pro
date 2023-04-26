
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailComponent } from './coin-detail/coin-detail.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './UserComponent/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgToastModule } from 'ng-angular-popup';
import { NotFoundComponent } from './not-found/not-found.component';
import { CryptocurrencyComponent } from './cryptocurrency/cryptocurrency.component';
import { AddCoinComponent } from './add-coin/add-coin.component';
// import { SidenavComponent } from './sidenav/sidenav.component';





@NgModule({
  declarations: [
    AppComponent,
    CoinListComponent,
    CoinDetailComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
  NotFoundComponent,
  CryptocurrencyComponent,
  AddCoinComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    NgToastModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
