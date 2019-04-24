import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://api.unsplash.com/photos/random'
  private apiKey  = '17bcb5e727efd1f5e61a267ca63c42128714816d8611b5eeb7da89540857dfe3';

  constructor(private http: HttpClient) { }

  public getRandomVehicleImage(){
    let query = "?query=car&orientation=landscape&client_id=" + this.apiKey;
    return this.http.get(this.baseUrl + query);
  }
}
