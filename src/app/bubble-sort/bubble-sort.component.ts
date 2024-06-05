import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-bubble-sort',
  standalone: true,
  imports: [],
  templateUrl: './bubble-sort.component.html',
  styleUrl: './bubble-sort.component.css'
})
export class BubbleSortComponent implements OnInit {
  array: number[] = [];
  arraySize: number = 50;
  sorting: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.generateArray();
  }

  generateArray(): void {
    this.http.get<number[]>(`/api/array/generate?size=${this.arraySize}`)
      .subscribe(data => {
        this.array = data;
      });
  }

  sortArray(): void {
    this.sorting = true;
    let n = this.array.length;
    for (let i = 0; i < n-1; i++) {
      for (let j = 0; j < n-i-1; j++) {
        if (this.array[j] > this.array[j+1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j+1];
          this.array[j+1] = temp;
        }
      }
    }
    this.sorting = false;
  }
}