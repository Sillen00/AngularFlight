import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  cityList: { cityId: number; cityName: string }[] = [];
  newCityName: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllCity();
  }

  getAllCity() {
    this.http
      .get('https://freeapi.gerasim.in/api/FlightBooking/GetAllCity')
      .subscribe(
        (res: any) => {
          console.log('API Response:', res); // Log the response to debug
          // Assuming res.data contains the array of cities
          if (Array.isArray(res.data)) {
            this.cityList = res.data;
          } else {
            console.error('Expected an array but got:', res.data);
          }
        },
        (error) => {
          console.error('Error fetching cities:', error);
        }
      );
  }

  addNewCity() {
    console.log('Trying to add cityyy...:', this.newCityName);
    if (this.newCityName.trim()) {
      console.log('2 - Trying to add cityyy...', this.newCityName);
      const newCity = {
        cityId: this.generateNewCityId(),
        cityName: this.newCityName,
      };
      this.cityList.push(newCity);
      this.newCityName = ''; // Clear the input field
    }
  }

  generateNewCityId(): number {
    return this.cityList.length
      ? Math.max(...this.cityList.map((city) => city.cityId)) + 1
      : 101;
  }
}
