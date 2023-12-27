import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private inputValueSubject = new BehaviorSubject<string>('');
  inputValue$ = this.inputValueSubject.asObservable();

  setInputValue(value: string) {
    this.inputValueSubject.next(value);
  }

  private apiUrl = 'https://mknxapi.com/api/index.php/menu/categories_customer';



  constructor(private http: HttpClient) {}

  searchData(query: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(this.apiUrl, query, { headers });
  }
  
}
