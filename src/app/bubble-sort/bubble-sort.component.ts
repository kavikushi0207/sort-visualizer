import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { bubbleSortC,bubbleSortCSharp,bubbleSortJava,bubbleSortCPP,bubbleSortJavaScript,bubbleSortPython,bubbleSortTypeScript } from './code-snippets/bubble-sort';
@Component({
  selector: 'app-bubble-sort',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent {
  array:  number[] = [];
  arraySize: number = 20;
  sorting: boolean = false;
  time: number = 25;
  comparingIndices: number[] = [];
  activeTab: string = 'tab1';
  bubbleSortJavaScript = bubbleSortJavaScript;
  bubbleSortPython = bubbleSortPython;
  bubbleSortJava = bubbleSortJava;
  bubbleSortC = bubbleSortC;
  bubbleSortCSharp = bubbleSortCSharp;
  bubbleSortTypeScript = bubbleSortTypeScript;
  bubbleSortCPP = bubbleSortCPP;
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

  async sortArray(time: number): Promise<void> {
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
        await this.sleep(time); // Pause for visualization
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
  selectTab(tab: string): void {
    this.activeTab = tab;
  }
}
