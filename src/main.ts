import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app/app.routes';
import { HomeComponent } from './app/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterOutlet],
  template: `<router-outlet></router-outlet>`
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});