import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HotelsService } from './services/hotels.service'
import { UsersService } from './services/users.service'
import { BetsService } from './services/bets.service'
import { ReservationsService } from './services/reservations.service'
import { DenegatedService } from './services/denegated.service'

import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HotelProfileComponent } from './components/hotel-profile/hotel-profile.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { BetsComponent } from './components/bets/bets.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LeadsComponent } from './components/leads/leads.component';
import { HomeComponent } from './components/home/home.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { LoginComponent } from './components/login/login.component';
import { ClientsComponent } from './components/clients/clients.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'leads', component: LeadsComponent },
  { path: 'bets', component: BetsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'hotel', component: HotelProfileComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'payments', component: PaymentsComponent },
  { path: 'opportunities/:id', component: OpportunitiesComponent },
  { path: 'clients', component: ClientsComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
]


@NgModule({
  declarations: [
    AppComponent,
    HotelProfileComponent,
    SidebarComponent,
    OpportunitiesComponent,
    BetsComponent,
    NavbarComponent,
    LeadsComponent,
    HomeComponent,
    CalendarComponent,
    RegisterComponent,
    PaymentsComponent,
    LoginComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [
    HotelsService,
    UsersService,
    BetsService,
    ReservationsService,
    DenegatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


//export const app_routing = RouterModule.forRoot(appRoutes)