import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../classes/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  trainings: string[] = [];
  BASE_API_URL = 'http://localhost:9090/';

  constructor(
    private http: HttpClient,
  ) { }

  getTrainings(): string[] {
    this.trainings[0] = `Angular 14 Training`;
    this.trainings[1] = `Spring Boot Training`;
    this.trainings[2] = `Flutter Training`;
    return this.trainings;
  }

  getTrainingsFromApi(): Observable<HttpResponse<Training[]>> {
    return this.http.get<Training[]> (`${this.BASE_API_URL}api/trainings`, { observe: 'response'});
  }
}
