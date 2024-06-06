import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BubbleSortService {
  private apiUrl = 'http://localhost:5053/api/array/generate'; // Adjust the URL to your backend's URL

  constructor(private http: HttpClient) {}

  generateArray(size: number): Observable<number[]> {
    const url = `${this.apiUrl}?size=${size}`;// Include size parameter in the URL
    return this.http.get<number[]>(url).pipe(
      catchError(error => {
        // Handle HTTP errors
        console.error('Error fetching array:', error);
        return throwError('Error fetching array. Please try again later.');
      })
    );
  }
}

