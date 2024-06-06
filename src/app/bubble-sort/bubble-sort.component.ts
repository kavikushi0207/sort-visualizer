import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bubble-sort',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent {
  array: number[] = [];
  arraySize: number = 10;
  sorting: boolean = false;
  comparingIndices: number[] = [];

  constructor() {
    this.generateArray(this.arraySize);
  }

  generateArray(size: number): void {
    this.array = [];
    for (let i = 0; i < size; i++) {
      const randomNum = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
      this.array.push(randomNum);
    }
  }

  async sortArray(): Promise<void> {
    this.sorting = true;
    let n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        this.comparingIndices = [j, j + 1];
        if (this.array[j] > this.array[j + 1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
        }
        await this.sleep(1000); // Pause for visualization
        this.comparingIndices = [];
      }
    }
    this.sorting = false;
  }

  sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  isComparing(index: number): boolean {
    return this.comparingIndices.includes(index);
  }
}
