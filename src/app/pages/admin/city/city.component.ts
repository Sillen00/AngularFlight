import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})

export class CityComponent implements OnInit {

  cityList: any [] = [];
  constructor( private http: HttpClient ) {}

  ngOnInit(): void {
    this.getAllCity()
  }

  getAllCity() {
    this.http.get("https://freeapi.gerasim.in/api/FlightBooking/GetAllCity").subscribe((res:any) => {
      this.cityList = res.data;
    })
  }

}
