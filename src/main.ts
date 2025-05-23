import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<app-home></app-home>`
})
export class App {}

bootstrapApplication(App);