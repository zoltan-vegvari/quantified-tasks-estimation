import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimationCardComponent } from '../estimation-card/estimation-card.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, EstimationCardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  sessionCreated = false;
  shareableLink = '';
  workItems: any[] = [];
  newItemTitle = '';

  createSession() {
    this.sessionCreated = true;
    this.shareableLink = `${window.location.origin}/session/${this.generateSessionId()}`;
  }

  generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15);
  }

  copyLink(input: HTMLInputElement) {
    input.select();
    document.execCommand('copy');
  }

  addWorkItem() {
    if (this.newItemTitle) {
      this.workItems.push({
        id: Date.now().toString(),
        title: this.newItemTitle,
        distance: 0,
        friction: 0,
        relativity: 0
      });
      this.newItemTitle = '';
    }
  }

  updateDistance(item: any, value: number) {
    item.distance = value;
  }

  updateFriction(item: any, value: number) {
    item.friction = value;
  }

  updateRelativity(item: any, value: number) {
    item.relativity = value;
  }
}