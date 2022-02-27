import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnalyzeService {
  analyzedData = new BehaviorSubject({});

  constructor(private http: HttpClient) {}

  analyzeData(data: any) {
    return this.http.post(
      'https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92',
      { ingr: data }
    );
  }
}
