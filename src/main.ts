import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient  } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { BubbleSortComponent } from './app/bubble-sort/bubble-sort.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: BubbleSortComponent }
    ]),
    provideHttpClient()
  ]
});
