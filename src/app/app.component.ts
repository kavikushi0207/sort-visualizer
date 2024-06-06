import { Component } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'sorting-visualizer';
}
