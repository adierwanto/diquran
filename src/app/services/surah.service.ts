import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurahService {

  constructor(private http: HttpClient) { }

  getData() {
    let url="https://api.quran.sutanlab.id/surah";
    return this.http.get(url);
  }
}
