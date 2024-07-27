import { Routes } from '@angular/router';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { BookFlightComponent } from './pages/website/book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { SearchComponent } from './pages/website/search/search.component';
// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch:'full' },
  { path: 'search', component: SearchComponent, title: 'Search Flight' },
  { path: 'book-flight', component: BookFlightComponent, title:'Book New Ticket' },
  { path: 'bookings', component: MyBookingsComponent, title:'My-Bookings' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'airport', component: AirportComponent },
      { path: 'city', component: CityComponent },
      { path: 'all-bookings', component: BookingsComponent },
      { path: 'new-flight', component: NewFlightComponent },
    ]
  },
//   { path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];